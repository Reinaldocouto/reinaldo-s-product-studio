import { motion } from "framer-motion";
import { highlights } from "@/data/site";

export const Highlights = () => {
  return (
    <section className="relative border-y border-border/60 bg-background-secondary/40">
      <div className="container-tight py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-xl border border-border/70 bg-card/40 p-5 hover:border-primary/40 hover:bg-card/70 transition-all"
            >
              <div className="font-mono text-[10px] tracking-[0.2em] text-primary/70 mb-3">
                0{i + 1}
              </div>
              <h3 className="font-display text-base font-semibold mb-2">
                {h.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
