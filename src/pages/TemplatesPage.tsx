import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Icon } from "../components/Icons";
import Particles from "../components/Particles";
import { Reveal, waLink } from "../lib/fx";
import { CATEGORIES, DEMO_FEATURES, normalize, searchNiches } from "../data/templates";
import { DEMO_MAP } from "../data/demos";

export default function TemplatesPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const activeCat = params.get("cat") ?? "todos";

  const results = useMemo(() => {
    let list = searchNiches(query);
    if (activeCat !== "todos") list = list.filter((n) => n.category === activeCat);
    return list;
  }, [query, activeCat]);

  const setCat = (id: string) => {
    const next = new URLSearchParams(params);
    if (id === "todos") next.delete("cat");
    else next.set("cat", id);
    setParams(next, { replace: true });
  };

  const suggestions = ["dentista", "pizza", "advogado", "academia", "pet shop", "loja de roupas"];

  return (
    <main className="relative pt-36 pb-28 min-h-screen">
      <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_65%)]" />
      <Particles density={40} className="opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-neon/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* cabeçalho */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs text-neon tracking-[0.25em] mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-neon inline-block" />PORTFÓLIO INTERATIVO<span className="w-8 h-px bg-neon inline-block" />
          </p>
          <h1 className="font-display font-extrabold text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[1.1]">
            Encontre o modelo <span className="text-neon glow-text">perfeito</span> para o seu negócio
          </h1>
          <p className="mt-5 text-fog text-lg">
            Mais de 90 segmentos com demonstrações navegáveis de verdade. Escolha, explore e peça o seu pelo WhatsApp.
          </p>
        </Reveal>

        {/* busca */}
        <Reveal delay={120} className="mt-10 max-w-2xl mx-auto">
          <div className="relative flex items-center glass rounded-full p-2 pl-6 focus-within:border-neon/60 transition-colors">
            <Icon name="search" className="w-5 h-5 text-neon shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Digite seu tipo de negócio… ex: restaurante, advogado, academia"
              className="flex-1 bg-transparent px-4 py-3.5 text-paper placeholder:text-fog-dim"
            />
            {query && (
              <button onClick={() => setQuery("")} className="p-2 text-fog hover:text-neon transition-colors" aria-label="Limpar busca">
                <Icon name="close" className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-fog-dim font-mono">sugestões:</span>
            {suggestions.map((s) => (
              <button key={s} onClick={() => setQuery(s)} className="glass-soft rounded-full px-3 py-1.5 font-semibold text-fog hover:text-neon hover:border-neon/40 transition-all">
                {s}
              </button>
            ))}
          </div>
        </Reveal>

        {/* categorias */}
        <Reveal delay={200} className="mt-10 flex flex-wrap justify-center gap-2.5">
          <button
            onClick={() => setCat("todos")}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${activeCat === "todos" ? "bg-neon text-ink-950 shadow-[0_0_25px_rgba(0,255,136,0.35)]" : "glass-soft text-fog hover:text-neon hover:border-neon/40"}`}
          >
            ✦ Todos
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id === activeCat ? "todos" : c.id)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${activeCat === c.id ? "bg-neon text-ink-950 shadow-[0_0_25px_rgba(0,255,136,0.35)]" : "glass-soft text-fog hover:text-neon hover:border-neon/40"}`}
            >
              {c.glyph} {c.name}
            </button>
          ))}
        </Reveal>

        {/* contagem */}
        <div className="mt-10 flex items-center justify-between border-b border-white/10 pb-4">
          <p className="text-sm text-fog">
            <span className="text-neon font-bold font-display">{results.length}</span>{" "}
            {results.length === 1 ? "modelo encontrado" : "modelos encontrados"}
            {query && <> para “<span className="text-paper font-semibold">{query}</span>”</>}
          </p>
          <p className="hidden sm:block font-mono text-xs text-fog-dim">demonstrações 100% navegáveis</p>
        </div>

        {/* resultados */}
        {results.length > 0 ? (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {results.map((n, i) => {
              const demo = DEMO_MAP[n.demo];
              if (!demo) return null;
              return (
                <Reveal key={n.id} delay={(i % 4) * 80}>
                  <Link
                    to={`/modelo/${demo.id}?n=${n.id}`}
                    className="group block h-full rounded-2xl overflow-hidden border border-white/8 bg-ink-850 card-lift hover:border-neon/40 hover:shadow-[0_20px_55px_rgba(0,255,136,0.09)]"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={demo.cover} alt={`Modelo ${n.name}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-[10px] font-bold" style={{ color: demo.color }}>
                        {n.glyph} {n.catName}
                      </span>
                      <span className="absolute bottom-3 right-3 font-mono text-[10px] text-paper/70 bg-ink-950/70 rounded px-2 py-0.5">
                        modelo {demo.segment}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold group-hover:text-neon transition-colors leading-snug">
                        Modelo {n.name}
                      </h3>
                      <p className="mt-2 text-fog text-[13px] leading-relaxed line-clamp-2">
                        Site moderno para {normalize(n.name).includes("loja") ? "vendas online" : `${n.name.toLowerCase()}`} com {DEMO_FEATURES[demo.id]}.
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/6 flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-neon">
                          <Icon name="eye" className="w-4 h-4" />
                          Ver demonstração
                        </span>
                        <Icon name="arrow" className="w-4 h-4 text-fog-dim group-hover:text-neon group-hover:translate-x-1.5 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="mt-16 text-center glass rounded-3xl p-14 max-w-xl mx-auto">
            <div className="w-16 h-16 mx-auto rounded-full bg-neon/10 border border-neon/25 flex items-center justify-center mb-5">
              <Icon name="search" className="w-7 h-7 text-neon" />
            </div>
            <h3 className="font-display font-bold text-xl">Nenhum modelo encontrado</h3>
            <p className="text-fog mt-2 text-sm">
              Não temos um modelo pronto para “{query}” — mas criamos sites 100% personalizados do zero.
            </p>
            <a
              href={waLink(`Olá! Procurei um modelo de "${query}" no site da KartFusion. Podemos criar um personalizado para minha empresa?`)}
              target="_blank"
              rel="noreferrer"
              className="btn-neon mt-6 inline-flex items-center gap-2 bg-neon text-ink-950 font-bold px-6 py-3 rounded-full hover:shadow-[0_0_30px_rgba(0,255,136,0.45)] transition-all"
            >
              <Icon name="whatsapp" className="w-4 h-4" /> Criar do zero comigo
            </a>
          </div>
        )}

        {/* CTA inferior */}
        <Reveal className="mt-20">
          <div className="relative rounded-3xl border border-neon/20 bg-gradient-to-r from-ink-800 to-ink-900 p-10 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-neon/10 blur-[100px] rounded-full" />
            <div className="relative">
              <h3 className="font-display font-bold text-2xl sm:text-3xl">
                Gostou de algum modelo? <span className="text-neon">Ele pode ser seu em dias.</span>
              </h3>
              <p className="text-fog mt-3 max-w-lg">
                Personalizamos cores, textos, fotos e seções para a sua marca — ou criamos algo totalmente exclusivo.
              </p>
            </div>
            <a
              href={waLink("Olá, vi os modelos da KartFusion e gostaria de um orçamento para minha empresa.")}
              target="_blank"
              rel="noreferrer"
              className="btn-neon shrink-0 inline-flex items-center gap-3 bg-neon text-ink-950 font-bold px-8 py-4 rounded-full hover:shadow-[0_0_40px_rgba(0,255,136,0.5)] hover:-translate-y-1 transition-all"
            >
              <Icon name="whatsapp" className="w-5 h-5" /> Solicitar orçamento
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
