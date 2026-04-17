import { motion } from "framer-motion";
import { SectionHeading } from "./Projects";

export const About = () => {
  return (
    <section id="sobre" className="section-padding relative">
      <div className="container-tight">
        <SectionHeading eyebrow="Sobre" title="Tecnologia com leitura de contexto." />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-7"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
              Quem sou
            </div>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              Desenvolvedor em transição consolidada para tecnologia, com
              experiência prática em software, visão de produto e bagagem
              anterior em ambiente crítico — onde decisão, leitura de contexto
              e responsabilidade operacional eram parte da rotina.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-7"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
              Diferencial
            </div>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              Sistema não é só tela bonita. Sistema precisa organizar rotina,
              reduzir atrito, apoiar decisão e funcionar de verdade — e é com
              esse olhar que construo cada projeto: do banco até a interface.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
