import DashboardLayout from '@/components/DashboardLayout';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { trpc } from '@/lib/trpc';
import { Download, FileArchive, FileText, FolderOpen, Image, Loader2, Trash2, UploadCloud } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const categories = ['Relatório semanal', 'Base de dados', 'Print ou anexo', 'Outro'] as const;
type FileCategory = typeof categories[number];

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileIcon(mimeType: string) {
  if (mimeType.startsWith('image/')) return <Image className="h-5 w-5" />;
  if (mimeType.includes('spreadsheet') || mimeType.includes('excel') || mimeType === 'text/csv') return <FileArchive className="h-5 w-5" />;
  return <FileText className="h-5 w-5" />;
}

function normalizeMimeType(file: File) {
  if (file.type) return file.type;
  const extension = file.name.split('.').pop()?.toLowerCase();
  const mimeByExtension: Record<string, string> = {
    pdf: 'application/pdf', html: 'text/html', htm: 'text/html', txt: 'text/plain', csv: 'text/csv',
    json: 'application/json', xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xls: 'application/vnd.ms-excel', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp',
  };
  return mimeByExtension[extension ?? ''] ?? 'application/octet-stream';
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Não foi possível ler o arquivo selecionado.'));
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== 'string') return reject(new Error('Formato de arquivo inválido.'));
      resolve(result.split(',')[1] ?? '');
    };
    reader.readAsDataURL(file);
  });
}

function FileLibraryContent() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState<FileCategory>('Relatório semanal');
  const [fileToRemove, setFileToRemove] = useState<{ id: number; name: string } | null>(null);
  const utils = trpc.useUtils();
  const filesQuery = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: async () => {
      await utils.files.list.invalidate();
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      toast.success('Arquivo salvo com segurança.');
    },
    onError: (error) => toast.error(error.message || 'Não foi possível enviar o arquivo.'),
  });
  const removeMutation = trpc.files.remove.useMutation({
    onSuccess: async () => {
      await utils.files.list.invalidate();
      setFileToRemove(null);
      toast.success('Arquivo removido da biblioteca.');
    },
    onError: (error) => toast.error(error.message || 'Não foi possível remover o arquivo.'),
  });

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) {
      toast.error('Escolha um arquivo de até 10 MB.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error('Selecione um arquivo para enviar.');
      return;
    }
    const mimeType = normalizeMimeType(selectedFile);
    if (mimeType === 'application/octet-stream') {
      toast.error('Formato não suportado. Envie PDF, HTML, CSV, JSON, Excel, TXT ou imagem.');
      return;
    }
    try {
      const base64 = await fileToBase64(selectedFile);
      uploadMutation.mutate({ originalName: selectedFile.name, mimeType, category, base64 });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Não foi possível preparar o arquivo.');
    }
  };

  return <div className="min-h-screen bg-[#f2f2f7] px-3 py-4 md:px-8 md:py-8">
    <div className="mx-auto max-w-6xl">
      <header className="mb-8 rounded-[28px] bg-gradient-to-r from-[#183347] via-[#274d64] to-[#895838] p-7 text-white shadow-[0_18px_45px_rgba(32,60,80,0.16)] md:p-9">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-orange-100"><FolderOpen className="h-4 w-4 text-[#ff6737]" />BIBLIOTECA SEGURA</div><h1 className="font-poppins text-4xl font-bold tracking-[-0.03em] md:text-5xl">Arquivos do Relatório</h1><p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-200">Envie relatórios, planilhas, capturas e bases de dados. O conteúdo é armazenado fora do banco; apenas os metadados e a referência segura ficam registrados aqui.</p></div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-gray-100"><p className="font-semibold">Limite por arquivo: 10 MB</p><p className="mt-1 text-xs text-gray-300">PDF, HTML, CSV, JSON, Excel, TXT e imagens.</p></div>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.6fr]">
        <section className="card-premium h-fit"><div className="mb-5 flex items-center gap-3"><div className="rounded-xl bg-[#fff0eb] p-3 text-[#ff6737]"><UploadCloud className="h-6 w-6" /></div><div><h2 className="section-subtitle mb-0">Enviar arquivo</h2><p className="text-xs text-gray-500">Disponível somente para sua conta.</p></div></div>
          <div className="space-y-4"><div><Label htmlFor="report-file" className="mb-2 block text-sm font-semibold text-[#203c50]">Arquivo</Label><Input id="report-file" ref={fileInputRef} type="file" accept=".pdf,.html,.htm,.txt,.csv,.json,.xlsx,.xls,.png,.jpg,.jpeg,.webp" onChange={(event) => handleFileChange(event.target.files?.[0] ?? null)} /></div><div><Label className="mb-2 block text-sm font-semibold text-[#203c50]">Categoria</Label><Select value={category} onValueChange={(value) => setCategory(value as FileCategory)}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{categories.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select></div>{selectedFile && <div className="rounded-xl border border-[#dbe5ec] bg-[#f8fbfc] p-4"><p className="truncate text-sm font-semibold text-[#203c50]">{selectedFile.name}</p><p className="mt-1 text-xs text-gray-500">{formatBytes(selectedFile.size)} · {normalizeMimeType(selectedFile)}</p></div>}<Button className="w-full bg-[#ff6737] text-white hover:bg-[#e55a28]" disabled={!selectedFile || uploadMutation.isPending} onClick={handleUpload}>{uploadMutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UploadCloud className="mr-2 h-4 w-4" />}{uploadMutation.isPending ? 'Enviando...' : 'Salvar arquivo'}</Button></div>
        </section>

        <section className="card-premium"><div className="mb-5 flex items-center justify-between gap-4"><div><h2 className="section-subtitle mb-1">Arquivos salvos</h2><p className="text-sm text-gray-500">Acesse ou remova as referências que pertencem à sua conta.</p></div><span className="rounded-full bg-[#fff0eb] px-3 py-1 text-sm font-bold text-[#d95729]">{filesQuery.data?.length ?? 0}</span></div>{filesQuery.isLoading ? <div className="flex min-h-52 items-center justify-center text-sm text-gray-500"><Loader2 className="mr-2 h-5 w-5 animate-spin" />Carregando biblioteca...</div> : filesQuery.data?.length ? <div className="divide-y divide-gray-100">{filesQuery.data.map((file) => <article key={file.id} className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex min-w-0 items-center gap-3"><div className="rounded-xl bg-[#edf3f6] p-3 text-[#203c50]">{getFileIcon(file.mimeType)}</div><div className="min-w-0"><p className="truncate font-semibold text-[#203c50]">{file.originalName}</p><p className="mt-1 text-xs text-gray-500">{file.category} · {formatBytes(file.sizeBytes)} · {new Date(file.createdAt).toLocaleDateString('pt-BR')}</p></div></div><div className="flex shrink-0 gap-2"><Button asChild variant="outline" size="sm"><a href={file.storageUrl} target="_blank" rel="noreferrer"><Download className="mr-2 h-4 w-4" />Abrir</a></Button><Button variant="outline" size="icon" className="text-red-600 hover:bg-red-50 hover:text-red-700" aria-label={`Remover ${file.originalName}`} onClick={() => setFileToRemove({ id: file.id, name: file.originalName })}><Trash2 className="h-4 w-4" /></Button></div></article>)}</div> : <div className="flex min-h-52 flex-col items-center justify-center rounded-2xl border border-dashed border-[#dbe5ec] bg-[#f8fbfc] px-6 text-center"><FileText className="mb-3 h-9 w-9 text-[#ff6737]" /><p className="font-semibold text-[#203c50]">Nenhum arquivo salvo ainda</p><p className="mt-1 max-w-sm text-sm leading-relaxed text-gray-500">Envie o primeiro relatório, base de dados ou print para começar a organizar o histórico semanal.</p></div>}</section>
      </div>
      <p className="mx-auto mt-6 max-w-6xl text-xs leading-relaxed text-gray-500">Ao remover um arquivo, a referência é excluída da biblioteca e ele deixa de ficar acessível pela aplicação. O conteúdo do arquivo não é armazenado no banco de dados.</p>
    </div>
    <AlertDialog open={Boolean(fileToRemove)} onOpenChange={(open) => { if (!open) setFileToRemove(null); }}><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Remover arquivo da biblioteca?</AlertDialogTitle><AlertDialogDescription>“{fileToRemove?.name}” deixará de estar disponível na aplicação. Esta ação remove a referência do seu histórico.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancelar</AlertDialogCancel><AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={() => { if (fileToRemove) removeMutation.mutate({ id: fileToRemove.id }); }}>Remover</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>
  </div>;
}

export default function FileLibrary() { return <DashboardLayout><FileLibraryContent /></DashboardLayout>; }
