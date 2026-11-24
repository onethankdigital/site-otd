import { useLayoutEffect, useRef, useState, useEffect, startTransition } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import HomeConteudo from './components/HomeConteudo';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';

// Páginas secundárias: carregadas sob demanda (ver src/pages/registry.js)
import {
  Quiz, Pilares, Historia, BlogPage, CasesPage, PrivacidadePage, TermosPage, BlogPostPage,
  ServicosGMN, ServicosSite, ServicosSEO, ServicosAutomacao, GoogleMeuNegocio,
  InsightWhatsAppCRM, InsightAutomacaoProcessos, InsightAutomacaoComercial,
  PillarAutomacaoDigital, PillarGoogleMeuNegocio, PillarDesenvolvimentoWeb, PillarSEOTrafego,
  CategoriaInsights, GuiaListagem, AgenciasPage, OneHub, LandingPage, LinksPage,
} from './pages/registry';
import { Helmet } from 'react-helmet-async';
import { faqHome } from './data/faqHome';
import { getLanding } from './data/landings';

gsap.registerPlugin(ScrollTrigger);
// No celular, a barra de endereço some/aparece ao rolar e muda a altura da tela; sem isto o
// ScrollTrigger recalcula todas as animações a cada vez.
ScrollTrigger.config({ ignoreMobileResize: true });

function App() {
  const appRef = useRef(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, appRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Transição: se a página nova ainda não foi baixada (lazy), a atual fica na tela até ela chegar.
    // Sem <Suspense> no App, a hidratação bate com o HTML pré-renderizado (que não tem marcadores de Suspense).
    const handleLocationChange = () => {
      startTransition(() => setCurrentPath(window.location.pathname));
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleOpenQuiz = () => {
    window.history.pushState({}, '', '/diagnostico');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleCloseQuiz = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleOpenPilares = () => {
    window.history.pushState({}, '', '/pilares');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleClosePilares = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleOpenHistoria = () => {
    window.history.pushState({}, '', '/historia');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleCloseHistoria = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  // Rotas do Quiz Standalone (onethank.com.br/diagnostico ou /quiz)
  if (
    currentPath === '/diagnostico' ||
    currentPath === '/diagnostico/' ||
    currentPath === '/quiz' ||
    currentPath === '/quiz/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden text-white">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <Quiz onClose={handleCloseQuiz} />
        <WhatsAppButton />
      </div>
    );
  }

  // Rotas dos Pilares Standalone (/pilares ou /4-pilares)
  if (
    currentPath === '/pilares' ||
    currentPath === '/pilares/' ||
    currentPath === '/4-pilares' ||
    currentPath === '/4-pilares/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden text-white">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <Pilares onClose={handleClosePilares} onOpenQuiz={handleOpenQuiz} />
        <WhatsAppButton />
      </div>
    );
  }

  // Rotas de Nossa História Standalone (/historia ou /nossa-historia)
  if (
    currentPath === '/historia' ||
    currentPath === '/historia/' ||
    currentPath === '/nossa-historia' ||
    currentPath === '/nossa-historia/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden text-white">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <Historia onClose={handleCloseHistoria} onOpenQuiz={handleOpenQuiz} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/servicos/google-meu-negocio' || currentPath === '/servicos/google-meu-negocio/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <ServicosGMN />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/google-meu-negocio' || currentPath === '/google-meu-negocio/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <GoogleMeuNegocio />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/servicos/criacao-de-sites' ||
    currentPath === '/servicos/criacao-de-sites/' ||
    currentPath === '/servicos/criacao-de-site' ||
    currentPath === '/servicos/criacao-de-site/' ||
    currentPath === '/desenvolvimento-web-premium' ||
    currentPath === '/desenvolvimento-web-premium/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <ServicosSite />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/servicos/seo-trafego-organico' ||
    currentPath === '/servicos/seo-trafego-organico/' ||
    currentPath === '/servicos/seo' ||
    currentPath === '/servicos/seo/' ||
    currentPath === '/seo-local' ||
    currentPath === '/seo-local/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <ServicosSEO />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/servicos/automacao-digital' ||
    currentPath === '/servicos/automacao-digital/' ||
    currentPath === '/servicos/automacao' ||
    currentPath === '/servicos/automacao/' ||
    currentPath === '/automacoes-inteligentes' ||
    currentPath === '/automacoes-inteligentes/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <ServicosAutomacao />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/insights' || currentPath === '/insights/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <BlogPage />
        <WhatsAppButton />
      </div>
    );
  }

  // /blog redirect: SPA-side redirect to /insights (HTTP 301 handled in .htaccess)
  if (currentPath === '/blog' || currentPath === '/blog/') {
    window.location.replace('/insights');
    return null;
  }

  if (currentPath.startsWith('/blog/')) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <BlogPostPage />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/cases' || currentPath === '/cases/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <CasesPage />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/privacidade' || currentPath === '/privacidade/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <PrivacidadePage />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/termos' || currentPath === '/termos/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <TermosPage />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/agencias' || currentPath === '/agencias/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden text-white">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <AgenciasPage />
        <WhatsAppButton />
      </div>
    );
  }

  // Páginas de segmento (/segmentos/...) e de cidade (/atendimento/...)
  const landing = getLanding(currentPath);
  if (landing) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <LandingPage landing={landing} />
        <WhatsAppButton />
      </div>
    );
  }

  // Link da bio do Instagram (noindex, fora do sitemap)
  if (currentPath === '/links' || currentPath === '/links/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CookieBanner />
        <div className="noise-overlay"></div>
        <LinksPage />
      </div>
    );
  }

  if (currentPath === '/onehub' || currentPath === '/onehub/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <OneHub />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/guia' ||
    currentPath === '/guia/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <GuiaListagem />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/guia/automacao-digital' ||
    currentPath === '/guia/automacao-digital/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <PillarAutomacaoDigital />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/guia/google-meu-negocio' ||
    currentPath === '/guia/google-meu-negocio/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <PillarGoogleMeuNegocio />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/guia/desenvolvimento-web' ||
    currentPath === '/guia/desenvolvimento-web/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <PillarDesenvolvimentoWeb />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/guia/seo-trafego-organico' ||
    currentPath === '/guia/seo-trafego-organico/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <PillarSEOTrafego />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath.startsWith('/insights/categoria/')) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <CategoriaInsights />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/insights/automacao-comercial-o-que-e' ||
    currentPath === '/insights/automacao-comercial-o-que-e/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <InsightAutomacaoComercial />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/insights/automacao-de-processos-para-empresas' ||
    currentPath === '/insights/automacao-de-processos-para-empresas/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <InsightAutomacaoProcessos />
        <WhatsAppButton />
      </div>
    );
  }

  if (
    currentPath === '/insights/como-organizar-leads-whatsapp-no-crm' ||
    currentPath === '/insights/como-organizar-leads-whatsapp-no-crm/'
  ) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
          <InsightWhatsAppCRM />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath.startsWith('/insights/') || currentPath.startsWith('/blog/')) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
        <BlogPostPage />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden text-white">
      <Helmet>
        <link rel="canonical" href="https://onethank.com.br/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqHome.map(f => ({
            "@type": "Question",
            "name": f.title,
            "acceptedAnswer": { "@type": "Answer", "text": f.desc }
          }))
        })}</script>
      </Helmet>
      <CustomCursor />
      <CookieBanner />
      <div className="noise-overlay"></div>
      <Navbar
        onOpenQuiz={handleOpenQuiz} 
        onOpenPilares={handleOpenPilares}
        onOpenHistoria={handleOpenHistoria}
      />
      <main className="w-full flex flex-col">
          <HomeConteudo onOpenQuiz={handleOpenQuiz} onOpenPilares={handleOpenPilares} onOpenHistoria={handleOpenHistoria} />
      </main>
        <Footer 
          onOpenQuiz={handleOpenQuiz} 
          onOpenPilares={handleOpenPilares}
          onOpenHistoria={handleOpenHistoria}
        />
      <WhatsAppButton />
    </div>
  );
}

export default App;
