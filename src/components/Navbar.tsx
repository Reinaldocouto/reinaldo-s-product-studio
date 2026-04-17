import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hrefFor = (href: string) => (isHome ? href : `/${href}`);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-display text-base font-semibold tracking-tight"
        >
          reinaldo<span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={hrefFor(l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={hrefFor("#contato")}
          className="hidden md:inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Falar comigo
        </a>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menu"
          className="md:hidden p-2 text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="container-tight py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={hrefFor(l.href)}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
