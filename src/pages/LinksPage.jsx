import { Helmet } from 'react-helmet-async';
import { getPublishedPosts } from '../data/blogPosts';
import { cidades } from '../data/landings';

// Página do "link na bio" do Instagram (fora do sitemap e com noindex).
// O link da bio leva UTM; os links desta página são internos e sem UTM, para não reiniciar a sessão no Analytics.
const WHATSAPP = 'https://wa.me/5511978679090?text=' + encodeURIComponent('Olá! Vim pelo Instagram da One Thank Digital.');

// Artigo mais recente já publicado: troca sozinho a cada terça, junto com a publicação automática do blog
const artigoDaSemana = () =>
  [...getPublishedPosts()].sort((a, b) =>
    (b.publishDate || b.dataPublicacao || '').localeCompare(a.publishDate || a.dataPublicacao || '')
  )[0];

export default function LinksPage() {
  const artigo = artigoDaSemana();
  const regioes = ['Grande ABC', 'Capital', 'Litoral'].map((regiao) => ({
    regiao,
    itens: cidades.filter((c) => c.regiao === regiao),
  }));

  const botoes = [
    artigo && { href: `/insights/${artigo.slug}/`, rotulo: 'Artigo da semana', texto: artigo.titulo, destaque: true },
    { href: '/diagnostico/', rotulo: 'Gratuito', texto: 'Faça o diagnóstico da sua estrutura digital' },
    { href: WHATSAPP, rotulo: 'WhatsApp', texto: 'Fale com a One Thank Digital', externo: true },
    { href: '/insights/', rotulo: 'Blog', texto: 'Todos os artigos sobre Google, sites e automação' },
    { href: '/onehub/', rotulo: 'OneHub CRM', texto: 'WhatsApp oficial com IA e CRM' },
    { href: '/cases/', rotulo: 'Cases', texto: 'Projetos entregues' },
  ].filter(Boolean);

  return (
    <main className="relative z-10 min-h-screen px-4 py-12 sm:py-16">
      <Helmet>
        <title>Links | One Thank Digital</title>
        <meta name="description" content="Artigo da semana, diagnóstico gratuito, WhatsApp e regiões atendidas pela One Thank Digital." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://onethank.com.br/links/" />
      </Helmet>

      <div className="mx-auto w-full max-w-md">
        <header className="mb-10 text-center">
          <a href="/" aria-label="One Thank Digital — página inicial">
            <img src="/logo.svg" alt="One Thank Digital" className="mx-auto mb-5 h-14 w-auto" />
          </a>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
            Presença · Comunicação · Estrutura
          </p>
        </header>

        <nav aria-label="Links principais" className="flex flex-col gap-3">
          {botoes.map((b) => (
            <a
              key={b.href}
              href={b.href}
              {...(b.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={
                'group block rounded-xl border px-5 py-4 transition-colors ' +
                (b.destaque
                  ? 'border-accent bg-accent text-white hover:bg-[#b80309]'
                  : 'border-white/10 bg-dark text-white hover:border-accent')
              }
            >
              <span className={'block font-mono text-[11px] uppercase tracking-[0.2em] ' + (b.destaque ? 'text-white/80' : 'text-accent')}>
                {b.rotulo}
              </span>
              <span className="mt-1 flex items-center justify-between gap-3 font-heading text-base font-semibold leading-snug">
                {b.texto}
                <span aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          ))}
        </nav>

        <section aria-labelledby="regioes-titulo" className="mt-10">
          <h2 id="regioes-titulo" className="mb-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-white/50">
            Atendimento online e presencial
          </h2>
          <div className="flex flex-col gap-4">
            {regioes.map(({ regiao, itens }) => (
              <div key={regiao}>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{regiao}</p>
                <div className="flex flex-wrap gap-2">
                  {itens.map((c) => (
                    <a
                      key={c.path}
                      href={c.path}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
                    >
                      {c.nomeCurto}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 text-center font-mono text-xs text-white/40">
          Rua Monte Casseros, 281 · Centro · Santo André · SP
        </footer>
      </div>
    </main>
  );
}
