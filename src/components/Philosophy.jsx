import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { shouldAnimate } from '../utils/animation';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = ({ onOpenQuiz }) => {
  const sectionRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    if (!shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(
        text1Ref.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 1, ease: 'power4.out' }
      ).fromTo(
        text2Ref.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 1.2, ease: 'power4.out' },
        "-=0.8"
      );

      // Subtle parallax effect on background image like Hero page
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        gsap.to(bgRef.current, { x: -xPos, y: -yPos, duration: 1.5, ease: 'power2.out' });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="philosophy" 
      ref={sectionRef} 
      className="relative w-full min-h-[100vh] flex items-center justify-center bg-background text-white py-24 px-6 overflow-hidden"
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

      <div className="relative z-20 w-full flex flex-col items-center text-center mix-blend-difference text-white">
        
        {/* Block 1: Eyebrow + Bold Text Description */}
        <div className="mb-12 md:mb-24 overflow-hidden">
          <div ref={text1Ref} className="flex flex-col items-center">
            <p className="font-mono text-xs md:text-sm text-white/50 uppercase tracking-widest mb-4">
              O PRÓXIMO PASSO
            </p>
            <p className="font-heading font-bold text-2xl md:text-4xl text-white/80 max-w-2xl leading-tight whitespace-pre-line">
              O mercado não mudou.{"\n"}
              A forma de ser encontrado{"\n"}
              é que mudou.
            </p>
          </div>
        </div>

        {/* Block 2: Big Title (sua estrutura COMEÇA AQUI.) + CTA Button */}
        <div className="overflow-hidden w-full flex flex-col items-center">
          <div ref={text2Ref} className="flex flex-col items-center w-full">
            <p className="font-drama italic text-[10vw] md:text-[8vw] leading-[0.8] text-white w-full">
              sua estrutura <br/>
              <span className="text-accent font-heading font-bold not-italic uppercase tracking-tighter text-[11vw] md:text-[9vw] block mt-4">
                COMEÇA AQUI.
              </span>
            </p>
            
            <button
              onClick={onOpenQuiz}
              className="magnetic-btn mt-16 md:mt-28 w-max text-sm md:text-base font-mono font-medium uppercase tracking-widest border border-white/20 px-8 py-4 hover:bg-white hover:text-accent transition-colors"
            >
              AVALIAR MINHA ESTRUTURA
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
