import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { shouldAnimate } from '../utils/animation';

const Navbar = ({ onOpenQuiz, onOpenPilares, onOpenHistoria }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const lastScrollY = useRef(0);
  const logoRef = useRef(null);
  const primeiraVez = useRef(true);
  const [fundoClaro, setFundoClaro] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we are close to the top, keep the menu visible
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        // If scrolling down, hide; if scrolling up, show
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks = [
    { label: 'GOOGLE MEU NEGÓCIO', href: '/servicos/google-meu-negocio/' },
    { label: 'WEBSITE',            href: '/servicos/criacao-de-sites/' },
    { label: 'SEO + BUSCA POR IA',  href: '/servicos/seo-trafego-organico/' },
    { label: 'AUTOMAÇÃO COM IA',   href: '/servicos/automacao-digital/' },
    { label: 'ONEHUB · WHATSAPP + IA', href: '/onehub/' },
    { label: 'AVALIAR ESTRUTURA',  href: '/diagnostico/', action: 'quiz' },
  ];

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    // O menu fechado fica 100% acima da tela (em porcentagem, nunca em pixels) e invisível.
    // Antes a animação gravava a posição em pixels: quando a tela ficava mais alta
    // (barra do navegador do celular, girar o aparelho, recarregar), a parte de baixo
    // do menu aparecia no topo da página, com o "Avaliar estrutura".
    if (!shouldAnimate()) {
      gsap.set(overlay, { y: 0, yPercent: isOpen ? 0 : -100, visibility: isOpen ? 'visible' : 'hidden' });
      gsap.set(linksRef.current, { y: 0, opacity: 1 });
      return;
    }
    // ao carregar a página o menu já nasce fechado: só posiciona, sem animar
    if (primeiraVez.current) {
      primeiraVez.current = false;
      gsap.set(overlay, { y: 0, yPercent: -100, visibility: 'hidden' });
      gsap.set(linksRef.current, { y: -30, opacity: 0 });
      return;
    }

    if (isOpen) {
      gsap.set(overlay, { y: 0, visibility: 'visible' });
      gsap.to(overlay, {
        yPercent: 0,
        duration: 0.8,
        ease: 'power4.inOut'
      });
      gsap.fromTo(linksRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.4 }
      );
    } else {
      gsap.set(overlay, { y: 0 });
      gsap.to(overlay, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.2,
        onComplete: () => gsap.set(overlay, { visibility: 'hidden' })
      });
      gsap.to(linksRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.02,
        ease: 'power3.in'
      });
    }
  }, [isOpen]);

  // Descobre a cor do fundo que está atrás do logotipo (o primeiro elemento com cor de fundo sólida).
  // Se for uma imagem ou vídeo, mantém o logotipo branco, que é o padrão do site.
  useEffect(() => {
    let quadro = 0;
    const medir = () => {
      cancelAnimationFrame(quadro);
      quadro = requestAnimationFrame(() => {
        const img = logoRef.current;
        if (!img) return;
        const r = img.getBoundingClientRect();
        const pilha = document.elementsFromPoint(r.left + r.width / 2, r.top + r.height / 2);
        let claro = false;
        for (const el of pilha) {
          if (img.closest('div')?.parentElement?.contains(el)) continue;
          if (/^(IMG|VIDEO|CANVAS|PICTURE)$/.test(el.tagName)) break;
          const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
          if (!m || (m.length > 3 && +m[3] < 0.5)) continue;
          const [vr, vg, vb] = m.map(Number);
          claro = (0.2126 * vr + 0.7152 * vg + 0.0722 * vb) / 255 > 0.6;
          break;
        }
        setFundoClaro(claro);
      });
    };
    const tempos = [0, 300, 1200].map((t) => setTimeout(medir, t));
    window.addEventListener('scroll', medir, { passive: true });
    window.addEventListener('resize', medir);
    return () => {
      tempos.forEach(clearTimeout); cancelAnimationFrame(quadro);
      window.removeEventListener('scroll', medir); window.removeEventListener('resize', medir);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Logo fixa sobre o conteúdo: versão com letra escura quando o fundo atrás dela é claro */}
      <div className={`fixed top-0 left-0 z-[101] px-6 py-6 md:px-12 md:py-8 pointer-events-none transition-all duration-300 ${isOpen ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
        <div className="pointer-events-auto cursor-pointer flex items-center">
          <a href="/"><img ref={logoRef} src={fundoClaro ? '/logowhite.svg' : '/logo.svg'} alt="One Thank Digital" className="h-12 md:h-16 object-contain" /></a>
        </div>
      </div>

      {/* Botão MENU */}
      <header className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 md:py-8 flex justify-end items-center mix-blend-difference text-white pointer-events-none transition-all duration-300 ${isOpen ? 'opacity-100' : isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
        <button
          onClick={toggleMenu}
          className={`font-heading text-xl font-bold uppercase tracking-[0.1em] hover:text-accent transition-colors min-h-[44px] min-w-[44px] py-2 -my-2 ${isOpen || isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div
        ref={overlayRef}
        className="fixed inset-0 w-full h-screen bg-white text-dark z-[90] flex flex-col justify-center px-6 md:px-12 lg:px-24"
        style={{ transform: 'translateY(-100%)', visibility: 'hidden' }}
      >
        {/* Logo dentro do overlay (versão para fundo branco) */}
        <div className="absolute top-0 left-0 px-6 py-6 md:px-12 md:py-8">
          <a href="/"><img src="/logowhite.svg" alt="One Thank Digital" className="h-12 md:h-16 object-contain" /></a>
        </div>

        {/* Links principais */}
        <nav className="flex flex-col gap-6 md:gap-8">
          {mainLinks.map((item, i) => (
            <div key={item.label} className="overflow-hidden">
              <div 
                ref={el => (linksRef.current[i] = el)}
                className="flex items-center gap-4 md:gap-6"
              >
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent animate-pulse flex-shrink-0" />
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.action) {
                      e.preventDefault();
                      toggleMenu();
                      setTimeout(() => {
                        if (item.action === 'quiz' && onOpenQuiz) onOpenQuiz();
                        if (item.action === 'pilares' && onOpenPilares) onOpenPilares();
                        if (item.action === 'historia' && onOpenHistoria) onOpenHistoria();
                      }, 900);
                    } else if (item.href.startsWith('#')) {
                      e.preventDefault();
                      toggleMenu();
                      setTimeout(() => {
                        const target = document.querySelector(item.href);
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }, 900);
                    } else {
                      toggleMenu();
                    }
                  }}
                  className="block font-heading font-bold text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] md:leading-[1.0] py-2 uppercase tracking-tighter hover:text-accent transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              </div>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-8 left-6 lg:left-24 font-mono text-xs uppercase tracking-widest text-dark/50">
          One Thank Digital &copy; {new Date().getFullYear()}
        </div>
      </div>
    </>
  );
};

export default Navbar;
