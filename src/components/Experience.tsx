import { motion } from "framer-motion";
import { experience } from "@/data/site";
import { SectionHeading } from "./Projects";

export const Experience = () => {
  return (
    <section className="section-padding relative">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Trajetória"
          title="Repertório que vai além do código."
        />

        <div className="relative">
          <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-0 md:left-1 top-1.5 h-6 w-6 md:h-7 md:w-7 rounded-full border border-primary/40 bg-background flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse-soft" />
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-1.5">
                  {e.period}
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold mb-2">
                  {e.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {e.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
