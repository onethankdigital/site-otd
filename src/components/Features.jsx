import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { MousePointer2, Activity } from 'lucide-react';

const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Desenvolvimento Estrutural', color: 'bg-dark text-white' },
    { id: 2, text: 'SEO Técnico Avançado', color: 'bg-primary text-dark' },
    { id: 3, text: 'Autoridade Inquestionável', color: 'bg-white text-dark' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      {cards.map((card, index) => {
        const isTop = index === 0;
        const isMiddle = index === 1;
        const isBottom = index === 2;
        
        return (
          <div 
            key={card.id}
            className={`absolute w-full max-w-[240px] p-6 rounded-2xl shadow-lg border border-dark/10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${card.color} ${
              isTop ? 'translate-y-0 scale-100 z-30 opacity-100' :
              isMiddle ? 'translate-y-4 scale-95 z-20 opacity-70' :
              'translate-y-8 scale-90 z-10 opacity-40'
            }`}
          >
            <div className="font-mono text-xs opacity-50 mb-2">/0{card.id}</div>
            <div className="font-heading font-bold">{card.text}</div>
          </div>
        );
      })}
    </div>
  );
};

const TelemetryTypewriter = () => {
  const [text, setText] = useState('');
  const fullText = "estancando perda de leads...\notimizando conversão...";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0;
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-48 bg-dark rounded-2xl p-6 text-primary flex flex-col relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        <span className="font-mono text-xs uppercase tracking-widest text-accent">Live Feed</span>
      </div>
      <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
        {text}<span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse"></span>
      </div>
      <Activity className="absolute bottom-4 right-4 text-primary/10" size={64} />
    </div>
  );
};

const CursorScheduler = () => {
  const cursorRef = useRef(null);
  const cellRef = useRef(null);
  const [active, setActive] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.set(cursorRef.current, { x: 0, y: 0, scale: 1 })
        .set(cellRef.current, { backgroundColor: 'transparent' })
        .to(cursorRef.current, { x: 80, y: 40, duration: 1, ease: 'power2.inOut' })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .call(() => setActive(true))
        .to(cellRef.current, { backgroundColor: '#E63B2E', color: '#fff', duration: 0.2 }, "<")
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { x: 180, y: 80, duration: 1, ease: 'power2.inOut' })
        .to(cursorRef.current, { opacity: 0, duration: 0.3 })
        .call(() => setActive(false))
        .to(cursorRef.current, { opacity: 1, duration: 0.3, delay: 0.5 });
        
    }, []);
    return () => ctx.revert();
  }, []);

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="w-full h-48 bg-white border border-dark/10 rounded-2xl p-6 relative overflow-hidden">
      <div className="font-mono text-xs mb-4 text-dark/50">DATA TRACTION GRID</div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, i) => (
          <div key={i} className="text-center font-heading text-sm font-bold pb-2">{day}</div>
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <div 
            key={i} 
            ref={i === 9 ? cellRef : null}
            className={`h-8 border border-dark/5 rounded transition-colors ${i === 9 && active ? 'bg-accent text-white' : ''}`}
          ></div>
        ))}
      </div>
      
      <div ref={cursorRef} className="absolute top-10 left-10 z-20" style={{ filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.2))' }}>
        <MousePointer2 fill="#111" color="#fff" size={24} />
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef(null);

  return (
    <section id="features" ref={sectionRef} className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark tracking-tight uppercase">
          Sistemas <br/><span className="text-accent font-drama italic lowercase text-4xl md:text-6xl">operacionais.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white rounded-[2rem] p-8 border border-dark/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] interactive-lift">
          <div className="mb-8">
            <DiagnosticShuffler />
          </div>
          <h3 className="font-heading font-bold text-xl mb-3 text-dark uppercase">Alta Performance</h3>
          <p className="font-mono text-sm text-dark/70 leading-relaxed">
            Desenvolvimento web e SEO estrutural para transformar sua presença digital em um ativo de autoridade inquestionável.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-[2rem] p-8 border border-dark/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] interactive-lift">
          <div className="mb-8">
            <TelemetryTypewriter />
          </div>
          <h3 className="font-heading font-bold text-xl mb-3 text-dark uppercase">Orquestração</h3>
          <p className="font-mono text-sm text-dark/70 leading-relaxed">
            Automação inteligente de workflows e processos que elimina o trabalho manual e estanca a perda de leads.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-[2rem] p-8 border border-dark/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] interactive-lift">
          <div className="mb-8">
            <CursorScheduler />
          </div>
          <h3 className="font-heading font-bold text-xl mb-3 text-dark uppercase">Tração de Mercado</h3>
          <p className="font-mono text-sm text-dark/70 leading-relaxed">
            Gestão de Tráfego e GMN focada em dados, garantindo que sua comunicação alcance o decisor no momento exato.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
