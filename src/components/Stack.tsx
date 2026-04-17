import { motion } from "framer-motion";
import { stack } from "@/data/site";
import { SectionHeading } from "./Projects";

export const Stack = () => {
  return (
    <section id="stack" className="section-padding relative bg-background-secondary/30 border-y border-border/60">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Stack & forma de trabalho"
          title="Ferramentas com propósito, não vitrine."
          description="As tecnologias que aparecem nos projetos reais — escolhidas por contexto, não por modismo."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {stack.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-lg font-semibold">
                  {group.group}
                </h3>
                <span className="font-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs rounded-md border border-border/70 bg-background-secondary/60 px-2.5 py-1.5 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
