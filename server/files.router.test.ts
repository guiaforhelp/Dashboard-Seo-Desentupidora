import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createAuthenticatedContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "storage-test-user",
      name: "Storage Test",
      email: "storage@example.com",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("files.upload", () => {
  it("rejects file formats outside the approved allowlist before storage", async () => {
    const caller = appRouter.createCaller(createAuthenticatedContext());

    await expect(
      caller.files.upload({
        originalName: "arquivo.exe",
        mimeType: "application/x-msdownload",
        category: "Outro",
        base64: "AA==",
      }),
    ).rejects.toMatchObject({
      code: "BAD_REQUEST",
      message: "Tipo de arquivo não permitido.",
    });
  });
});
