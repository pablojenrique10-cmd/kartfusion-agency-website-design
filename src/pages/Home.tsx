import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type MouseEvent as ReactMouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Particles from "../components/Particles";
import { Icon } from "../components/Icons";
import { Counter, Reveal, Scramble, useTilt, waLink, WA_SITE_MSG } from "../lib/fx";
import { DEMO_MAP } from "../data/demos";
import { CATEGORIES } from "../data/templates";

/* ============================== HERO ============================== */

function BrowserMock() {
  const tiltRef = useTilt(6);
  const bars = [38, 62, 45, 80, 58, 92, 70, 100];
  return (
    <div className="relative" ref={tiltRef} style={{ transformStyle: "preserve-3d", transition: "transform .25s ease-out" }}>
      {/* anel orbital */}
      <div className="absolute -inset-10 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-neon/15 spin-slow">
          <span className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-neon shadow-[0_0_16px_rgba(0,255,136,0.9)]" />
        </div>
        <div className="absolute inset-10 rounded-full border border-dashed border-neon/10 spin-slow" style={{ animationDirection: "reverse", animationDuration: "40s" }} />
      </div>

      {/* janela do navegador */}
      <div className="relative rounded-2xl overflow-hidden border border-white/12 bg-ink-850 shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_60px_rgba(0,255,136,0.07)]">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-ink-900/80">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 max-w-64 mx-auto text-center font-mono text-[10px] text-fog bg-ink-950 border border-white/8 rounded-full px-3 py-1 truncate">
            https://kartfusion.dev/sua-empresa
          </span>
        </div>
        <div className="relative p-5 grid grid-cols-5 gap-4">
          <div className="scanline" />
          {/* mini site */}
          <div className="col-span-3 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-2.5 rounded bg-neon/70" />
              <div className="flex gap-2">
                <div className="w-8 h-2 rounded bg-white/15" />
                <div className="w-8 h-2 rounded bg-white/15" />
                <div className="w-8 h-2 rounded bg-white/15" />
              </div>
            </div>
            <div className="pt-3 space-y-2">
              <div className="w-11/12 h-4 rounded bg-white/25" />
              <div className="w-8/12 h-4 rounded bg-white/25" />
              <div className="w-10/12 h-2 rounded bg-white/10 mt-3" />
              <div className="w-9/12 h-2 rounded bg-white/10" />
            </div>
            <div className="flex gap-2 pt-2">
              <div className="w-20 h-7 rounded-full bg-neon shadow-[0_0_18px_rgba(0,255,136,0.5)]" />
              <div className="w-20 h-7 rounded-full border border-white/20" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-white/8 bg-ink-900 p-2 space-y-1.5">
                  <div className="w-5 h-5 rounded bg-neon/25" />
                  <div className="w-full h-1.5 rounded bg-white/15" />
                  <div className="w-[70%] h-1.5 rounded bg-white/8" />
                </div>
              ))}
            </div>
          </div>
          {/* painel de analytics */}
          <div className="col-span-2 flex flex-col gap-3">
            <div className="rounded-lg border border-white/8 bg-ink-900 p-3 flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] text-fog">conversões.svg</span>
                <span className="font-mono text-[9px] text-neon">▲ 180%</span>
              </div>
              <div className="flex items-end gap-1.5 h-20">
                {bars.map((b, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-neon/25 to-neon/80 bar-rise" style={{ height: `${b}%`, animationDelay: `${300 + i * 120}ms` }} />
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/8 bg-ink-950 p-3 font-mono text-[9px] leading-relaxed">
              <p className="text-fog-dim">{"// deploy em 7 dias"}</p>
              <p><span className="text-[#7dd3fc]">const</span> <span className="text-paper">site</span> = <span className="text-[#7dd3fc]">await</span></p>
              <p className="pl-2 caret"><span className="text-neon">kartfusion</span>.<span className="text-[#ffb454]">criar</span>()</p>
            </div>
          </div>
        </div>
      </div>

      {/* chips flutuantes */}
      <div className="absolute -left-8 top-10 floaty glass rounded-xl px-3.5 py-2.5 flex items-center gap-2 shadow-lg hidden sm:flex">
        <Icon name="bolt" className="w-4 h-4 text-neon" />
        <div>
          <p className="text-[11px] font-bold leading-none">PageSpeed 99</p>
          <p className="text-[9px] text-fog font-mono">carrega em 0.8s</p>
        </div>
      </div>
      <div className="absolute -right-6 top-1/3 floaty2 glass rounded-xl px-3.5 py-2.5 flex items-center gap-2 shadow-lg hidden sm:flex" style={{ animationDelay: ".6s" }}>
        <Icon name="chart" className="w-4 h-4 text-neon" />
        <div>
          <p className="text-[11px] font-bold leading-none">+180% conversões</p>
          <p className="text-[9px] text-fog font-mono">média dos clientes</p>
        </div>
      </div>
      <div className="absolute -bottom-6 left-12 floaty glass rounded-xl px-3.5 py-2.5 flex items-center gap-2 shadow-lg hidden sm:flex" style={{ animationDelay: "1.1s" }}>
        <Icon name="code" className="w-4 h-4 text-neon" />
        <p className="text-[11px] font-bold font-mono">{"<código limpo/>"}</p>
      </div>
    </div>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!glowRef.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(0,255,136,0.09), transparent 65%)`;
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20" onMouseMove={onMove}>
      <div className="absolute inset-0 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <Particles density={70} />
      <div ref={glowRef} className="absolute inset-0 pointer-events-none transition-opacity duration-300" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-neon/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-52 -right-40 w-[560px] h-[560px] rounded-full bg-[#21e6c1]/8 blur-[150px] pointer-events-none" />

      <div className={`relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center w-full ${mounted ? "masks-on" : ""}`}>
        <div>
          <p className="font-mono text-xs sm:text-sm text-neon tracking-[0.25em] mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-neon" />
            <Scramble text="AGÊNCIA DIGITAL DE ALTA PERFORMANCE" delay={300} />
          </p>
          <h1 className="font-display font-extrabold text-[clamp(2.1rem,5.2vw,4.3rem)] leading-[1.08] tracking-tight">
            <span className="mask-line"><span style={{ "--md": "100ms" } as CSSProperties}>Transformamos</span></span>
            <span className="mask-line"><span style={{ "--md": "240ms" } as CSSProperties}>ideias em</span></span>
            <span className="mask-line">
              <span style={{ "--md": "380ms" } as CSSProperties} className="text-neon glow-text">sites que vendem.</span>
            </span>
          </h1>
          <p className="mt-7 text-fog text-lg max-w-xl leading-relaxed">
            Criamos sites <strong className="text-paper font-semibold">profissionais, modernos e personalizados</strong> para empresas que querem crescer no digital.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={waLink(WA_SITE_MSG)}
              target="_blank"
              rel="noreferrer"
              className="btn-neon group inline-flex items-center gap-3 bg-neon text-ink-950 font-bold px-8 py-4 rounded-full text-base hover:shadow-[0_0_45px_rgba(0,255,136,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              Solicitar meu site
              <Icon name="arrow" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              to="/modelos"
              className="group inline-flex items-center gap-3 border border-neon/35 text-neon font-semibold px-8 py-4 rounded-full hover:bg-neon/10 hover:border-neon/70 transition-all duration-300"
            >
              <Icon name="eye" className="w-5 h-5" />
              Ver exemplos
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["RV", "MC", "JP", "AF"].map((ini, i) => (
                <span key={ini} className="w-10 h-10 rounded-full border-2 border-ink-950 flex items-center justify-center text-[11px] font-bold" style={{ background: ["#0e3b27", "#123a31", "#1c2f27", "#0b2e3b"][i], color: ["#8affd2", "#7dd3fc", "#e8c15a", "#ff8a5c"][i] }}>
                  {ini}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-neon">
                {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="w-3.5 h-3.5" />)}
              </div>
              <p className="text-xs text-fog mt-1">+30 empresas já venderam mais com a gente</p>
            </div>
          </div>
        </div>

        <Reveal dir="scale" delay={200} className="relative max-w-xl w-full mx-auto lg:mx-0">
          <BrowserMock />
        </Reveal>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fog-dim">
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <span className="w-px h-8 bg-gradient-to-b from-neon to-transparent" />
      </div>
    </section>
  );
}

/* ============================== MARQUEE ============================== */

function Marquee() {
  const items = ["Sites profissionais", "Lojas virtuais", "Landing pages", "SEO & Performance", "Design exclusivo", "Suporte contínuo"];
  return (
    <div className="relative border-y border-white/8 bg-ink-900 py-5 overflow-hidden">
      <div className="marquee-track flex w-max items-center">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-10 pr-10 shrink-0">
            <span className="font-display font-semibold text-sm sm:text-base text-fog whitespace-nowrap">{it}</span>
            <Icon name="spark" className="w-4 h-4 text-neon shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================== SOBRE ============================== */

function Sobre() {
  const cards = [
    { glyph: "🚀", icon: "rocket", title: "Sites profissionais", desc: "Criamos sites rápidos, bonitos e otimizados para converter visitantes em clientes reais.", big: true },
    { glyph: "🎨", icon: "palette", title: "Design personalizado", desc: "Cada projeto nasce da identidade da sua empresa — nada de templates genéricos." },
    { glyph: "📱", icon: "device", title: "Responsivo", desc: "Perfeito no computador, tablet e celular." },
    { glyph: "⚡", icon: "bolt", title: "Alta performance", desc: "Carregamento em menos de 1 segundo para seus clientes não esperarem." },
  ];
  return (
    <section className="relative py-28 overflow-hidden" id="sobre">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon/6 blur-[130px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="font-mono text-xs text-neon tracking-[0.25em] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-neon inline-block" />SOBRE A KARTFUSION
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl leading-tight">
              Uma agência com <span className="text-neon">mentalidade de produto</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-fog text-lg leading-relaxed">
              A KartFusion é uma agência especializada em desenvolvimento de sites modernos e estratégias digitais para empresas que querem se destacar online.
            </p>
            <p className="mt-4 text-fog leading-relaxed">
              Unimos engenharia, design e velocidade de execução para entregar projetos que parecem ter saído de empresas avaliadas em milhões — porque esse é exatamente o padrão que aplicamos.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Inovação", "Velocidade", "Qualidade", "Confiança"].map((t) => (
                <span key={t} className="glass-soft rounded-full px-4 py-2 text-xs font-semibold text-mint tracking-wide">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 110} className={c.big ? "sm:col-span-2" : ""}>
              <div className={`group relative h-full rounded-2xl border border-white/8 bg-ink-850 p-7 overflow-hidden card-lift hover:border-neon/40 hover:shadow-[0_20px_60px_rgba(0,255,136,0.08)] ${c.big ? "sm:flex sm:items-center sm:gap-8" : ""}`}>
                <span className="absolute -top-6 -right-3 font-display font-black text-[110px] leading-none text-stroke-faint select-none group-hover:text-stroke transition-all duration-500">
                  0{i + 1}
                </span>
                <div className={c.big ? "sm:w-2/5 relative" : "relative"}>
                  <div className="w-14 h-14 rounded-xl bg-neon/10 border border-neon/25 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <span>{c.glyph}</span>
                  </div>
                </div>
                <div className="relative">
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-neon transition-colors">{c.title}</h3>
                  <p className="text-fog text-sm leading-relaxed">{c.desc}</p>
                </div>
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-neon to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== SERVIÇOS ============================== */

function Servicos() {
  const items = [
    { icon: "globe", n: "01", title: "Site Institucional", desc: "Para empresas que querem presença profissional na internet e autoridade no Google." },
    { icon: "cart", n: "02", title: "Loja Virtual", desc: "Venda seus produtos online com checkout simples, gestão fácil e design que converte." },
    { icon: "chart", n: "03", title: "Landing Pages", desc: "Páginas focadas em captar clientes, com copy estratégica e velocidade máxima." },
    { icon: "target", n: "04", title: "Sites Personalizados", desc: "Projetos exclusivos desenhados do zero para a realidade de cada negócio." },
  ];
  return (
    <section className="relative py-28 bg-ink-900/60" id="servicos">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <Reveal>
            <p className="font-mono text-xs text-neon tracking-[0.25em] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-neon inline-block" />O QUE FAZEMOS
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl leading-tight max-w-xl">
              Soluções digitais <span className="text-neon">sob medida</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <a href={waLink(WA_SITE_MSG)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-neon font-semibold hover:gap-5 transition-all">
              Pedir orçamento <Icon name="arrow" className="w-5 h-5" />
            </a>
          </Reveal>
        </div>

        <div className="border-t border-white/10">
          {items.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <a
                href={waLink(`Olá! Tenho interesse em: ${s.title}. Podem me passar um orçamento?`)}
                target="_blank"
                rel="noreferrer"
                className="group relative grid grid-cols-[auto_1fr_auto] sm:grid-cols-[70px_56px_1fr_auto] items-center gap-5 sm:gap-8 py-8 px-4 sm:px-6 border-b border-white/10 overflow-hidden"
              >
                <span className="absolute inset-0 bg-neon scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]" />
                <span className="font-display font-black text-2xl sm:text-4xl text-stroke group-hover:text-ink-950/30 transition-colors duration-500 relative">{s.n}</span>
                <span className="hidden sm:flex w-14 h-14 rounded-xl border border-neon/25 bg-neon/8 items-center justify-center text-neon group-hover:bg-ink-950/10 group-hover:border-ink-950/30 group-hover:text-ink-950 transition-all duration-500 relative">
                  <Icon name={s.icon} className="w-6 h-6" />
                </span>
                <span className="relative">
                  <span className="font-display font-bold text-xl sm:text-2xl block group-hover:text-ink-950 transition-colors duration-500">{s.title}</span>
                  <span className="text-fog text-sm mt-1 block max-w-xl group-hover:text-ink-950/80 transition-colors duration-500">{s.desc}</span>
                </span>
                <Icon name="arrow" className="w-6 h-6 text-neon group-hover:text-ink-950 group-hover:translate-x-2 transition-all duration-500 relative justify-self-end" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== MODELOS TEASER ============================== */

function ModelosTeaser() {
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const submit = (e: FormEvent) => {
    e.preventDefault();
    nav(`/modelos${q ? `?q=${encodeURIComponent(q)}` : ""}`);
  };
  return (
    <section className="relative py-28 overflow-hidden" id="modelos">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs text-neon tracking-[0.25em] mb-4 justify-center flex items-center gap-3">
            <span className="w-8 h-px bg-neon inline-block" />BIBLIOTECA DE MODELOS<span className="w-8 h-px bg-neon inline-block" />
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl leading-tight">
            Qual é o <span className="text-neon">seu negócio</span>?
          </h2>
          <p className="mt-5 text-fog text-lg">
            Digite seu segmento e veja um modelo navegável, pronto para demonstração. São +90 profissões cobertas.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 max-w-2xl mx-auto">
          <form onSubmit={submit} className="group relative flex items-center glass rounded-full p-2 pl-6 focus-within:border-neon/60 transition-colors">
            <Icon name="search" className="w-5 h-5 text-neon shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Digite seu tipo de negócio… ex: dentista, pizzaria, academia"
              className="flex-1 bg-transparent px-4 py-3 text-paper placeholder:text-fog-dim text-sm sm:text-base"
            />
            <button type="submit" className="btn-neon bg-neon text-ink-950 font-bold text-sm px-6 py-3 rounded-full hover:shadow-[0_0_30px_rgba(0,255,136,0.45)] transition-all shrink-0">
              Buscar modelo
            </button>
          </form>
        </Reveal>

        <Reveal delay={250} className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {CATEGORIES.slice(0, 10).map((c) => (
            <button
              key={c.id}
              onClick={() => nav(`/modelos?cat=${c.id}`)}
              className="glass-soft rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-fog hover:text-ink-950 hover:bg-neon hover:border-neon transition-all duration-300 hover:-translate-y-0.5"
            >
              {c.glyph} {c.name}
            </button>
          ))}
          <button onClick={() => nav("/modelos")} className="rounded-full px-4 py-2 text-xs sm:text-sm font-bold text-neon border border-neon/40 hover:bg-neon/10 transition-all">
            Ver todos →
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== PORTFÓLIO ============================== */

function Portfolio() {
  const projects = [
    { demo: "loja", label: "Loja Virtual", desc: "E-commerce completo com carrinho e checkout." },
    { demo: "advocacia", label: "Site Empresarial", desc: "Presença digital de alto padrão para escritórios." },
    { demo: "educacao", label: "Landing Page", desc: "Página de captação para cursos online." },
    { demo: "restaurante", label: "Restaurante", desc: "Cardápio digital e reservas pelo WhatsApp." },
    { demo: "clinica", label: "Clínica", desc: "Agendamento online e apresentação de especialidades." },
    { demo: "barbearia", label: "Serviços Locais", desc: "Agendamento e tabela de preços para o bairro." },
  ];
  return (
    <section className="relative py-28 bg-ink-900/60" id="portfolio">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <Reveal>
            <p className="font-mono text-xs text-neon tracking-[0.25em] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-neon inline-block" />PORTFÓLIO
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl leading-tight max-w-xl">
              Projetos que <span className="text-neon">vendem de verdade</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/modelos" className="group inline-flex items-center gap-3 text-neon font-semibold hover:gap-5 transition-all">
              Explorar biblioteca completa <Icon name="arrow" className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const d = DEMO_MAP[p.demo];
            return (
              <Reveal key={p.demo} delay={(i % 3) * 110}>
                <Link to={`/modelo/${d.id}`} className="group block relative rounded-2xl overflow-hidden border border-white/8 bg-ink-850 card-lift hover:border-neon/40 hover:shadow-[0_25px_70px_rgba(0,255,136,0.1)]">
                  <div className="relative h-56 overflow-hidden">
                    <img src={d.cover} alt={d.brand} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                    <span className="absolute top-4 left-4 glass rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wide" style={{ color: d.color }}>
                      {p.label}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-display font-bold text-lg group-hover:text-neon transition-colors">{d.brand}</h3>
                        <p className="text-fog text-sm mt-1">{p.desc}</p>
                      </div>
                      <span className="w-11 h-11 shrink-0 rounded-full border border-neon/30 flex items-center justify-center text-neon group-hover:bg-neon group-hover:text-ink-950 transition-all duration-300 group-hover:rotate-[-45deg]">
                        <Icon name="arrow" className="w-5 h-5" />
                      </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/6 flex items-center justify-between text-xs font-mono text-fog-dim">
                      <span>{d.tagline}</span>
                      <span className="text-neon opacity-0 group-hover:opacity-100 transition-opacity">Ver projeto →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================== COMO FUNCIONA ============================== */

function ComoFunciona() {
  const steps = [
    { n: "1", title: "Você entra em contato", desc: "Chama no WhatsApp e conta o que precisa. Resposta em minutos." },
    { n: "2", title: "Conversamos sobre sua ideia", desc: "Entendemos seu negócio, público e objetivos para desenhar a estratégia." },
    { n: "3", title: "Criamos o modelo ideal", desc: "Design exclusivo, conteúdo e desenvolvimento com revisões ilimitadas." },
    { n: "4", title: "Seu site fica pronto e publicado", desc: "No ar, otimizado para o Google e com suporte contínuo." },
  ];
  return (
    <section className="relative py-28 overflow-hidden" id="como-funciona">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neon/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-neon tracking-[0.25em] mb-4 justify-center flex items-center gap-3">
            <span className="w-8 h-px bg-neon inline-block" />COMO FUNCIONA<span className="w-8 h-px bg-neon inline-block" />
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl leading-tight">
            Do contato ao site no ar em <span className="text-neon">4 passos</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-white/10">
            <svg className="absolute inset-0 w-full h-[3px] -top-px" preserveAspectRatio="none" viewBox="0 0 100 1">
              <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="#00ff88" strokeWidth="1.5" className="dash-draw" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} />
            </svg>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 160} className="relative">
                <div className="group text-center lg:text-left">
                  <div className="relative w-24 h-24 mx-auto lg:mx-0 mb-6">
                    <span className="absolute inset-0 rounded-full border border-neon/30 group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute inset-2 rounded-full bg-ink-850 border border-neon/15 flex items-center justify-center font-display font-black text-3xl text-neon group-hover:bg-neon group-hover:text-ink-950 transition-all duration-500 shadow-[0_0_30px_rgba(0,255,136,0.12)]">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-neon transition-colors">{s.title}</h3>
                  <p className="text-fog text-sm leading-relaxed max-w-55 mx-auto lg:mx-0">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== POR QUE ESCOLHER ============================== */

function PorQue() {
  const checks = ["Design moderno", "Atendimento personalizado", "Sites rápidos", "Layout exclusivo", "Suporte ao cliente"];
  return (
    <section className="relative py-28 bg-ink-900/60" id="porque">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <p className="font-mono text-xs text-neon tracking-[0.25em] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-neon inline-block" />CONFIANÇA
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl leading-tight">
              Por que escolher a <span className="text-neon">KartFusion</span>?
            </h2>
          </Reveal>
          <div className="mt-9 space-y-4">
            {checks.map((c, i) => (
              <Reveal key={c} delay={i * 100} dir="left">
                <div className="group flex items-center gap-4 glass-soft rounded-xl px-5 py-4 hover:border-neon/40 hover:translate-x-2 transition-all duration-300">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-neon/12 border border-neon/30 flex items-center justify-center text-neon group-hover:bg-neon group-hover:text-ink-950 transition-all duration-300">
                    <Icon name="check" className="w-4.5 h-4.5" />
                  </span>
                  <span className="font-semibold text-paper">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal dir="right" delay={150}>
          <div className="relative rounded-3xl border border-neon/20 bg-gradient-to-b from-ink-800 to-ink-900 p-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon/12 blur-[90px] rounded-full" />
            <div className="scanline" />
            <p className="font-mono text-xs text-neon tracking-[0.25em] mb-8">RESULTADOS EM NÚMEROS</p>
            <div className="space-y-9">
              <div>
                <p className="font-display font-black text-5xl sm:text-6xl text-paper">
                  <Counter to={50} prefix="+" suffix="" />
                </p>
                <p className="text-fog mt-1 font-semibold">Projetos criados</p>
                <div className="mt-3 h-1.5 rounded-full bg-ink-700 overflow-hidden">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-neon to-[#21e6c1]" />
                </div>
              </div>
              <div>
                <p className="font-display font-black text-5xl sm:text-6xl text-paper">
                  <Counter to={30} prefix="+" />
                </p>
                <p className="text-fog mt-1 font-semibold">Empresas atendidas</p>
                <div className="mt-3 h-1.5 rounded-full bg-ink-700 overflow-hidden">
                  <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-neon to-[#21e6c1]" />
                </div>
              </div>
              <div>
                <p className="font-display font-black text-5xl sm:text-6xl text-neon glow-text">
                  <Counter to={100} suffix="%" />
                </p>
                <p className="text-fog mt-1 font-semibold">Personalizado — zero templates prontos</p>
                <div className="mt-3 h-1.5 rounded-full bg-ink-700 overflow-hidden">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-neon to-[#21e6c1]" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== DEPOIMENTOS ============================== */

function Depoimentos() {
  const items = [
    { ini: "RM", color: "#8affd2", bg: "#0e3b27", name: "Ricardo Moraes", role: "Dono de hamburgueria", text: "A KartFusion transformou nossa presença online. O site ficou profissional e trouxe novos clientes já na primeira semana." },
    { ini: "AS", color: "#7dd3fc", bg: "#0b2e3b", name: "Aline Souza", role: "Clínica de estética", text: "O agendamento online eliminou as faltas. Atendimento impecável do início ao fim, com revisões até eu amar o resultado." },
    { ini: "PT", color: "#e8c15a", bg: "#3a2f10", name: "Paulo Teixeira", role: "Escritório de contabilidade", text: "Entregaram em 6 dias um site que parece de empresa grande. Meus clientes comentam toda semana. Investimento que se pagou." },
  ];
  return (
    <section className="relative py-28 overflow-hidden" id="depoimentos">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon/6 blur-[130px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-xs text-neon tracking-[0.25em] mb-4 justify-center flex items-center gap-3">
            <span className="w-8 h-px bg-neon inline-block" />DEPOIMENTOS<span className="w-8 h-px bg-neon inline-block" />
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl leading-tight">
            Quem contratou, <span className="text-neon">recomenda</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 130}>
              <figure className="group relative h-full rounded-2xl border border-white/8 bg-ink-850 p-8 card-lift hover:border-neon/35 hover:shadow-[0_20px_60px_rgba(0,255,136,0.08)]">
                <Icon name="quote" className="w-8 h-8 text-neon/25 group-hover:text-neon/60 transition-colors absolute top-6 right-6" />
                <div className="flex gap-1 text-neon mb-5">
                  {[...Array(5)].map((_, s) => <Icon key={s} name="star" className="w-4 h-4" />)}
                </div>
                <blockquote className="text-fog leading-relaxed text-[15px]">“{t.text}”</blockquote>
                <figcaption className="mt-7 pt-5 border-t border-white/8 flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ background: t.bg, color: t.color }}>
                    {t.ini}
                  </span>
                  <span>
                    <span className="font-bold block text-sm">{t.name}</span>
                    <span className="text-fog-dim text-xs">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== CTA FINAL ============================== */

function CtaFinal() {
  return (
    <section className="relative py-28 overflow-hidden" id="contato">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <Reveal dir="scale">
          <div className="relative rounded-3xl overflow-hidden border border-neon/25 bg-gradient-to-b from-ink-800 via-ink-900 to-ink-950 px-8 sm:px-14 py-16 sm:py-20 text-center">
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-neon/14 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative">
              <p className="font-mono text-xs text-neon tracking-[0.3em] mb-6 flex items-center justify-center gap-3">
                <Icon name="spark" className="w-4 h-4" /> PRONTO PARA COMEÇAR? <Icon name="spark" className="w-4 h-4" />
              </p>
              <h2 className="font-display font-extrabold text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[1.12] max-w-3xl mx-auto">
                Seu negócio merece um <span className="text-neon glow-text">site profissional</span>.
              </h2>
              <p className="mt-6 text-fog text-lg max-w-xl mx-auto">
                Não deixe sua empresa invisível na internet. Tenha um site moderno criado pela KartFusion.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={waLink(WA_SITE_MSG)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neon group inline-flex items-center gap-3 bg-neon text-ink-950 font-bold px-9 py-4.5 rounded-full text-base hover:shadow-[0_0_50px_rgba(0,255,136,0.55)] hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                  Falar com especialista
                </a>
                <Link to="/modelos" className="inline-flex items-center gap-3 border border-white/15 text-paper font-semibold px-9 py-4.5 rounded-full hover:border-neon/60 hover:text-neon transition-all duration-300">
                  Ver modelos prontos
                </Link>
              </div>
              <p className="mt-8 font-mono text-xs text-fog-dim">resposta média em menos de 15 minutos · seg a sáb</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== PAGE ============================== */

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    const state = location.state as { anchor?: string } | null;
    const anchor = state?.anchor ?? location.hash?.replace("#", "");
    if (anchor) {
      const t = setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
      return () => clearTimeout(t);
    }
  }, [location.state, location.hash]);

  return (
    <main>
      <Hero />
      <Marquee />
      <Sobre />
      <Servicos />
      <ModelosTeaser />
      <Portfolio />
      <ComoFunciona />
      <PorQue />
      <Depoimentos />
      <CtaFinal />
    </main>
  );
}
