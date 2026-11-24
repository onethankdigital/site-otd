import React, { useEffect, useRef } from 'react';
import Protocol from './Protocol';
import { HTML_ANTES, HTML_DEPOIS, CSS } from './homeNova/conteudo';
import iniciarHome from './homeNova/iniciar';

// Home no desenho aprovado em 24/11/2026: topo, pilares, teste, posicionamento, chamada final, FAQ (padrão do site) e Insights.
export default function HomeConteudo({ onOpenQuiz, onOpenPilares, onOpenHistoria }) {
  const antes = useRef(null);
  const depois = useRef(null);

  useEffect(() => {
    // a página pré-renderizada já vem com as interações montadas: volta ao HTML original antes de iniciar
    if (antes.current) antes.current.innerHTML = HTML_ANTES;
    if (depois.current) depois.current.innerHTML = HTML_DEPOIS;
    return iniciarHome({ quiz: onOpenQuiz, pilares: onOpenPilares, historia: onOpenHistoria });
  }, []);

  return (
    <div className="homepg">
      <style>{CSS}</style>
      <div ref={antes} dangerouslySetInnerHTML={{ __html: HTML_ANTES }} />
      <Protocol onOpenQuiz={onOpenQuiz} />
      <div ref={depois} dangerouslySetInnerHTML={{ __html: HTML_DEPOIS }} />
    </div>
  );
}
