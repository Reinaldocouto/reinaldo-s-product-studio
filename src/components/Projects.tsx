import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const accentMap = {
  teal: "from-primary/30 via-primary/10 to-transparent",
  blue: "from-accent-blue/30 via-accent-blue/10 to-transparent",
  amber: "from-amber-400/30 via-amber-400/10 to-transparent",
} as const;

const accentText = {
  teal: "text-primary",
  blue: "text-accent-blue",
  amber: "text-amber-400",
} as const;

const saveProjectsContext = () => {
  sessionStorage.setItem("projects-scroll-y", String(window.scrollY));
};

export const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const [first, ...rest] = featured;

  return (
    <section id="projetos" className="section-padding relative">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Projetos selecionados"
          title="Cases com profundidade de produto e execução técnica."
          description="Projetos com contexto real, decisões explícitas e evidência visual da solução construída."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectCard project={first} large />
          <div className="grid grid-cols-1 gap-6">
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  large = false,
}: {
  project: (typeof projects)[number];
  large?: boolean;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/40 hover:border-primary/40 transition-all",
        large ? "lg:row-span-2 min-h-[540px]" : "min-h-[280px]"
      )}
    >
      <Link
        to={`/projetos/${project.slug}`}
        state={{ fromProjects: true }}
        onClick={saveProjectsContext}
        className="absolute inset-0 z-20"
      >
        <span className="sr-only">Abrir página de case {project.name}</span>
      </Link>

      <div className={cn("relative overflow-hidden border-b border-border/70", large ? "h-72" : "h-48")}>
        <img
          src={large ? project.cover : project.thumb}
          alt={`Preview do projeto ${project.name}`}
          className="h-full w-full object-cover object-center opacity-90 group-hover:scale-[1.015] transition-transform duration-500"
          loading="lazy"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-br", accentMap[project.accent])} />
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full border border-border/80 bg-background/70 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-foreground/90">
          Ver case <ArrowUpRight size={13} className="text-primary" />
        </div>
      </div>

      <div className="p-6 md:p-7">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
          <span className={cn("h-1.5 w-1.5 rounded-full", accentText[project.accent], "bg-current")} />
          Página de case
        </div>
        <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{project.name}</h3>
        <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-5">{project.summary}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.slice(0, large ? 6 : 4).map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] rounded border border-border/70 bg-background-secondary/60 px-2 py-1 text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="relative z-30 flex flex-wrap items-center gap-4">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-primary hover:text-primary-hover transition-colors story-link"
            >
              Ver demo <ExternalLink size={12} />
            </a>
          )}
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            Clique no card para abrir o case completo
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <div className="max-w-2xl mb-14">
    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">{eyebrow}</div>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">{title}</h2>
    {description && <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>}
  </div>
);
