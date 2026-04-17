import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Construído com cuidado.
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href={site.social.github} aria-label="GitHub" className="hover:text-foreground transition-colors">
            <Github size={16} />
          </a>
          <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-foreground transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
