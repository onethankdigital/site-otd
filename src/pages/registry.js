import { lazy, createElement } from 'react';
import { getLanding } from '../data/landings';

// Páginas secundárias carregadas sob demanda: a home não baixa o código (nem os ~360 KB do blogPosts.js)
// das outras páginas.
//
// lazyPage guarda o módulo já carregado. Assim, quando main.jsx pré-carrega a página da URL atual
// antes do primeiro render, ela renderiza direto, sem passar pelo fallback do Suspense, e o HTML
// pré-renderizado não pisca em branco.
function lazyPage(loader) {
  let Loaded = null;
  const load = () => loader().then((m) => { Loaded = m.default; return m; });
  const Lazy = lazy(load);
  const Page = (props) => createElement(Loaded || Lazy, props);
  Page.preload = load;
  return Page;
}

export const Quiz = lazyPage(() => import('../components/Quiz'));
export const Pilares = lazyPage(() => import('../components/Pilares'));
export const Historia = lazyPage(() => import('../components/Historia'));
export const BlogPage = lazyPage(() => import('./BlogPage'));
export const CasesPage = lazyPage(() => import('./CasesPage'));
export const PrivacidadePage = lazyPage(() => import('./PrivacidadePage'));
export const TermosPage = lazyPage(() => import('./TermosPage'));
export const BlogPostPage = lazyPage(() => import('./BlogPostPage'));
export const ServicosGMN = lazyPage(() => import('./ServicosGMN'));
export const ServicosSite = lazyPage(() => import('./ServicosSite'));
export const ServicosSEO = lazyPage(() => import('./ServicosSEO'));
export const ServicosAutomacao = lazyPage(() => import('./ServicosAutomacao'));
export const GoogleMeuNegocio = lazyPage(() => import('./GoogleMeuNegocio'));
export const InsightWhatsAppCRM = lazyPage(() => import('./InsightWhatsAppCRM'));
export const InsightAutomacaoProcessos = lazyPage(() => import('./InsightAutomacaoProcessos'));
export const InsightAutomacaoComercial = lazyPage(() => import('./InsightAutomacaoComercial'));
export const PillarAutomacaoDigital = lazyPage(() => import('./PillarAutomacaoDigital'));
export const PillarGoogleMeuNegocio = lazyPage(() => import('./PillarGoogleMeuNegocio'));
export const PillarDesenvolvimentoWeb = lazyPage(() => import('./PillarDesenvolvimentoWeb'));
export const PillarSEOTrafego = lazyPage(() => import('./PillarSEOTrafego'));
export const CategoriaInsights = lazyPage(() => import('./CategoriaInsights'));
export const GuiaListagem = lazyPage(() => import('./GuiaListagem'));
export const AgenciasPage = lazyPage(() => import('./AgenciasPage'));
export const OneHub = lazyPage(() => import('./OneHub'));
export const LandingPage = lazyPage(() => import('./LandingPage'));
export const LinksPage = lazyPage(() => import('./LinksPage'));

const exatas = {
  '/diagnostico': Quiz, '/quiz': Quiz,
  '/pilares': Pilares, '/4-pilares': Pilares,
  '/historia': Historia, '/nossa-historia': Historia,
  '/servicos/google-meu-negocio': ServicosGMN,
  '/google-meu-negocio': GoogleMeuNegocio,
  '/servicos/criacao-de-sites': ServicosSite, '/servicos/criacao-de-site': ServicosSite, '/desenvolvimento-web-premium': ServicosSite,
  '/servicos/seo-trafego-organico': ServicosSEO, '/servicos/seo': ServicosSEO, '/seo-local': ServicosSEO,
  '/servicos/automacao-digital': ServicosAutomacao, '/servicos/automacao': ServicosAutomacao, '/automacoes-inteligentes': ServicosAutomacao,
  '/insights': BlogPage,
  '/cases': CasesPage,
  '/privacidade': PrivacidadePage,
  '/termos': TermosPage,
  '/agencias': AgenciasPage,
  '/links': LinksPage,
  '/onehub': OneHub,
  '/guia': GuiaListagem,
  '/guia/automacao-digital': PillarAutomacaoDigital,
  '/guia/google-meu-negocio': PillarGoogleMeuNegocio,
  '/guia/desenvolvimento-web': PillarDesenvolvimentoWeb,
  '/guia/seo-trafego-organico': PillarSEOTrafego,
  '/insights/automacao-comercial-o-que-e': InsightAutomacaoComercial,
  '/insights/automacao-de-processos-para-empresas': InsightAutomacaoProcessos,
  '/insights/como-organizar-leads-whatsapp-no-crm': InsightWhatsAppCRM,
};

// Página da URL (mesma ordem de decisão do App.jsx). Se uma rota nova ficar de fora,
// ela funciona igual; só perde o pré-carregamento e pode piscar ao abrir.
export function pageForPath(pathname) {
  const p = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (exatas[p]) return exatas[p];
  if (getLanding(pathname)) return LandingPage;
  if (p.startsWith('/insights/categoria/')) return CategoriaInsights;
  if (p.startsWith('/insights/') || p.startsWith('/blog/')) return BlogPostPage;
  return null; // home: componentes estáticos
}
