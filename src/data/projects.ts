export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  cover: string;
  thumb: string;
  accent: "teal" | "blue" | "amber";
  featured?: boolean;
  highlights: string[];
  stack: string[];
  links: { demo?: string; github?: string };
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    role: string;
    productDecisions: string[];
    technicalChallenges: string[];
    tradeOffs: string[];
    learnings: string[];
    outcome: string;
    gallery: ProjectGalleryItem[];
  };
};

export const projects: Project[] = [
  {
    slug: "togo",
    name: "TOGO",
    tagline: "Plataforma de gestão modular orientada à operação real.",
    summary:
      "Sistema web de gestão com módulos integrados de agenda, atendimento, estoque, financeiro e relatórios, com foco em clareza operacional.",

    cover: "/togo.jpeg",
    thumb: "/togo.jpeg",
    accent: "teal",
    featured: true,
    highlights: [
      "Arquitetura modular",
      "Visão operacional ponta a ponta",
      "Dashboard orientado à decisão",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vite"],
    links: {
      demo: "https://togo-petcare-pro.vercel.app/",
      github: "https://github.com/Reinaldocouto",
    },
    caseStudy: {
      overview:
        "TOGO nasceu para resolver o caos operacional de negócios que dependem de rotina intensa e dados confiáveis. O foco do produto foi reduzir retrabalho e concentrar decisão em um fluxo único.",
      problem:
        "A operação estava fragmentada entre planilhas, anotações e sistemas desconectados, causando perda de contexto entre atendimento, financeiro e estoque.",
      solution:
        "Desenhei um produto modular com linguagem visual única e arquitetura de domínio organizada por módulos, permitindo crescimento por etapa sem comprometer consistência.",
      role:
        "Atuei na definição do escopo, modelagem de entidades, desenho da jornada operacional, implementação do front-end e integração com dados e autenticação.",
      productDecisions: [
        "Priorização de fluxos críticos (agenda e financeiro) antes de módulos acessórios",
        "Dashboard com métricas acionáveis, evitando excesso de informação visual",
        "Navegação por contexto de tarefa, não por estrutura técnica",
      ],
      technicalChallenges: [
        "Modelar dados compartilhados entre módulos sem acoplamento excessivo",
        "Garantir consistência de estado em formulários complexos",
        "Manter performance em telas com alto volume de informações",
      ],
      tradeOffs: [
        "Escolha por entregas modulares para acelerar validação, com menor cobertura inicial",
        "Uso de componentes reutilizáveis para consistência, mesmo com menor liberdade pontual",
      ],
      learnings: [
        "Operação real exige UX orientada à rotina, não somente estética",
        "Métricas precisam estar conectadas a decisões claras do usuário",
      ],
      outcome:
        "Produto com base escalável e fluxo operacional coeso, preparado para expansão de módulos e amadurecimento comercial.",
      gallery: [
        {

          src: "/togo.jpeg",
          alt: "Dashboard do TOGO com visão operacional",
          caption: "Visão central com indicadores e atalhos para rotinas críticas.",
        },
        {

          src: "/togo.jpeg",
          alt: "Módulos operacionais do TOGO",
          caption: "Fluxos modulares entre atendimento, estoque e financeiro.",
        },
      ],
    },
  },
  {
    slug: "estaciona-ai",
    name: "Estaciona Aí",
    tagline: "Descoberta de vagas com mapas, autenticação e jornada de pagamento.",
    summary:
      "Aplicação web para busca e reserva de vagas urbanas com mapa interativo, autenticação e fluxo de pagamento integrado.",
    cover: "/projects/estaciona-cover.svg",
    thumb: "/projects/estaciona-thumb.svg",
    accent: "blue",
    featured: true,
    highlights: ["Jornada ponta a ponta", "Mapa + geolocalização", "Pagamento integrado"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Mapbox", "Supabase Auth", "Stripe"],
    links: {
      demo: "https://estaciona-ai-hub.vercel.app/",
      github: "https://github.com/Reinaldocouto",
    },
    caseStudy: {
      overview:
        "Estaciona Aí foi desenhado para reduzir fricção em uma tarefa urbana recorrente: encontrar vaga sem perder tempo ou previsibilidade no pagamento.",
      problem:
        "A jornada de estacionamento costuma ser fragmentada e imprevisível, com baixa transparência de preço, disponibilidade e localização.",
      solution:
        "Estruturei uma experiência única de busca, seleção e pagamento com mapa interativo e contexto geográfico em tempo real.",
      role:
        "Conduzi a arquitetura de UX da jornada, integração de mapas, autenticação e pagamentos, com foco em clareza de fluxo no mobile.",
      productDecisions: [
        "Entrada principal pelo mapa para reduzir cliques e aumentar contexto",
        "Separação clara entre descoberta, confirmação e pagamento",
        "Feedbacks visuais de disponibilidade para reduzir incerteza",
      ],
      technicalChallenges: [
        "Sincronizar geolocalização com renderização eficiente do mapa",
        "Tratar falhas de rede sem quebrar a jornada de reserva",
        "Garantir transição segura para pagamento externo",
      ],
      tradeOffs: [
        "Mapa com maior riqueza visual, aceitando custo de otimização incremental",
        "Fluxo de pagamento simplificado, com menos opções na primeira versão",
      ],
      learnings: [
        "Produtos urbanos exigem resposta rápida e contexto de localização confiável",
        "A etapa de confirmação é decisiva para confiança na transação",
      ],
      outcome:
        "Case funcional de produto com jornada completa e base sólida para evolução comercial, incluindo recorrência e gestão de parceiros.",
      gallery: [
        {
          src: "/projects/estaciona-cover.svg",
          alt: "Mapa interativo do Estaciona Aí",
          caption: "Exploração de vagas por geolocalização e contexto da região.",
        },
        {
          src: "/projects/estaciona-thumb.svg",
          alt: "Fluxo de confirmação e pagamento",
          caption: "Jornada de reserva com etapas objetivas e previsíveis.",
        },
      ],
    },
  },
  {
    slug: "clima-safe",
    name: "Clima Safe",
    tagline: "Aplicação de utilidade pública com clima, mapa e alertas contextuais.",
    summary:
      "Produto digital que combina dados climáticos e geolocalização para apoiar decisões cotidianas em ambientes urbanos.",
    cover: "/projects/clima-cover.svg",
    thumb: "/projects/clima-thumb.svg",
    accent: "amber",
    featured: true,
    highlights: ["Dados em tempo real", "Alertas por contexto", "Utilidade pública"],
    stack: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API", "Mapbox", "Vite"],
    links: {
      demo: "https://urban-heat-safe-zones.vercel.app/",
      github: "https://github.com/Reinaldocouto",
    },
    caseStudy: {
      overview:
        "Clima Safe é um case focado em utilidade pública, pensado para transformar dados dispersos de clima em informação prática para decisão diária.",
      problem:
        "Informações de clima e risco costumam ser genéricas, pouco localizadas e sem priorização do que realmente importa para o usuário no momento.",
      solution:
        "Criei uma interface que cruza geolocalização, mapa e alertas por prioridade, entregando leitura rápida de risco e recomendação contextual.",
      role:
        "Atuei no conceito do produto, definição da hierarquia de informações e implementação de integrações com APIs climáticas e mapas.",
      productDecisions: [
        "Priorização visual por nível de risco e urgência",
        "Cards objetivos com recomendação prática para ação",
        "Mapa como camada de contexto e não como distração visual",
      ],
      technicalChallenges: [
        "Normalizar respostas de APIs com formatos e frequências diferentes",
        "Gerenciar estados de carregamento para dados de tempo real",
        "Garantir legibilidade dos alertas em telas pequenas",
      ],
      tradeOffs: [
        "Escolha por linguagem simples para ampliar entendimento, reduzindo tecnicidade",
        "Atualização em intervalos definidos para preservar desempenho em mobile",
      ],
      learnings: [
        "Utilidade pública exige clareza extrema de comunicação",
        "Dados em tempo real precisam de fallback para manter confiança",
      ],
      outcome:
        "Aplicação consistente com proposta social clara e base técnica preparada para ampliar cobertura regional e qualidade dos alertas.",
      gallery: [
        {
          src: "/projects/clima-cover.svg",
          alt: "Painel de alertas do Clima Safe",
          caption: "Visão dos alertas climáticos com priorização de risco.",
        },
        {
          src: "/projects/clima-thumb.svg",
          alt: "Mapa contextual do Clima Safe",
          caption: "Mapa integrado para leitura situacional do território.",
        },
      ],
    },
  },
];
