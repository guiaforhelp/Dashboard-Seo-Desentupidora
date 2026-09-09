import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createStoredFile, listStoredFilesByOwner, removeStoredFileMetadata } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { storagePut } from "./storage";

const maxUploadBytes = 10 * 1024 * 1024;
const fileCategories = ["Relatório semanal", "Base de dados", "Print ou anexo", "Outro"] as const;
const allowedMimeTypes = new Set([
  "application/pdf",
  "text/html",
  "text/plain",
  "text/csv",
  "application/json",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
  "image/png",
  "image/jpeg",
  "image/webp",
]);

function safeFileName(fileName: string) {
  const normalized = fileName.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  return normalized.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "arquivo";
}

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  files: router({
    list: protectedProcedure.query(({ ctx }) => listStoredFilesByOwner(ctx.user.id)),
    upload: protectedProcedure
      .input(z.object({
        originalName: z.string().trim().min(1).max(255),
        mimeType: z.string().trim().min(1).max(160),
        category: z.enum(fileCategories),
        base64: z.string().min(1).max(14_000_000),
      }))
      .mutation(async ({ ctx, input }) => {
        if (!allowedMimeTypes.has(input.mimeType)) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "Tipo de arquivo não permitido." });
        }

        const fileBuffer = Buffer.from(input.base64, "base64");
        if (fileBuffer.length === 0 || fileBuffer.length > maxUploadBytes) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "O arquivo deve ter até 10 MB." });
        }

        const { key, url } = await storagePut(
          `seo-dashboard/${ctx.user.id}/${Date.now()}-${safeFileName(input.originalName)}`,
          fileBuffer,
          input.mimeType,
        );

        return createStoredFile({
          ownerId: ctx.user.id,
          originalName: input.originalName,
          storageKey: key,
          storageUrl: url,
          mimeType: input.mimeType,
          sizeBytes: fileBuffer.length,
          category: input.category,
        });
      }),
    remove: protectedProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .mutation(async ({ ctx, input }) => {
        const removed = await removeStoredFileMetadata(input.id, ctx.user.id);
        if (!removed) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Arquivo não encontrado." });
        }
        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
