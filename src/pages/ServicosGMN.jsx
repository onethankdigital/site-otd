import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import { HTML_ANTES, HTML_DEPOIS, CSS } from './servicoGMN/conteudo';
import iniciarPaginaGMN from './servicoGMN/iniciar';
import FAQS from './servicoGMN/faqs';

const ir = (url) => () => { window.location.href = url; };
const DESCRICAO = 'Perfil da empresa no Google completo, bem avaliado e ativo para aparecer no mapa quando procuram o seu serviço. Diagnóstico gratuito para empresas do ABC.';

export default function ServicosGMN() {
  const antes = useRef(null);
  const depois = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // a página pré-renderizada já vem com as interações montadas: volta ao HTML original antes de iniciar
    if (antes.current) antes.current.innerHTML = HTML_ANTES;
    if (depois.current) depois.current.innerHTML = HTML_DEPOIS;
    return iniciarPaginaGMN();
  }, []);

  return (
    <>
      <Helmet>
        <title>Google Meu Negócio em Santo André e ABC | One Thank Digital</title>
        <meta name="description" content={DESCRICAO} />
        <meta property="og:title" content="Google Meu Negócio: apareça no mapa quando o cliente decide | One Thank Digital" />
        <meta property="og:description" content={DESCRICAO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethank.com.br/servicos/google-meu-negocio/" />
        <meta property="og:image" content="https://onethank.com.br/hero-google-meu-negocio.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Google Meu Negócio: apareça no mapa quando o cliente decide | One Thank Digital" />
        <meta property="twitter:description" content={DESCRICAO} />
        <meta property="twitter:image" content="https://onethank.com.br/hero-google-meu-negocio.webp" />
        <link rel="canonical" href="https://onethank.com.br/servicos/google-meu-negocio/" />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Otimização do Google Meu Negócio (Perfil da Empresa no Google)',
              serviceType: 'SEO local',
              provider: {
                '@type': 'LocalBusiness',
                name: 'One Thank Digital',
                url: 'https://onethank.com.br/',
                address: { '@type': 'PostalAddress', addressLocality: 'Santo André', addressRegion: 'SP', addressCountry: 'BR' }
              },
              areaServed: [
                { '@type': 'City', name: 'Santo André' },
                { '@type': 'City', name: 'São Bernardo do Campo' },
                { '@type': 'City', name: 'São Caetano do Sul' }
              ]
            }
          ])}
        </script>
      </Helmet>

      <style>{CSS}</style>
      <Navbar onOpenQuiz={ir('/diagnostico/')} onOpenPilares={ir('/pilares/')} onOpenHistoria={ir('/historia/')} />
      <main className="gmnpg">
        <div ref={antes} dangerouslySetInnerHTML={{ __html: HTML_ANTES }} />
        <Faq itens={FAQS} />
        <div ref={depois} dangerouslySetInnerHTML={{ __html: HTML_DEPOIS }} />
      </main>
      <Footer onOpenQuiz={ir('/diagnostico/')} onOpenPilares={ir('/pilares/')} onOpenHistoria={ir('/historia/')} />
    </>
  );
}
