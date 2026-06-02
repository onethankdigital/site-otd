import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
  {
    id: '01',
    title: 'Por que meu concorrente aparece antes de mim mesmo sendo menor?',
    desc: 'Porque tamanho não define posição. Estrutura define. Seu concorrente tem o perfil local otimizado, site integrado e presença consistente nas plataformas. O Google não premia quem é melhor. Premia quem está mais estruturado.',
  },
  {
    id: '02',
    title: 'Preciso de site se já tenho Instagram e WhatsApp?',
    desc: 'Instagram e WhatsApp são canais. Site é território. Canais pertencem às plataformas. Se o algoritmo mudar, você perde alcance. Se a conta cair, você some. Seu site é o único ativo digital que é 100% seu. Sempre.',
  },
  {
    id: '03',
    title: 'Por que meu site não aparece no Google mesmo estando no ar?',
    desc: 'Estar no ar não é o mesmo que estar estruturado. Site sem SEO é como uma loja sem placa numa rua sem saída. Existe. Mas ninguém encontra. Aparecer no Google não é sorte. É estrutura técnica e comunicação certa.',
  },
  {
    id: '04',
    title: 'Vale mais anúncio pago ou SEO orgânico para minha empresa?',
    desc: 'Anúncio para de aparecer quando você para de pagar. SEO continua trabalhando quando você está dormindo. A resposta certa é: os dois juntos. Um acelera. O outro sustenta. Estrutura certa usa os dois no momento certo.',
  },
  {
    id: '05',
    title: 'Automação deixa o atendimento frio e impessoal?',
    desc: 'Frio é não responder. Frio é deixar o cliente esperando enquanto você não está disponível. Automação não substitui o humano. Garante que ninguém fique sem resposta às 23h de uma sexta. Quem automatiza direito atende melhor. Não pior.',
  },
  {
    id: '06',
    title: 'Quantos leads perco por não responder rápido no WhatsApp?',
    desc: 'Responder em até 5 minutos aumenta em 21x a chance de conversão. Depois de 1 hora essa chance cai 10 vezes. Seu lead não espera. Ele abre o próximo resultado e contrata quem respondeu primeiro.',
  },
];

const Protocol = ({ onOpenQuiz }) => {
  const [activeId, setActiveId] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { yPercent: 30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { yPercent: 40, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.04,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleActive = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section
      id="protocol"
      ref={sectionRef}
      className="w-full bg-black text-white py-24 md:py-40 px-6 md:px-12 lg:px-24"
    >
      {/* Header */}
      <div ref={headerRef} className="mb-20 md:mb-32">
        <p className="font-mono text-xs md:text-sm text-accent uppercase tracking-widest mb-4">
          TIRE SUAS DÚVIDAS
        </p>
        <h2 className="leading-[0.85] text-white">
          <span className="block font-drama italic text-[3rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.85]">
            O que você
          </span>
          <span className="block font-heading font-bold text-[3rem] md:text-[5.5rem] lg:text-[7rem] uppercase tracking-tighter leading-[0.85] text-accent">
            AINDA PERGUNTA.
          </span>
        </h2>
        <p className="font-sans text-base md:text-lg lg:text-xl text-white/70 max-w-none md:max-w-4xl mt-6 leading-relaxed">
          As dúvidas mais comuns de quem está prestes a estruturar sua presença digital.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="w-full">
        {protocols.map((protocol, index) => {
          const isOpen = activeId === protocol.id;
          return (
            <div
              key={protocol.id}
              ref={el => (itemsRef.current[index] = el)}
              onClick={() => toggleActive(protocol.id)}
              className={`group border-t py-10 md:py-14 transition-all duration-500 cursor-pointer ${
                isOpen ? 'border-accent' : 'border-white/10 hover:border-accent/40'
              } ${
                isOpen ? 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start' : 'block'
              }`}
            >
              {/* Header do Item (Flex: Pergunta + Indicador) */}
              <div className="flex justify-between items-center w-full">
                {/* Pergunta (Número + Título) */}
                <div className="flex items-start gap-4 md:gap-6 pr-6">
                  <span className={`font-mono text-sm font-bold tracking-widest pt-1.5 transition-colors duration-500 flex-shrink-0 ${
                    isOpen ? 'text-accent' : 'text-white/30 group-hover:text-accent'
                  }`}>
                    {protocol.id}.
                  </span>
                  <h3 className={`font-heading font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem] uppercase leading-[1.1] tracking-tight transition-colors duration-500 ${
                    isOpen ? 'text-accent' : 'text-white group-hover:text-accent'
                  }`}>
                    {protocol.title}
                  </h3>
                </div>

                {/* Símbolo Indicador Accordion */}
                <span
                  className="transition-colors duration-300 flex-shrink-0 select-none"
                  style={{
                    color: isOpen ? '#D42B2B' : 'white',
                    fontSize: '28px',
                    fontWeight: isOpen ? 'bold' : '300',
                    fontFamily: 'sans-serif',
                    lineHeight: 1
                  }}
                >
                  {isOpen ? '×' : '+'}
                </span>
              </div>

              {/* Resposta (Abaixo no Mobile, Lado Direito no Desktop) */}
              <div className={`transition-all duration-500 overflow-hidden ${
                isOpen ? 'max-h-[300px] opacity-100 mt-6 md:mt-0' : 'max-h-0 opacity-0 pointer-events-none'
              }`}>
                <p className="font-sans text-lg md:text-xl lg:text-[1.35rem] text-white/80 leading-relaxed">
                  {protocol.desc}
                </p>
              </div>
            </div>
          );
        })}

        {/* Bottom border */}
        <div className="border-t border-white/10" />

        {/* CTA Button */}
        {onOpenQuiz && (
          <div className="flex justify-center mt-16 md:mt-24">
            <button
              onClick={onOpenQuiz}
              className="magnetic-btn w-max text-sm md:text-base font-mono font-medium uppercase tracking-widest border border-white/20 px-8 py-4 hover:bg-white hover:text-accent transition-colors"
            >
              AVALIAR MINHA ESTRUTURA
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Protocol;
