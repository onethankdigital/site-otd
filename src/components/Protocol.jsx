import React from 'react';
import Faq from './Faq';
import { faqHome } from '../data/faqHome';

// Perguntas frequentes da home no padrão do site (componente Faq). O schema FAQPage continua no App.jsx.
const Protocol = ({ onOpenQuiz }) => (
  <Faq id="protocol" itens={faqHome.map((p) => ({ q: p.title, a: p.desc }))}>
    {onOpenQuiz && (
      <button type="button" onClick={onOpenQuiz} className="otd-faq-cta">Avaliar minha estrutura →</button>
    )}
  </Faq>
);

export default Protocol;
