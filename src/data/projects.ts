export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  challenges: string[];
  outcome: string;
  stack: string[];
  highlights: string[];
  links?: { demo?: string; github?: string };
  accent: "teal" | "blue" | "amber";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "togo",
    name: "TOGO",
    tagline: "Plataforma de gestão modular orientada à operação real.",
    description:
      "Sistema web de gestão completo: dashboard, agenda, cadastros, prontuário, estoque, PDV, financeiro e relatórios — pensado para escalar com a operação.",
    problem:
      "Operações de pequeno e médio porte sofrem com sistemas engessados, fluxos desconectados e dados espalhados em planilhas e ferramentas isoladas.",
    solution:
      "Plataforma modular com módulos integrados (agenda, cadastros, prontuário, estoque, PDV, financeiro e relatórios) e uma camada visual coerente que apoia a tomada de decisão diária.",
    role:
      "Defini a arquitetura do produto, modelei domínios e dados, projetei a navegação operacional e implementei front-end, integrações e UI.",
    challenges: [
      "Modelar fluxos integrados sem acoplar demais os módulos",
      "Construir uma UI consistente entre áreas muito distintas (clínico, financeiro, estoque)",
      "Garantir que o dashboard fosse útil de verdade — e não decorativo",
    ],
    outcome:
      "Arquitetura preparada para expansão modular, com módulos em produção e fluxo operacional coerente ponta a ponta.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vite"],
    highlights: ["Arquitetura modular", "Operação ponta a ponta", "UI coerente"],
    links: { demo: "https://togo-petcare-pro.vercel.app/" },
    accent: "teal",
    featured: true,
  },
  {
    slug: "estaciona-ai",
    name: "Estaciona Aí",
    tagline: "Descoberta de vagas com mapas, autenticação e jornada de pagamento.",
    description:
      "Produto digital orientado à experiência do usuário, com geolocalização, mapa interativo e fluxo completo de descoberta e reserva de vagas.",
    problem:
      "Encontrar e reservar vagas em centros urbanos é caótico — informação dispersa, falta de previsibilidade e fricção no pagamento.",
    solution:
      "App web com mapa interativo, autenticação, descoberta contextual de vagas próximas e fluxo de pagamento integrado, tudo em uma jornada coesa.",
    role:
      "Conduzi a UX da jornada, integrei mapas e geolocalização, implementei autenticação e desenhei o fluxo de pagamento.",
    challenges: [
      "Integrar mapa interativo com performance em mobile",
      "Manter contexto de localização sem comprometer privacidade",
      "Tornar a jornada de pagamento simples sem perder confiabilidade",
    ],
    outcome:
      "Jornada ponta a ponta funcional, com fluxo claro entre busca, escolha e pagamento.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Mapbox", "Supabase Auth", "Stripe"],
    highlights: ["Mapas interativos", "Auth + Pagamento", "UX orientada"],
    links: { demo: "https://estaciona-ai-hub.vercel.app/" },
    accent: "blue",
    featured: true,
  },
  {
    slug: "clima-safe",
    name: "Clima Safe",
    tagline: "Aplicação de utilidade pública com clima, mapa e alertas contextuais.",
    description:
      "Integra dados climáticos em tempo real, mapa interativo e navegação contextual para apoiar decisões em ambientes urbanos.",
    problem:
      "Informação climática crítica costuma estar fragmentada e descontextualizada do local em que o usuário está.",
    solution:
      "Aplicação que cruza geolocalização, dados climáticos em tempo real e alertas, entregando contexto útil e direto na interface.",
    role:
      "Defini o conceito do produto, integrei APIs externas de clima e mapa, e construí a interface de alertas e contexto.",
    challenges: [
      "Sincronizar geolocalização com dados externos de clima",
      "Comunicar risco com clareza sem causar alarmismo",
      "Tornar utilidade pública agradável visualmente",
    ],
    outcome:
      "Aplicação funcional com proposta clara de utilidade urbana e social, integrando dados externos com fluidez.",
    stack: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API", "Mapbox", "Vite"],
    highlights: ["Dados em tempo real", "Geolocalização", "Utilidade social"],
    links: { demo: "https://urban-heat-safe-zones.vercel.app/" },
    accent: "amber",
    featured: true,
  },
];
