import { useLayoutEffect, useRef, useState, useEffect, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import ServicosCards from './components/ServicosCards';
import HorizontalScroll from './components/HorizontalScroll';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';

// Componentes secundários carregados sob demanda para melhorar drasticamente a performance de carregamento no celular
const Quiz = lazy(() => import('./components/Quiz'));
const Pilares = lazy(() => import('./components/Pilares'));
const Historia = lazy(() => import('./components/Historia'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CasesPage = lazy(() => import('./pages/CasesPage'));
const PrivacidadePage = lazy(() => import('./pages/PrivacidadePage'));
const TermosPage = lazy(() => import('./pages/TermosPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));

const ServicosGMN = lazy(() => import('./pages/ServicosGMN'));
const ServicosSite = lazy(() => import('./pages/ServicosSite'));
const ServicosSEO = lazy(() => import('./pages/ServicosSEO'));
const ServicosAutomacao = lazy(() => import('./pages/ServicosAutomacao'));

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, appRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
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
        <Suspense fallback={null}>
          <Quiz onClose={handleCloseQuiz} />
        </Suspense>
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
        <Suspense fallback={null}>
          <Pilares onClose={handleClosePilares} onOpenQuiz={handleOpenQuiz} />
        </Suspense>
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
        <Suspense fallback={null}>
          <Historia onClose={handleCloseHistoria} onOpenQuiz={handleOpenQuiz} />
        </Suspense>
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
        <Suspense fallback={null}>
          <ServicosGMN />
        </Suspense>
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/servicos/criacao-de-sites' || currentPath === '/servicos/criacao-de-sites/' || currentPath === '/servicos/criacao-de-site' || currentPath === '/servicos/criacao-de-site/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
        <Suspense fallback={null}>
          <ServicosSite />
        </Suspense>
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/servicos/seo-trafego-organico' || currentPath === '/servicos/seo-trafego-organico/' || currentPath === '/servicos/seo' || currentPath === '/servicos/seo/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
        <Suspense fallback={null}>
          <ServicosSEO />
        </Suspense>
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/servicos/automacao-digital' || currentPath === '/servicos/automacao-digital/' || currentPath === '/servicos/automacao' || currentPath === '/servicos/automacao/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
        <Suspense fallback={null}>
          <ServicosAutomacao />
        </Suspense>
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath === '/blog' || currentPath === '/blog/') {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
        <Suspense fallback={null}>
          <BlogPage />
        </Suspense>
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPath.startsWith('/blog/')) {
    return (
      <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden">
        <CustomCursor />
        <CookieBanner />
        <div className="noise-overlay"></div>
        <Suspense fallback={null}>
          <BlogPostPage />
        </Suspense>
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
        <Suspense fallback={null}>
          <CasesPage />
        </Suspense>
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
        <Suspense fallback={null}>
          <PrivacidadePage />
        </Suspense>
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
        <Suspense fallback={null}>
          <TermosPage />
        </Suspense>
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div ref={appRef} className="relative w-full bg-background min-h-screen text-primary overflow-x-hidden text-white">
      <CustomCursor />
      <CookieBanner />
      <div className="noise-overlay"></div>
      <Navbar 
        onOpenQuiz={handleOpenQuiz} 
        onOpenPilares={handleOpenPilares}
        onOpenHistoria={handleOpenHistoria}
      />
      <main className="w-full flex flex-col">
        <Hero onOpenQuiz={handleOpenQuiz} />
        <ServicosCards />
        {/* <div id="features" className="bg-white">
          <Features />
        </div> */}
        <HorizontalScroll 
          onOpenQuiz={handleOpenQuiz} 
          onOpenPilares={handleOpenPilares}
          onOpenHistoria={handleOpenHistoria}
        />
        <Philosophy onOpenQuiz={handleOpenQuiz} />
        <Protocol onOpenQuiz={handleOpenQuiz} />
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
