import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { site } from "@/data/site";
import { Seo } from "@/components/Seo";

const Index = () => {
  useEffect(() => {
    const isProjectsHash = window.location.hash === "#projetos";
    const savedY = sessionStorage.getItem("projects-scroll-y");

    if (!isProjectsHash) return;

    if (savedY) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: Number(savedY), behavior: "auto" });
      });
      sessionStorage.removeItem("projects-scroll-y");
      return;
    }

    const projectsSection = document.getElementById("projetos");
    if (projectsSection) {
      requestAnimationFrame(() => projectsSection.scrollIntoView({ behavior: "auto", block: "start" }));
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Seo
        title={`${site.name} — Desenvolvedor com visão de produto`}
        description={site.description}
        image={`${site.baseUrl}/social/og-image.svg`}
        url={site.baseUrl}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.name,
            jobTitle: site.role,
            url: site.baseUrl,
            email: site.email,
            sameAs: [site.social.github, site.social.linkedin],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: `${site.name} | Portfólio`,
            url: site.baseUrl,
            inLanguage: "pt-BR",
          },
        ]}
      />
      <Navbar />
      <Hero />
      <Highlights />
      <Projects />
      <About />
      <Stack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
