# CLAUDE.md — One Thank Digital (site-otd)

Guia de referência rápida para o agente de IA ao trabalhar neste repositório.

---

## 1. Identidade Institucional

| Campo | Valor |
|---|---|
| **Marca** | One Thank Digital (OTD) |
| **Domínio** | https://onethank.com.br |
| **WhatsApp** | +55 (11) 97867-9090 |
| **Endereço** | Rua Monte Casseros, 281 - Centro, Santo André - SP, CEP 09015-020 |
| **Slogan** | "Somos Presença. Somos Comunicação. Somos Estrutura." |
| **Proposta de Valor** | Presença Digital Estruturada para empresas B2B do Grande ABC |
| **Tese Central** | "Não é falta de cliente. É falta de estrutura digital." |
| **Público-alvo (ICP)** | Empresários, sócios contábeis, gestores de clínicas e indústrias de Santo André e Grande ABC |

---

## 2. Comandos

```bash
npm run dev       # Dev server em localhost:5173
npm run build     # vite build && node postbuild.js (ver seção 3.5)
npm run lint      # ESLint
npm run preview   # Preview do build localmente
```

**Deploy:** automático. Todo push na `main` dispara o GitHub Actions (`.github/workflows/deploy.yml`), que faz o build e envia `dist/` por FTPS para a Napoleon Host. O mesmo workflow roda todo dia às 08:00 (Brasília) para publicar artigos com `publishDate` do dia. Conferir com `gh run list`. Não há upload manual.  
O arquivo `public/.htaccess` é copiado automaticamente para `dist/` no build e gerencia o roteamento SPA.


---

## 3. Arquitetura

### 3.1 Stack Tecnológica

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework UI | React | ^19.2 |
| Bundler | Vite | ^8.0 |
| Estilização | Tailwind CSS | ^3.4 |
| Animações | GSAP + ScrollTrigger | ^3.15 |
| SEO por rota | react-helmet-async | ^3.0 |
| Ícones | lucide-react | ^1.14 |
| Pre-rendering | @prerenderer/rollup-plugin + Puppeteer | ^0.3 / ^1.2 |
| Sitemap | vite-plugin-sitemap | ^0.8 |
| Otimização de imagens | sharp (no postbuild) | ^0.34 |
| 3D / Spline | @splinetool/react-spline | ^4.1 |

### 3.2 Roteamento Manual

Este projeto usa **correspondência de caminho manual** — sem react-router-dom.  
`App.jsx` lê `window.location.pathname` e retorna árvores de componentes diferentes via cadeia de blocos `if`.  
Navegação usa `window.history.pushState` + listener de evento `popstate`.

**Ao adicionar uma nova rota, atualizar TRÊS arquivos:**

1. `src/App.jsx` — adicionar bloco `if (currentPath === '/slug' || currentPath === '/slug/')`
2. `vite.config.js` — adicionar o caminho aos arrays `sitemapPaths` **e** `prerenderPaths`
3. `postbuild.js` — incrementar a constante `EXPECTED_SITEMAP_URLS` (linha 11) para bater com o número total de URLs

> ⚠️ Se `EXPECTED_SITEMAP_URLS` não corresponder ao total real de URLs no sitemap, o `npm run build` **falhará com erro** imediatamente após gerar o `dist/`.

### 3.3 Mapa Completo de Rotas

| Rota(s) | Componente | Tipo |
|---|---|---|
| `/` | Home (Hero + ServicosCards + HorizontalScroll + Philosophy + Protocol + Footer) | Página Principal |
| `/diagnostico`, `/quiz` | `Quiz` | Diagnóstico Digital |
| `/pilares`, `/4-pilares` | `Pilares` | Modal Standalone |
| `/historia`, `/nossa-historia` | `Historia` | Modal Standalone |
| `/agencias` | `AgenciasPage` | Página |
| `/onehub` | `OneHub` | Landing Page de Produto |
| `/cases` | `CasesPage` | Página |
| `/insights` | `BlogPage` | Listagem de Artigos |
| `/insights/categoria/*` | `CategoriaInsights` | Filtro por Categoria |
| `/insights/automacao-comercial-o-que-e` | `InsightAutomacaoComercial` | Artigo Dedicado |
| `/insights/automacao-de-processos-para-empresas` | `InsightAutomacaoProcessos` | Artigo Dedicado |
| `/insights/como-organizar-leads-whatsapp-no-crm` | `InsightWhatsAppCRM` | Artigo Dedicado |
| `/insights/*` (demais slugs) | `BlogPostPage` | Artigo via blogPosts.js |
| `/blog` | redirect → `/insights` (301) | Legado |
| `/blog/*` | `BlogPostPage` | Legado |
| `/servicos/google-meu-negocio` | `ServicosGMN` | Serviço |
| `/google-meu-negocio` | `GoogleMeuNegocio` | Serviço (alias) |
| `/servicos/criacao-de-sites`, `/servicos/criacao-de-site`, `/desenvolvimento-web-premium` | `ServicosSite` | Serviço |
| `/servicos/seo-trafego-organico`, `/servicos/seo`, `/seo-local` | `ServicosSEO` | Serviço |
| `/servicos/automacao-digital`, `/servicos/automacao`, `/automacoes-inteligentes` | `ServicosAutomacao` | Serviço |
| `/guia` | `GuiaListagem` | Hub de Guias |
| `/guia/google-meu-negocio` | `PillarGoogleMeuNegocio` | Pilar 1 |
| `/guia/desenvolvimento-web` | `PillarDesenvolvimentoWeb` | Pilar 2 |
| `/guia/automacao-digital` | `PillarAutomacaoDigital` | Pilar 3 |
| `/guia/seo-trafego-organico` | `PillarSEOTrafego` | Pilar 4 |
| `/privacidade` | `PrivacidadePage` | Legal |
| `/termos` | `TermosPage` | Legal |

### 3.4 Distinção Componente vs. Página

- `src/components/` — seções da homepage renderizadas dentro da rota home (`Hero`, `Navbar`, `ServicosCards`, `HorizontalScroll`, `Philosophy`, `Protocol`, `Footer`, `Quiz`, `Pilares`, `Historia`, `CustomCursor`, `CookieBanner`, `WhatsAppButton`, etc.)
- `src/pages/` — páginas de rota autônoma

Todos os componentes após `Hero` e todas as páginas são `React.lazy` + `Suspense` para performance.

### 3.5 Estratégia de Artigos: `BlogPostPage` vs. Componente Dedicado

| Situação | Abordagem |
|---|---|
| Artigo novo padrão do blog | Adicionar entrada em `src/data/blogPosts.js` → renderizado via `BlogPostPage` genérico |
| Artigo com layout, seções ou interações customizadas | Criar componente dedicado em `src/pages/InsightNome.jsx` e registrar rota explícita em `App.jsx` **antes** do catch-all `/insights/*` |

### 3.6 Pipeline de Build (`npm run build`)

O comando executa em sequência:

1. **`vite build`** — compila os assets, pré-renderiza todas as rotas de `prerenderPaths` via Puppeteer e gera `sitemap.xml`
2. **`node postbuild.js`** — script de pós-build que faz:
   - Remove title e description padrão da home das páginas filhas
   - Injeta `<link rel="preconnect">` do Google Fonts em todas as páginas
   - Injeta `<link rel="preload">` de imagem hero na Pillar Page de Automação
   - Atualiza meta tags Open Graph (`og:image`, `og:title`, `og:url`) de cada artigo do blog com dados do `blogPosts.js`
   - Remove `template.html` temporário
   - Deduplica e normaliza o `sitemap.xml` (trailing slash obrigatório)
   - **Valida** que o total de URLs no sitemap bate com `EXPECTED_SITEMAP_URLS` — lança erro e aborta se não bater

### 3.7 Conteúdo do Blog

Todos os artigos padrão vivem em `src/data/blogPosts.js` como objetos JS estruturados (slug, titulo, imagem, sections).  
Não há CMS. Adicionar um post requer:
1. Adicionar objeto no array de `blogPosts.js`
2. Adicionar o slug em `sitemapPaths` **e** `prerenderPaths` no `vite.config.js`
3. Incrementar `EXPECTED_SITEMAP_URLS` em `postbuild.js`

---

## 4. Design System

### 4.1 Design Tokens (Tailwind)

| Token | Valor | Uso |
|---|---|---|
| `bg-background` | `#050505` | Fundo de página (preto profundo) |
| `text-primary` | `#FFFFFF` | Texto do corpo |
| `accent` | `#e0040b` | Vermelho OTD — CTAs, destaques |
| `dark` | `#111111` | Cards, superfícies secundárias |
| `bg-fluid-gradient` | `radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)` | Gradiente de fundo fluido |

### 4.2 Tipografia

| Token Tailwind | Fonte | Uso |
|---|---|---|
| `font-heading` | Space Grotesk | Títulos, headings — fonte padrão do `<body>` |
| `font-drama` | DM Serif Display | Títulos dramáticos, hero, chamadas editoriais |
| `font-mono` | Space Mono | Elementos mono, destaques técnicos, cursor |

Fontes carregadas via Google Fonts em `index.html`.

### 4.3 Classes CSS Utilitárias (index.css)

| Classe | Comportamento |
|---|---|
| `.noise-overlay` | Textura SVG fixa, `z-index: 100`, `opacity: 0.04`, `pointer-events: none`, `mix-blend-mode: overlay` — presente em todas as rotas |
| `.magnetic-btn` | Botão com `scale(1.05)` no hover, transição cubic-bezier |
| `.no-scrollbar` | Remove scrollbar visível (webkit + Firefox) |
| `.text-clip-reveal` | `clip-path` para animações de reveal de texto com GSAP |
| `.custom-cursor` | Cursor circular branco 24px, `mix-blend-mode: difference`, expande para 80px no hover. **Desativado automaticamente** em dispositivos touch via `@media (pointer: coarse)` |
| `.animate-whatsapp-pulse` | Animação de pulsação verde no botão WhatsApp |

> **Nota:** `src/App.css` contém estilos do scaffold padrão do Vite (`.hero`, `.counter`, `#next-steps` etc.) — são legado e **não são usados** pelo site. Pode ser removido com segurança.

---

## 5. Animações

GSAP + ScrollTrigger é o motor de animação.  
`gsap.registerPlugin(ScrollTrigger)` é chamado uma vez no topo de `App.jsx`.

### 5.1 `shouldAnimate()` — Uso Obrigatório

**Todos os componentes que usam GSAP devem importar e verificar `shouldAnimate()`** antes de executar qualquer animação.  
Esta função retorna `false` quando a página é carregada pelo pre-renderer (Puppeteer), evitando que o GSAP injete `opacity: 0` ou `transform` inline no HTML estático gerado — o que quebraria o SEO.

```js
// src/utils/animation.js
export function shouldAnimate() {
  return typeof window !== 'undefined' && !window.__PRERENDER_INJECTED;
}
```

**Padrão obrigatório em componentes com GSAP:**

```jsx
import { shouldAnimate } from '../utils/animation';

useLayoutEffect(() => {
  if (!shouldAnimate()) return; // ← obrigatório
  const ctx = gsap.context(() => {
    // animações aqui
  }, componentRef);
  return () => ctx.revert();
}, []);
```

---

## 6. Elementos Globais de UI

Estes elementos aparecem em **todas as rotas** — renderizados fora do boundary `Suspense`:

| Elemento | Comportamento |
|---|---|
| `CustomCursor` | Cursor circular branco, `mix-blend-mode: difference`, expande a 80px no hover; desativado em touch |
| `CookieBanner` | Banner de consentimento LGPD |
| `WhatsAppButton` | Botão flutuante WhatsApp com animação de pulso |
| `.noise-overlay` | `<div>` com textura SVG, `z-index: 100`, `pointer-events: none` |

---

## 7. SEO & Meta Tags

Use `react-helmet-async` (`<Helmet>`) dentro de cada componente de página para `<title>` e meta tags por rota.  
O `HelmetProvider` envolve o app em `main.jsx`.

**Meta padrão da Homepage (removida das subpáginas pelo postbuild):**
- **Title:** `One Thank Digital | Tecnologia e Estrutura Digital em Santo André`
- **Description:** `Presença no Google, sites com estrutura de busca semântica e automação de atendimento para empresas do Grande ABC. Implementação e manutenção diretas, por quem executa.`

---

## 8. Os 4 Pilares Oficiais (Arquitetura de Conteúdo)

Todo conteúdo gerado deve apontar para um ou mais destes pilares:

| # | Pilar | URL Guia | URL Serviço |
|---|---|---|---|
| **1** | Google Meu Negócio & SEO Local | `/guia/google-meu-negocio/` | `/servicos/google-meu-negocio/` |
| **2** | Website Premium & Arquitetura Web | `/guia/desenvolvimento-web/` | `/servicos/criacao-de-sites/` |
| **3** | Automação Digital, WhatsApp & CRM | `/guia/automacao-digital/` | `/servicos/automacao-digital/` |
| **4** | SEO Orgânico B2B & Tráfego Pago | `/guia/seo-trafego-organico/` | `/servicos/seo-trafego-organico/` |

---

## 9. Regras Editoriais & Guardrails

### 9.1 Links no HTML

Todo link inserido no corpo de artigos DEVE estar encapsulado em `<strong>`:

```html
<!-- Links internos -->
<strong><a href="/guia/google-meu-negocio/">Guia Prático de Google Meu Negócio</a></strong>

<!-- Backlinks externos -->
<strong><a href="https://support.google.com/..." target="_blank" rel="noopener">Fonte oficial</a></strong>
```

### 9.2 Linguagem & Tom

- Tom **executivo, analítico**, orientado a resultados de negócios
- Responder sempre a **dores financeiras e emocionais** do empresário B2B
- **NUNCA** usar o termo "pirata" para APIs — usar "não homologada" ou "arquitetura não oficial"
- **NUNCA** repetir CTAs redundantes nos parágrafos finais
- **NUNCA** usar jargões técnicos incompatíveis com o tomador de decisão B2B

### 9.3 Trava de Segredo Industrial

**Proibido** citar tecnologias internas: `Evolution API`, `n8n`, `Docker`, `Redis`, `VPS`.  
**Usar sempre** categorias de soluções e valor comercial: "API Oficial do WhatsApp / Meta Cloud API", "IA Conversacional Consultiva", "CRM Corporativo Integrado".

### 9.4 Dados e Estatísticas

**Proibido** inventar ou usar estatísticas genéricas sem fonte verificável.  
**Usar** dados de fontes institucionais: Harvard Business Review, Gartner, Meta/ANPD.

### 9.5 Representações Visuais

**Proibido** gerar fluxogramas em arte ASCII.  
**Padrão oficial:** inserir o marcador `[INSERIR AQUI SVG DE BASTIDORES DA JORNADA DO CLIENTE POR ANTIGRAVITY]`.

### 9.6 CTA Final de Diagnóstico

Todos os artigos finalizam convidando para o **Diagnóstico Digital Gratuito** em `/diagnostico` ou `/quiz`.

---

## 10. Restrições Técnicas

- **JavaScript (JSX), não TypeScript** — não converter sem solicitação explícita
- `vite.config.js` importa `blogPosts.js` em build time — manter shape de exportação estável
- `modulePreload: false` é intencional (otimização PageSpeed) — não remover
- **Meta de performance:** PageSpeed ≥ 90 mobile / ≥ 95 desktop — validar ao adicionar dependências pesadas
- `App.css` contém estilos legado do scaffold Vite e não é utilizado — pode ser deletado

---

## 11. Histórico de Atualizações

### 22/06/2026 — Otimização de SEO & AEO (Local)
- **Arquivo:** `index.html`
- **Alterações:**
  - **Fallback Semântico:** Injetado bloco `<main aria-hidden="true" style="display: none;">` com hierarquia semântica estruturada para crawlers de IA/LLMs (SearchGPT, Claude, etc.) e buscadores tradicionais.
  - **Geo Meta Tags:** Adição de metatags geográficas (`geo.region`, `geo.placename`, `geo.position` e `ICBM`) direcionando a relevância local para Santo André/Grande ABC.
  - **Schema JSON-LD Composto:** Estruturação avançada combinando `LocalBusiness`, `ProfessionalService` e `hasOfferCatalog` para catalogar os 4 principais pilares de serviço da OTD.
  - **Sitemap Link:** Vinculação do arquivo `sitemap.xml` no `<head>`.

### 27/08/2026 — Revisão Completa e Expansão do CLAUDE.md
- Adicionada identidade institucional completa (slogan, endereço, WhatsApp, ICP)
- Documentado mapa completo de todas as rotas (27 rotas)
- Documentada a regra dos 3 arquivos ao adicionar rotas (App.jsx + vite.config.js + postbuild.js)
- Documentada a constante `EXPECTED_SITEMAP_URLS` e seu comportamento de validação
- Documentada a função `shouldAnimate()` e o padrão obrigatório de uso com GSAP
- Adicionado pipeline completo do `npm run build` (vite build + postbuild.js)
- Adicionada estratégia de artigos: BlogPostPage genérico vs. componente dedicado
- Adicionadas classes CSS utilitárias (`.magnetic-btn`, `.no-scrollbar`, `.text-clip-reveal` etc.)
- Adicionado token `bg-fluid-gradient` ao design system
- Adicionada meta padrão da homepage (title e description)
- Documentado stack completo com versões
- Incluídas regras editoriais e guardrails da `BASE_CONHECIMENTO_GEM_SEO.md`
