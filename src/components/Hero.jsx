import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';


const Hero = ({ onOpenQuiz }) => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      gsap.fromTo(
        [text1Ref.current, text2Ref.current],
        { yPercent: 100, opacity: 0, rotateX: -20 },
        { yPercent: 0, opacity: 1, rotateX: 0, duration: 1.5, stagger: 0.2, ease: 'power4.out', delay: 0.2 }
      );

      gsap.fromTo(
        buttonRef.current,
        { yPercent: 50, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.8 }
      );

      // Mouse Parallax effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(text1Ref.current, { x: xPos * 0.5, y: yPos * 0.5, duration: 1, ease: 'power2.out' });
        gsap.to(text2Ref.current, { x: xPos * 0.8, y: yPos * 0.8, duration: 1, ease: 'power2.out' });
        gsap.to(buttonRef.current, { x: xPos * 0.3, y: yPos * 0.3, duration: 1, ease: 'power2.out' });
        gsap.to(bgRef.current, { x: -xPos * 0.2, y: -yPos * 0.2, duration: 1.5, ease: 'power2.out' });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Imagem de Fundo Estrutural (Rollback do Spline para Imagem Estática Premium) */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.webp" 
          alt="Digital Presence Infrastructure" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110"
          style={{ filter: 'grayscale(0.5) brightness(0.7)' }}
        />
        {/* Overlay para profundidade e contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90"></div>
      </div>

      {/* Camada de Conteúdo (Hierarquia) */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center mix-blend-difference text-white pointer-events-none">
        <div style={{ perspective: '1000px' }}>
          <h1 
            ref={text1Ref}
            className="font-heading font-bold text-[8vw] md:text-[6vw] leading-[1] uppercase tracking-tighter text-center"
          >
            Sua empresa existe.
          </h1>
        </div>
        <div style={{ perspective: '1000px' }}>
          <p 
            ref={text2Ref}
            className="font-drama italic text-[6vw] md:text-[5vw] leading-[1] text-center mt-2 px-4"
          >
            Tem clientes que não te encontram. Ainda.
          </p>
        </div>

        <div 
          ref={buttonRef}
          className="pointer-events-auto mt-16 md:mt-24 inline-block"
        >
          <button 
            onClick={onOpenQuiz}
            className="px-6 py-3 md:px-10 md:py-4 bg-accent text-white font-heading font-bold text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(224,4,11,0.4)] active:scale-[0.98]"
          >
            AVALIAR MINHA ESTRUTURA
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 z-30 text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        Scroll to Explore
      </div>
    </section>
  );
};

export default Hero;
