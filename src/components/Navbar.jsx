import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = ({ onOpenQuiz, onOpenPilares, onOpenHistoria }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const lastScrollY = useRef(0);

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
    { label: 'GOOGLE MEU NEGÓCIO', href: '/google-meu-negocio' },
    { label: 'WEBSITE',            href: '/desenvolvimento-web-premium' },
    { label: 'SEO / TRÁFEGO',      href: '/seo-local' },
    { label: 'AUTOMAÇÃO DIGITAL',  href: '/automacoes-inteligentes' },
    { label: 'AVALIAR ESTRUTURA',  href: '/diagnostico', action: 'quiz' },
  ];

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        yPercent: 100,
        duration: 0.8,
        ease: 'power4.inOut'
      });
      gsap.fromTo(linksRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.4 }
      );
    } else {
      gsap.to(overlayRef.current, {
        yPercent: 0,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.2
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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Logo fixa sobre o conteúdo */}
      <div className={`fixed top-0 left-0 z-[101] px-6 py-6 md:px-12 md:py-8 pointer-events-none transition-all duration-300 ${isOpen ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
        <div className="pointer-events-auto cursor-pointer flex items-center">
          <a href="/"><img src="/logo.svg" alt="One Thank Digital" className="h-12 md:h-16 object-contain" /></a>
        </div>
      </div>

      {/* Botão MENU */}
      <header className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 md:py-8 flex justify-end items-center mix-blend-difference text-white pointer-events-none transition-all duration-300 ${isOpen ? 'opacity-100' : isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
        <button
          onClick={toggleMenu}
          className={`font-heading text-xl font-bold uppercase tracking-[0.1em] hover:text-accent transition-colors ${isOpen || isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div
        ref={overlayRef}
        className="fixed inset-0 w-full h-screen bg-white text-dark z-[90] flex flex-col justify-center px-6 md:px-12 lg:px-24"
        style={{ transform: 'translateY(-100%)' }}
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
