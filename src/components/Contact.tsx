import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export const Contact = () => {
  const waLink = `https://wa.me/55${site.phone}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-10 md:p-16 text-center shadow-elegant"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-5">
            Vamos conversar
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-[1.1]">
            Construir interfaces, estruturar produtos web ou transformar uma{" "}
            <span className="text-gradient">ideia em solução funcional</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Aberto para oportunidades, freelances e colaborações. Resposta
            rápida e direta.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:bg-primary-hover transition-colors"
            >
              <MessageCircle size={16} />
              Conversar no WhatsApp
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:+55${site.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium hover:bg-card transition-colors"
            >
              <Phone size={16} />
              Ligar {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium hover:bg-card transition-colors"
            >
              <Mail size={16} />
              E-mail
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium hover:bg-card transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 text-xs text-muted-foreground font-mono">
            {site.email}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
