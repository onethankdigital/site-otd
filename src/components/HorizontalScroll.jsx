import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const panelsData = [
  {
    id: '01',
    title: 'NÃO É FALTA DE CLIENTE.',
    subtitle: 'É FALTA DE ESTRUTURA.',
    desc: 'Todo dia, pessoas procuram nas maiores\nplataformas digitais e sociais exatamente\no que sua empresa oferece.\nE encontram o concorrente.\n\nNão porque ele é melhor.\nPorque ele está estruturado.',
    videoColor: 'bg-[#1a1a1a]',
    visual: 'grid',
    buttonText: 'VER MINHA ESTRUTURA'
  },
  {
    id: '02',
    title: 'A ESTRUTURA CERTA',
    subtitle: 'FAZ O CLIENTE',
    desc: 'Não é sobre estar em todo lugar.\nÉ sobre estar no lugar certo, na hora que o cliente decide.',
    videoColor: 'bg-[#0f0f0f]',
    visual: 'laser',
    buttonText: 'COMO FUNCIONA NA PRÁTICA'
  },
  {
    id: '03',
    title: 'SOMOS PRESENÇA.',
    subtitle: 'SOMOS COMUNICAÇÃO.',
    third: 'SOMOS ESTRUTURA.',
    desc: 'Comunicação é estrutura.\nEstrutura é posicionamento.\nPosicionamento é resultado.',
    videoColor: 'bg-[#050505]',
    visual: 'ekg',
    buttonText: 'COMO FUNCIONA NA PRÁTICA'
  }
];

const AbstractVisual = ({ type }) => {
  if (type === 'grid') {
    return (
      <div className="w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    );
  }
  if (type === 'laser') {
    return (
      <div className="relative w-full h-full flex flex-col justify-center">
        <div className="w-full h-[1px] bg-accent shadow-[0_0_20px_#e0040b] opacity-80"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent opacity-30" style={{ transform: 'rotate(5deg)' }}></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent opacity-30" style={{ transform: 'rotate(-5deg)' }}></div>
      </div>
    );
  }
  if (type === 'ekg') {
    return (
      <div className="w-full h-[2px] bg-white opacity-20 border-t border-dashed border-white/50"></div>
    );
  }
  return null;
};

const HorizontalScroll = ({ onOpenQuiz, onOpenPilares, onOpenHistoria }) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.h-panel');

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + wrapperRef.current.offsetWidth
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-background">
      <div
        ref={wrapperRef}
        className="flex h-screen"
        style={{ width: `${panelsData.length * 100}vw` }}
      >
        {panelsData.map((panel, index) => (
          <section
            key={panel.id}
            className="h-panel w-screen h-screen flex-shrink-0 flex items-center justify-center relative p-6 md:p-24 border-r border-white/10"
          >
            {/* Background Visual Layer */}
            <div className={`absolute inset-0 z-0 ${panel.videoColor} overflow-hidden`}>
              <div className="absolute inset-0 opacity-50 mix-blend-screen scale-150">
                <AbstractVisual type={panel.visual} />
              </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center gap-10 md:gap-16 p-8 pt-24 md:p-16 md:pt-32 mix-blend-difference text-white">
              <div className="font-mono text-[5rem] md:text-[8rem] font-bold opacity-20 leading-none">
                {panel.id}
              </div>

              <div className="flex flex-col gap-4">
                {panel.eyebrow && (
                  <p className="font-mono text-xs md:text-sm text-accent uppercase tracking-widest mb-2">
                    {panel.eyebrow}
                  </p>
                )}
                <h2 className="font-heading font-bold text-[3rem] md:text-[5vw] uppercase leading-[0.9] tracking-tighter max-w-4xl">
                  {panel.title} <br />
                  {panel.third ? (
                    <>
                      {panel.subtitle}<br />
                      <span className="text-accent">{panel.third}</span>
                    </>
                  ) : (
                    <span className="text-accent">{panel.subtitle}</span>
                  )}
                </h2>

                <p className="font-mono text-base md:text-xl max-w-2xl mt-6 opacity-80 leading-relaxed border-l border-accent pl-6 whitespace-pre-line">
                  {panel.desc}
                </p>

                <a 
                  href={panel.id === '02' ? '/pilares' : panel.id === '03' ? '/historia' : '/diagnostico'}
                  onClick={(e) => {
                    e.preventDefault();
                    if (panel.id === '02') {
                      onOpenPilares();
                    } else if (panel.id === '03') {
                      onOpenHistoria();
                    } else {
                      onOpenQuiz();
                    }
                  }}
                  className="magnetic-btn mt-8 inline-block w-max text-sm md:text-base font-mono font-medium uppercase tracking-widest border border-white/20 px-8 py-4 hover:bg-white hover:text-accent transition-colors text-center text-white"
                >
                  {panel.buttonText || 'Explorar Sistema'}
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
