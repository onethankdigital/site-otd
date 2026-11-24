// Interações da home (gerado a partir da prévia aprovada em 24/11/2026).
// Devolve uma função de limpeza: relógios, observadores e eventos param quando o visitante sai da página.
export default function iniciarHome(acoes = {}) {
  const _timers = [], _ouvintes = [], _obs = [];
  const _si = (f, ms) => { const id = setInterval(f, ms); _timers.push(id); return id; };
  const _on = (alvo, ev, f) => { alvo.addEventListener(ev, f, ev === 'click' ? undefined : { passive: true }); _ouvintes.push([alvo, ev, f]); };
  const _io = (o) => { _obs.push(o); return o; };

(function(){
  var bt=[].slice.call(document.querySelectorAll('#chaves .chave')),pts=[].slice.call(document.querySelectorAll('#ptEu i')),
      n=document.getElementById('nEu'),v=document.getElementById('vered');
  var msg=['O cliente procura, não encontra a sua empresa em nenhum caminho e fecha com o concorrente.',
           'Em 1 caminho o cliente chega até você. Nos outros 3, quem aparece é o concorrente.',
           'Em 2 caminhos o cliente chega até você. Nos outros 2, quem aparece é o concorrente.',
           'Em 3 caminhos o cliente chega até você. Falta 1 para a sua estrutura cobrir o caminho todo.',
           'O cliente chega até você em todos os caminhos. Aqui a decisão deixa de depender da sorte.'];
  function atualiza(){
    var c=0;bt.forEach(function(b,i){var on=b.getAttribute('aria-pressed')==='true';if(on)c++;pts[i].classList.toggle('on',on)});
    n.textContent=c+' de 4 caminhos';v.textContent=msg[c];
  }
  bt.forEach(function(b){b.addEventListener('click',function(){b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')==='true'?'false':'true');atualiza()})});
  atualiza();
})();


(function(){
  var itens=[].slice.call(document.querySelectorAll('#posic .mv')),blocoB=document.getElementById('blocoB'),
      sec=document.getElementById('posic'),enche=document.getElementById('enche'),trilho=document.getElementById('trilho');
  if(!('IntersectionObserver' in window)){itens.forEach(function(e){e.classList.add('ativo')});blocoB.classList.add('ativo-b');return}
  var io=_io(new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('ativo');if(blocoB.contains(e.target))blocoB.classList.add('ativo-b')}})},{rootMargin:'0px 0px -22% 0px',threshold:.2}));
  itens.forEach(function(e){io.observe(e)});
  function prog(){var r=sec.getBoundingClientRect(),t=r.height-innerHeight,p=t>0?Math.min(1,Math.max(0,-r.top/t)):0;enche.style.height=(p*trilho.clientHeight)+'px'}
  _on(window,'scroll',prog,{passive:true});_on(window,'resize',prog);prog();
})();


(function(){
  var stops=[].slice.call(document.querySelectorAll('.stop')),fio=document.getElementById('fio'),lista=document.getElementById('paradas');
  var atual=0,timer=null,movimento=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function ir(i){
    atual=i;
    stops.forEach(function(s,k){s.setAttribute('aria-current',k===i?'true':'false');s.classList.toggle('feito',k<i)});
    var no=stops[i].querySelector('.no'),l=lista.getBoundingClientRect(),n=no.getBoundingClientRect();
    fio.style.height=Math.max(0,n.top-l.top+n.height/2-30)+'px';
  }
  function auto(){if(!movimento)return;clearInterval(timer);timer=_si(function(){ir((atual+1)%stops.length)},4200)}
  stops.forEach(function(s,k){s.addEventListener('click',function(){ir(k);auto()})});
  function relogio(){var d=new Date(),f=function(x){return String(x).padStart(2,'0')};document.getElementById('hh').textContent=f(d.getHours())+':'+f(d.getMinutes())}
  relogio();_si(relogio,15000);
  ir(0);auto();
  _on(window,'resize',function(){ir(atual)});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){ir(atual)});
})();

  // fundo do topo acompanha o mouse de leve (só com mouse e sem "reduzir movimento"), como na home anterior
  const bg = document.querySelector('.homepg .hero-bg');
  if (bg && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
    bg.style.transition = 'transform 1.5s cubic-bezier(.22,.61,.36,1)';
    _on(window, 'mousemove', (e) => {
      const x = (e.clientX / innerWidth - 0.5) * 40, y = (e.clientY / innerHeight - 0.5) * 40;
      bg.style.transform = `translate3d(${-x * 0.2}px, ${-y * 0.2}px, 0)`;
    });
  }
  // botões que abrem as janelas do site (diagnóstico, pilares, história)
  const raiz = document.querySelector('.homepg');
  _on(raiz, 'click', (e) => {
    const a = e.target.closest('[data-acao]');
    if (!a || !acoes[a.dataset.acao]) return;
    e.preventDefault();
    acoes[a.dataset.acao]();
  });

  return () => { _timers.forEach(clearInterval); _obs.forEach((o) => o.disconnect()); _ouvintes.forEach(([a, e, f]) => a.removeEventListener(e, f)); };
}
