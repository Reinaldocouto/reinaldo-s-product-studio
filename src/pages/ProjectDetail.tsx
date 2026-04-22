import { Link, useParams, Navigate, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { Seo } from "@/components/Seo";

const accentMap = {
  teal: "from-primary/30 via-primary/10 to-transparent",
  blue: "from-accent-blue/30 via-accent-blue/10 to-transparent",
  amber: "from-amber-400/30 via-amber-400/10 to-transparent",
} as const;

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project?.slug]);

  if (!project) return <Navigate to="/" replace />;

  const others = projects.filter((p) => p.slug !== project.slug);

  const handleBack = () => {
    const fromProjects = Boolean((location.state as { fromProjects?: boolean } | null)?.fromProjects);
    if (fromProjects) {
      navigate(-1);
      return;
    }
    navigate("/#projetos");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Seo
        title={`${project.name} — Case de produto | ${site.name}`}
        description={project.summary}
        image={`${site.baseUrl}${project.cover}`}
        url={`${site.baseUrl}/projetos/${project.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: `${project.name} — Case de produto`,
          description: project.summary,
          author: {
            "@type": "Person",
            name: site.name,
            url: site.baseUrl,
          },
          inLanguage: "pt-BR",
          url: `${site.baseUrl}/projetos/${project.slug}`,
        }}
      />
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container-tight">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Voltar para projetos
          </button>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">Case de produto</div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">{project.name}</h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">{project.tagline}</p>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8">
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-border h-72 md:h-96 bg-gradient-to-br",
                  accentMap[project.accent]
                )}
              >
                <img src={project.cover} alt={`Tela principal do case ${project.name}`} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-background/25" />
              </div>
            </div>
            <div className="md:col-span-4 space-y-4">
              <MetaCard label="Stack" items={project.stack} />
              <MetaCard label="Highlights" items={project.highlights} />
              <div className="rounded-xl border border-border bg-card/40 p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">Links</div>
                <div className="flex flex-col gap-2 text-sm">
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                      <Github size={14} /> Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-12">
              <Block label="Visão geral" body={project.caseStudy.overview} />
              <Block label="Problema" body={project.caseStudy.problem} />
              <Block label="Solução" body={project.caseStudy.solution} />
              <Block label="Minha atuação" body={project.caseStudy.role} />
              <ListBlock label="Decisões de produto e UX" items={project.caseStudy.productDecisions} />
              <ListBlock label="Desafios técnicos reais" items={project.caseStudy.technicalChallenges} />
              <ListBlock label="Trade-offs" items={project.caseStudy.tradeOffs} />
              <ListBlock label="Aprendizados" items={project.caseStudy.learnings} />
              <Block label="Resultado" body={project.caseStudy.outcome} />
            </div>

            <aside className="lg:col-span-4">
              <Label>Galeria de telas</Label>
              <div className="mt-5 space-y-4">
                {project.caseStudy.gallery.map((item) => (
                  <figure key={item.src} className="rounded-xl border border-border bg-card/30 overflow-hidden">
                    <img src={item.src} alt={item.alt} className="w-full h-44 object-cover" loading="lazy" />
                    <figcaption className="px-4 py-3 text-xs text-muted-foreground leading-relaxed">{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-24 pt-12 border-t border-border/60">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-6">Outros cases</div>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projetos/${p.slug}`}
                  state={{ fromProjects: true }}
                  className="group rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/40 transition-all"
                >
                  <div className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{p.name}</div>
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
  <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">{children}</div>
);

const Block = ({ label, body }: { label: string; body: string }) => (
  <div>
    <Label>{label}</Label>
    <p className="mt-4 text-base md:text-lg text-foreground/90 leading-relaxed">{body}</p>
  </div>
);

const ListBlock = ({ label, items }: { label: string; items: string[] }) => (
  <div>
    <Label>{label}</Label>
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-foreground/90 leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MetaCard = ({ label, items }: { label: string; items: string[] }) => (
  <div className="rounded-xl border border-border bg-card/40 p-5">
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">{label}</div>
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
