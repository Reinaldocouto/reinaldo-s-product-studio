import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { site } from "@/data/site";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-primary/10 blur-[140px] animate-glow-pulse pointer-events-none" />

      <div className="container-tight relative grid md:grid-cols-12 gap-12 items-center">
        {/* Left: text */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponível para projetos e oportunidades
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            {site.name.split(" ")[0]}{" "}
            <span className="text-gradient">{site.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Desenvolvedor com visão de produto, operação e experiência real de
            sistema. Crio aplicações web com foco em organização, contexto e
            entrega consistente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:bg-primary-hover transition-colors"
            >
              Ver projetos
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground hover:bg-card transition-colors"
            >
              Falar comigo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-5 text-muted-foreground"
          >
            <a href={site.social.github} aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-foreground transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={site.social.cv} aria-label="Currículo" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5 text-xs">
              <FileText size={16} />
              Currículo
            </a>
          </motion.div>
        </div>

        {/* Right: visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-5 hidden md:block"
        >
          <div className="glass-card rounded-2xl p-6 shadow-elegant">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                ~/reinaldo --profile
              </span>
            </div>
            <div className="font-mono text-[13px] leading-relaxed space-y-1.5">
              <div><span className="text-muted-foreground">const</span> <span className="text-primary">profile</span> = {"{"}</div>
              <div className="pl-4"><span className="text-accent-blue">role</span>: <span className="text-foreground">"Product-minded dev"</span>,</div>
              <div className="pl-4"><span className="text-accent-blue">focus</span>: [<span className="text-foreground">"web", "produto", "operação"</span>],</div>
              <div className="pl-4"><span className="text-accent-blue">stack</span>: [<span className="text-foreground">"React", "TS", "Supabase"</span>],</div>
              <div className="pl-4"><span className="text-accent-blue">building</span>: <span className="text-foreground">"sistemas úteis e escaláveis"</span>,</div>
              <div>{"}"};</div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {["React", "TypeScript", "Supabase", "Tailwind", "Mapbox", "Postgres"].map((t) => (
                <span
                  key={t}
                  className="text-center rounded-md border border-border bg-background-secondary/60 px-2 py-1.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-primary/60 to-transparent animate-scroll-indicator" />
      </div>
    </section>
  );
};
