import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, FileText, ExternalLink } from "lucide-react";
import { ReactNode } from "react";
import { site } from "@/data/site";

type Props = { trigger: ReactNode };

export const CvDialog = ({ trigger }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 gap-0 bg-card border-border">
        <DialogHeader className="px-6 py-4 border-b border-border flex-row items-center justify-between space-y-0">
          <DialogTitle className="flex items-center gap-2 text-base font-display">
            <FileText size={16} className="text-primary" />
            Currículo — {site.name}
          </DialogTitle>
          <div className="flex items-center gap-2 mr-8">
            <a
              href={site.social.cv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs hover:bg-background transition-colors"
            >
              <ExternalLink size={13} />
              Abrir
            </a>
            <a
              href={site.social.cv}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
            >
              <Download size={13} />
              Baixar PDF
            </a>
          </div>
        </DialogHeader>
        <div className="flex-1 bg-background-secondary overflow-hidden">
          <iframe
            src={`${site.social.cv}#view=FitH`}
            title="Currículo Reinaldo Couto"
            className="w-full h-full border-0"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
