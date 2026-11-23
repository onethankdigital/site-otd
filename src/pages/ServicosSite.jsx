import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HTML, CSS } from './servicoSite/conteudo';
import iniciarPaginaSites from './servicoSite/iniciar';
import FAQS from './servicoSite/faqs';

const ir = (url) => () => { window.location.href = url; };
const DESCRICAO = 'Desenvolvimento de sites profissionais para empresas do ABC Paulista: rápidos no celular, com a mensagem certa na primeira tela e prontos para o Google e para as IAs. Site institucional no ar em 3 semanas.';

export default function ServicosSite() {
  const raiz = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // a página pré-renderizada já vem com as interações montadas: volta ao HTML original antes de iniciar
    if (raiz.current) raiz.current.innerHTML = HTML;
    iniciarPaginaSites();
  }, []);

  return (
    <>
      <Helmet>
        <title>Criação de Sites Profissionais B2B | One Thank Digital</title>
        <meta name="description" content={DESCRICAO} />
        <meta property="og:title" content="Site Profissional para Empresas B2B | One Thank Digital" />
        <meta property="og:description" content={DESCRICAO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethank.com.br/servicos/criacao-de-sites/" />
        <meta property="og:image" content="https://onethank.com.br/hero-desenvolvimento-web.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Site Profissional para Empresas B2B | One Thank Digital" />
        <meta property="twitter:description" content={DESCRICAO} />
        <meta property="twitter:image" content="https://onethank.com.br/hero-desenvolvimento-web.webp" />
        <link rel="canonical" href="https://onethank.com.br/servicos/criacao-de-sites/" />
        <link rel="preload" as="image" href="/img/servicos/sites/otd-home.webp" type="image/webp" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap" />
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
              name: 'Desenvolvimento de sites profissionais para empresas B2B',
              serviceType: 'Criação de sites',
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
      <main className="sitepg" ref={raiz} dangerouslySetInnerHTML={{ __html: HTML }} />
      <Footer onOpenQuiz={ir('/diagnostico/')} onOpenPilares={ir('/pilares/')} onOpenHistoria={ir('/historia/')} />
    </>
  );
}
