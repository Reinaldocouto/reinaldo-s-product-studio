import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

export const Footer = () => {
  const waLink = `https://wa.me/55${site.phone}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Construído com cuidado.
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
            <Github size={16} />
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={waLink} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-foreground transition-colors">
            <MessageCircle size={16} />
          </a>
          <a href={`tel:+55${site.phone}`} aria-label="Telefone" className="hover:text-foreground transition-colors">
            <Phone size={16} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-foreground transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
