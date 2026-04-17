import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { site } from "@/data/site";

export const Contact = () => {
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
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:bg-primary-hover transition-colors"
            >
              <Mail size={16} />
              Entrar em contato
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.social.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium hover:bg-card transition-colors"
            >
              <Linkedin size={16} />
              Ver LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
