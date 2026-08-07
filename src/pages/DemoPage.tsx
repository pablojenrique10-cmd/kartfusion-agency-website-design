import { useMemo, useState, type CSSProperties } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { DEMO_MAP } from "../data/demos";
import { ALL_NICHES } from "../data/templates";
import { DemoBlockRenderer, DemoFooter, DemoNav } from "../components/DemoBlocks";
import { Icon, LogoMark } from "../components/Icons";
import { waLink, WA_MODEL_MSG } from "../lib/fx";

const WHITE_TEXT = ["#b18cff", "#f87171", "#ff6fa5", "#3ed6c0"];

export default function DemoPage() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const demo = id ? DEMO_MAP[id] : undefined;
  const [cart, setCart] = useState(0);

  const niche = useMemo(() => {
    const nid = params.get("n");
    return nid ? ALL_NICHES.find((n) => n.id === nid) : undefined;
  }, [params]);

  if (!demo) return <Navigate to="/modelos" replace />;

  const accInk = WHITE_TEXT.includes(demo.color) ? "#ffffff" : "#12151b";
  const waPersonalize = `Olá, vi o modelo de ${demo.segment} da KartFusion e gostaria de personalizar para minha empresa${niche ? ` (ramo: ${niche.name})` : ""}.`;
  const waQuote = `Olá! Vi a demonstração do modelo de ${demo.segment} no site da KartFusion e gostaria de solicitar um orçamento.`;

  return (
    <div style={{ "--acc": demo.color, "--acc-ink": accInk } as CSSProperties} className="min-h-screen bg-[#fbfbf9]">
      {/* barra da agência */}
      <div className="sticky top-0 z-50 h-14 bg-ink-950/95 backdrop-blur-md border-b border-neon/20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/" className="flex items-center gap-2 shrink-0 group" aria-label="Voltar para KartFusion">
              <LogoMark className="w-8 h-8 transition-transform group-hover:rotate-6" />
              <span className="hidden sm:block font-display font-bold text-sm">
                Kart<span className="text-neon">Fusion</span>
              </span>
            </Link>
            <span className="hidden md:flex items-center gap-2 font-mono text-[11px] text-fog">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              demonstração interativa
            </span>
            <span className="glass rounded-full px-3 py-1 text-[11px] font-bold truncate" style={{ color: demo.color }}>
              {niche ? `Modelo ${niche.name}` : `Modelo ${demo.segment}`}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link to="/modelos" className="hidden sm:flex items-center gap-2 text-xs font-bold text-fog hover:text-neon transition-colors px-3 py-2">
              <Icon name="close" className="w-3.5 h-3.5" /> Sair da demo
            </Link>
            <a
              href={waLink(WA_MODEL_MSG)}
              target="_blank"
              rel="noreferrer"
              className="btn-neon hidden sm:inline-flex items-center gap-2 bg-neon text-ink-950 font-bold text-xs px-4 py-2.5 rounded-full hover:shadow-[0_0_25px_rgba(0,255,136,0.45)] transition-all"
            >
              <Icon name="whatsapp" className="w-3.5 h-3.5" /> Quero um site igual
            </a>
            <a
              href={waLink(waPersonalize)}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-2 border border-neon/40 text-neon font-bold text-xs px-4 py-2.5 rounded-full hover:bg-neon/10 transition-all"
            >
              Personalizar este modelo
            </a>
            <a
              href={waLink(waQuote)}
              target="_blank"
              rel="noreferrer"
              className="sm:hidden inline-flex items-center gap-2 bg-neon text-ink-950 font-bold text-xs px-4 py-2.5 rounded-full"
            >
              <Icon name="whatsapp" className="w-3.5 h-3.5" /> Quero este site
            </a>
          </div>
        </div>
      </div>

      {/* site demonstrativo */}
      <DemoNav demo={demo} cart={cart} />
      <main>
        {demo.blocks.map((b, i) => (
          <DemoBlockRenderer key={i} b={b} demo={demo} onAdd={() => setCart((c) => c + 1)} />
        ))}
      </main>
      <DemoFooter demo={demo} />

      {/* WhatsApp do modelo */}
      <a
        href={waLink(demo.wa)}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp do modelo"
        className="fixed bottom-6 right-6 z-[70] group flex items-center gap-3"
      >
        <span className="hidden sm:block bg-white shadow-xl rounded-full px-4 py-2 text-xs font-bold text-[#15181e] opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Fale com {demo.brand}
        </span>
        <span className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:scale-110 transition-transform duration-300" style={{ background: "#25D366" }}>
          <span className="absolute inset-0 rounded-full bg-[#25D366]" style={{ animation: "kf-pulse-ring 1.8s ease-out infinite" }} />
          <Icon name="whatsapp" className="w-7 h-7 text-white relative" />
        </span>
      </a>
    </div>
  );
}
