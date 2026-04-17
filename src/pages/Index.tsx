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

const Index = () => {
  useEffect(() => {
    document.title = `${site.name} — Desenvolvedor com visão de produto`;
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Portfólio de Reinaldo Couto: desenvolvedor web com foco em produto, operação e execução. React, TypeScript, Supabase e sistemas reais.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
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
