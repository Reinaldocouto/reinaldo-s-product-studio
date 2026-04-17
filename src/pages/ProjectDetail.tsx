import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const accentMap = {
  teal: "from-primary/30 via-primary/10 to-transparent",
  blue: "from-accent-blue/30 via-accent-blue/10 to-transparent",
  amber: "from-amber-400/30 via-amber-400/10 to-transparent",
} as const;

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} — Case study | Reinaldo Couto`;
    }
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container-tight">
          <Link
            to="/#projetos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Voltar
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
              Case study
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              {project.name}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </motion.div>

          {/* Hero visual */}
          <div
            className={cn(
              "mt-12 relative overflow-hidden rounded-3xl border border-border h-72 md:h-96 bg-gradient-to-br",
              accentMap[project.accent as keyof typeof accentMap]
            )}
          >
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-display text-7xl md:text-9xl font-bold text-foreground/10">
                {project.name}
              </div>
            </div>
          </div>

          {/* Meta grid */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <MetaCard label="Stack" items={project.stack} />
            <MetaCard label="Highlights" items={project.highlights} />
            <div className="rounded-xl border border-border bg-card/40 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">
                Links
              </div>
              <div className="flex flex-col gap-2 text-sm">
                {project.links?.demo && (
                  <a href={project.links.demo} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
                {project.links?.github && (
                  <a href={project.links.github} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    <Github size={14} /> Código
                  </a>
                )}
                {!project.links && (
                  <span className="text-muted-foreground text-xs">Em breve</span>
                )}
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-16 space-y-14 max-w-3xl">
            <Block label="Problema" body={project.problem} />
            <Block label="Solução" body={project.solution} />
            <Block label="Minha atuação" body={project.role} />
            <div>
              <Label>Desafios técnicos</Label>
              <ul className="mt-4 space-y-3">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-foreground/90 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Block label="Resultado" body={project.outcome} />
          </div>

          {/* Other projects */}
          <div className="mt-24 pt-12 border-t border-border/60">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-6">
              Outros cases
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projetos/${p.slug}`}
                  className="group rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/40 transition-all"
                >
                  <div className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {p.name}
                  </div>
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
    {children}
  </div>
);

const Block = ({ label, body }: { label: string; body: string }) => (
  <div>
    <Label>{label}</Label>
    <p className="mt-4 text-base md:text-lg text-foreground/90 leading-relaxed">
      {body}
    </p>
  </div>
);

const MetaCard = ({ label, items }: { label: string; items: string[] }) => (
  <div className="rounded-xl border border-border bg-card/40 p-5">
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">
      {label}
    </div>
    <div className="flex flex-wrap gap-1.5">
      {items.map((i) => (
        <span
          key={i}
          className="font-mono text-[11px] rounded border border-border/70 bg-background-secondary/60 px-2 py-1 text-muted-foreground"
        >
          {i}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectDetail;
