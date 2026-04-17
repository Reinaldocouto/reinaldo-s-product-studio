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

export const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const [first, ...rest] = featured;

  return (
    <section id="projetos" className="section-padding relative">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Projetos selecionados"
          title="Trabalhos com foco em produto e execução."
          description="Três projetos que mostram contexto, decisão e capacidade de entrega ponta a ponta."
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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/40 hover:border-primary/40 transition-all",
        large ? "lg:row-span-2 min-h-[520px]" : "min-h-[250px]"
      )}
    >
      <Link to={`/projetos/${project.slug}`} className="absolute inset-0 z-20">
        <span className="sr-only">Ver case {project.name}</span>
      </Link>

      {/* Visual area */}
      <div
        className={cn(
          "relative overflow-hidden",
          large ? "h-72" : "h-44"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            accentMap[project.accent]
          )}
        />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-display text-6xl md:text-7xl font-bold text-foreground/10 group-hover:text-foreground/15 transition-colors">
            {project.name}
          </div>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <div className="rounded-full border border-border/80 bg-background/60 backdrop-blur p-2 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
          <span className={cn("h-1.5 w-1.5 rounded-full", accentText[project.accent], "bg-current")} />
          Case study
        </div>
        <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">
          {project.name}
        </h3>
        <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-5">
          {project.tagline}
        </p>
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
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="relative z-30 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-primary hover:text-primary-hover transition-colors story-link"
          >
            Ver demo <ExternalLink size={12} />
          </a>
        )}
      </div>
    </motion.div>
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
    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
      {eyebrow}
    </div>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);
