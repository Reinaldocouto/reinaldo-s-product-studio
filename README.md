# Reinaldo Couto — Product Studio Portfolio

Portfólio profissional focado em apresentar experiência prática em software, visão de produto e capacidade de execução ponta a ponta.

## Visão geral

Este projeto apresenta cases autorais com profundidade de contexto, decisões de UX/produto, desafios técnicos, trade-offs e resultados.

Objetivo: transmitir maturidade profissional para freelances, consultoria e oportunidades de produto/front-end.

## Stack

- React 18 + TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Componentes utilitários com Radix UI (apenas onde necessário)

## Estrutura de pastas

```txt
src/
  components/         # Seções da home e componentes reutilizáveis
  data/               # Conteúdo estruturado (site e cases)
  pages/              # Rotas (Home, detalhe do case, 404)
  lib/                # Utilitários (incluindo SEO)
  hooks/              # Hooks auxiliares
public/
  projects/           # Imagens/previews dos cases
  social/             # Imagens para compartilhamento (OG/Twitter)
  brand/              # Ativos de identidade (favicon)
```

## Objetivos de design

- Manter identidade dark premium com alta legibilidade.
- Evidenciar produto real (não só abstração visual).
- Melhorar narrativa comercial e posicionamento profissional.
- Preservar fluidez de navegação com contexto entre home e case.

## Instalação

```bash
npm install
npm run dev
```

A aplicação inicia em `http://localhost:5173`.

## Scripts disponíveis

- `npm run dev`: ambiente local com hot reload.
- `npm run build`: build de produção.
- `npm run preview`: pré-visualização do build.
- `npm run lint`: validação com ESLint.
- `npm run test`: execução dos testes (Vitest).
- `npm run test:watch`: testes em modo observação.

## Estratégia de deploy

Deploy recomendado em Vercel ou Netlify:

1. Conectar o repositório.
2. Build command: `npm run build`.
3. Output dir: `dist`.
4. Configurar domínio final (ex.: `reinaldocouto.dev`) e HTTPS.

## Roadmap curto

- [ ] Substituir previews SVG por screenshots reais de produção.
- [ ] Adicionar métricas de impacto por case (tempo, retenção, conversão).
- [ ] Incluir tracking de cliques (CTA, CV e contato) para otimização de conversão.
- [ ] Evoluir seção de depoimentos/prova social.

## Referências visuais

- Home com posicionamento profissional e CTA objetivo.
- Cards com preview visual de cada produto.
- Páginas de case com estrutura completa (visão geral, desafios, trade-offs e galeria).

Ativos atuais de compartilhamento:

- `public/social/og-image.svg`
- `public/projects/*.svg`
