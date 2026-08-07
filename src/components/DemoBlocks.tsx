import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "./Icons";
import { Counter, waLink } from "../lib/fx";
import type { Block, Demo } from "../data/demos";

function SectionHead({ kicker, title, sub, light = true }: { kicker: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl mb-12">
      <p className="font-mono text-[11px] tracking-[0.25em] text-[var(--acc)] font-bold mb-3">{kicker}</p>
      <h2 className={`font-display font-bold text-3xl sm:text-4xl leading-tight ${light ? "text-[#15181e]" : "text-white"}`}>{title}</h2>
      {sub && <p className={`mt-4 ${light ? "text-[#5c6572]" : "text-white/70"}`}>{sub}</p>}
    </div>
  );
}

/* ---------- NAV do site demonstrativo ---------- */
export function DemoNav({ demo, cart }: { demo: Demo; cart: number }) {
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(false);
  const prevCart = useRef(cart);
  useEffect(() => {
    if (cart !== prevCart.current) {
      prevCart.current = cart;
      setBump(true);
      const t = setTimeout(() => setBump(false), 450);
      return () => clearTimeout(t);
    }
  }, [cart]);
  return (
    <nav className="sticky top-14 z-40 bg-white/92 backdrop-blur-md border-b border-black/8">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <a href="#topo" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-black" style={{ background: "var(--acc)" }}>
            {demo.brand[0]}
          </span>
          <span>
            <span className="font-display font-bold text-[#15181e] block leading-none">{demo.brand}</span>
            <span className="text-[10px] font-mono text-[var(--acc)]">{demo.tagline}</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {demo.nav.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="px-3.5 py-2 text-sm font-semibold text-[#5c6572] hover:text-[var(--acc)] transition-colors rounded-lg hover:bg-black/4">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          {demo.hasShop && (
            <span className={`relative w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#15181e] ${bump ? "pop-in" : ""}`}>
              <Icon name="cart" className="w-5 h-5" />
              {cart > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ background: "var(--acc)" }}>
                  {cart}
                </span>
              )}
            </span>
          )}
          <a
            href={waLink(demo.wa)}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all"
            style={{ background: "var(--acc)", color: "var(--acc-ink, #fff)" }}
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            {demo.hasShop ? "Finalizar pedido" : "Falar conosco"}
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#15181e]" aria-label="Menu">
            <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/8 bg-white px-5 py-4 flex flex-col gap-1">
          {demo.nav.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-[#5c6572] font-semibold hover:bg-black/4 hover:text-[var(--acc)] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ---------- blocos ---------- */

function HeroBlock({ b, demo }: { b: Extract<Block, { kind: "hero" }>; demo: Demo }) {
  return (
    <section id={b.id} className="relative min-h-[540px] sm:min-h-[600px] flex items-center overflow-hidden">
      <img src={b.img} alt={demo.brand} className="absolute inset-0 w-full h-full object-cover kenburns" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-5 py-24 w-full">
        {b.badge && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/12 backdrop-blur border border-white/20 px-4 py-1.5 text-white text-xs font-bold mb-6">
            <Icon name="star" className="w-3.5 h-3.5 text-[var(--acc)]" /> {b.badge}
          </span>
        )}
        <p className="font-mono text-xs tracking-[0.3em] text-[var(--acc)] font-bold mb-4">{b.kicker}</p>
        <h1 className="font-display font-extrabold text-white text-[clamp(2rem,5.5vw,4rem)] leading-[1.08] max-w-2xl">{b.title}</h1>
        <p className="mt-5 text-white/80 text-lg max-w-xl leading-relaxed">{b.sub}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={waLink(demo.wa)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 font-bold px-7 py-3.5 rounded-full text-white hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)] transition-all"
            style={{ background: "var(--acc)" }}
          >
            <Icon name="whatsapp" className="w-5 h-5" /> {b.cta}
          </a>
          <a href={`#${demo.nav[1]?.id ?? "topo"}`} className="inline-flex items-center gap-2.5 font-bold px-7 py-3.5 rounded-full text-white border-2 border-white/40 hover:bg-white/10 transition-all">
            Explorar <Icon name="arrow" className="w-4 h-4 rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsBand({ b }: { b: Extract<Block, { kind: "stats" }> }) {
  return (
    <section className="bg-[#14171d] py-10">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {b.items.map((s) => (
          <div key={s.l} className="text-center sm:border-r border-white/10 last:border-0">
            <p className="font-display font-black text-4xl text-white">
              <Counter to={s.v} suffix={s.suffix} decimals={String(s.v).includes(".") ? 1 : 0} />
            </p>
            <p className="mt-1.5 text-sm text-white/55 font-semibold">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesGrid({ b }: { b: Extract<Block, { kind: "services" }> }) {
  return (
    <section id={b.id} className="py-20 bg-[#fbfbf9]">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHead kicker="NOSSOS SERVIÇOS" title={b.title} sub={b.sub} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {b.items.map((s) => (
            <div key={s.name} className="group bg-white rounded-2xl border border-black/8 p-7 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] hover:border-[var(--acc)] transition-all duration-300">
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: "color-mix(in srgb, var(--acc) 14%, white)", color: "var(--acc)" }}>
                  <Icon name={s.icon} className="w-6 h-6" />
                </span>
                {s.price && <span className="font-display font-bold text-lg" style={{ color: "var(--acc)" }}>{s.price}</span>}
              </div>
              <h3 className="font-display font-bold text-[#15181e] mb-2">{s.name}</h3>
              <p className="text-sm text-[#5c6572] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuBlock({ b }: { b: Extract<Block, { kind: "menu" }> }) {
  const [cat, setCat] = useState(0);
  return (
    <section id={b.id} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-5">
        <SectionHead kicker="MENU" title={b.title} sub={b.sub} />
        <div className="flex flex-wrap gap-2.5 mb-10">
          {b.cats.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setCat(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${i === cat ? "text-white shadow-lg" : "bg-black/5 text-[#5c6572] hover:bg-black/10"}`}
              style={i === cat ? { background: "var(--acc)" } : undefined}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div key={cat} className="space-y-2">
          {b.cats[cat].items.map((it, i) => (
            <div key={it.n} className="pop-in flex items-baseline gap-3 py-4 border-b border-black/6 group" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="flex-1">
                <p className="font-bold text-[#15181e] group-hover:text-[var(--acc)] transition-colors">{it.n}</p>
                <p className="text-sm text-[#5c6572] mt-0.5">{it.d}</p>
              </div>
              <span className="flex-1 border-b-2 border-dotted border-black/15 translate-y-[-4px] hidden sm:block" />
              <span className="font-display font-bold" style={{ color: "var(--acc)" }}>{it.p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsGrid({ b, demo, onAdd }: { b: Extract<Block, { kind: "products" }>; demo: Demo; onAdd: () => void }) {
  const [added, setAdded] = useState<string | null>(null);
  const add = (name: string) => {
    onAdd();
    setAdded(name);
    setTimeout(() => setAdded(null), 1200);
  };
  return (
    <section id={b.id} className="py-20 bg-[#fbfbf9]">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHead kicker={b.shop ? "VITRINE" : "DESTAQUES"} title={b.title} sub={b.sub} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {b.items.map((p) => (
            <div key={p.n} className="group bg-white rounded-2xl overflow-hidden border border-black/8 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-[var(--acc)] transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.n} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {p.tag && (
                  <span className="absolute top-3 left-3 text-white text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: "var(--acc)" }}>
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-[#15181e] group-hover:text-[var(--acc)] transition-colors">{p.n}</h3>
                <p className="text-sm text-[#5c6572] mt-1.5">{p.d}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    {p.old && <span className="text-xs text-[#9aa3af] line-through block">{p.old}</span>}
                    <span className="font-display font-black text-xl text-[#15181e]">{p.p}</span>
                  </div>
                  {b.shop ? (
                    <button
                      onClick={() => add(p.n)}
                      className="inline-flex items-center gap-2 text-sm font-bold px-4.5 py-2.5 rounded-full text-white hover:scale-105 active:scale-95 transition-transform"
                      style={{ background: added === p.n ? "#16a34a" : "var(--acc)" }}
                    >
                      {added === p.n ? (<><Icon name="check" className="w-4 h-4" /> Adicionado</>) : (<><Icon name="cart" className="w-4 h-4" /> Adicionar</>)}
                    </button>
                  ) : (
                    <a
                      href={waLink(`${demo.wa} Tenho interesse em: ${p.n}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold px-4.5 py-2.5 rounded-full text-white hover:scale-105 transition-transform"
                      style={{ background: "var(--acc)" }}
                    >
                      Solicitar <Icon name="arrow" className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {b.shop && (
          <div className="mt-8 flex justify-center">
            <a href={waLink(demo.wa)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 font-bold px-7 py-3.5 rounded-full text-white hover:-translate-y-0.5 hover:shadow-xl transition-all" style={{ background: "var(--acc)" }}>
              <Icon name="whatsapp" className="w-5 h-5" /> Finalizar pedido pelo WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function GalleryGrid({ b }: { b: Extract<Block, { kind: "gallery" }> }) {
  return (
    <section id={b.id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHead kicker="GALERIA" title={b.title} sub={b.sub} />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {b.imgs.map((src, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img src={src} alt={`${b.title} ${i + 1}`} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.08] ${i === 0 ? "h-full min-h-72" : "h-44 sm:h-56"}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span className="text-white font-bold text-sm flex items-center gap-2">
                  <Icon name="spark" className="w-4 h-4 text-[var(--acc)]" /> {b.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamGrid({ b }: { b: Extract<Block, { kind: "team" }> }) {
  return (
    <section id={b.id} className="py-20 bg-[#fbfbf9]">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHead kicker="EQUIPE" title={b.title} sub={b.sub} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {b.members.map((m) => (
            <div key={m.name} className="group bg-white rounded-2xl border border-black/8 p-8 text-center hover:-translate-y-1.5 hover:border-[var(--acc)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition-all duration-300">
              <span className="mx-auto w-20 h-20 rounded-full flex items-center justify-center font-display font-black text-xl text-white mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: "var(--acc)" }}>
                {m.ini}
              </span>
              <h3 className="font-display font-bold text-[#15181e]">{m.name}</h3>
              <p className="text-sm text-[#5c6572] mt-1.5">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlansGrid({ b, demo }: { b: Extract<Block, { kind: "plans" }>; demo: Demo }) {
  return (
    <section id={b.id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHead kicker="PLANOS" title={b.title} sub={b.sub} />
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {b.items.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-2 ${p.hot ? "border-2 shadow-[0_25px_60px_rgba(0,0,0,0.12)] md:scale-105" : "border-black/10 bg-[#fbfbf9] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"}`}
              style={p.hot ? { borderColor: "var(--acc)" } : undefined}
            >
              {p.hot && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[11px] font-bold px-4 py-1.5 rounded-full tracking-wide" style={{ background: "var(--acc)" }}>
                  MAIS POPULAR
                </span>
              )}
              <h3 className="font-display font-bold text-xl text-[#15181e]">{p.name}</h3>
              <p className="mt-4">
                <span className="font-display font-black text-4xl text-[#15181e]">{p.price}</span>
                <span className="text-[#5c6572] font-semibold">{p.per}</span>
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#3d4450]">
                    <span className="w-5 h-5 mt-0.5 rounded-full flex items-center justify-center shrink-0" style={{ background: "color-mix(in srgb, var(--acc) 15%, white)", color: "var(--acc)" }}>
                      <Icon name="check" className="w-3 h-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Olá! Vim pelo site ${demo.brand} e quero o plano ${p.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-full text-white hover:-translate-y-0.5 hover:shadow-lg transition-all"
                style={{ background: "var(--acc)" }}
              >
                Escolher {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsBlock({ b }: { b: Extract<Block, { kind: "testimonials" }> }) {
  return (
    <section id={b.id} className="py-20 bg-[#14171d]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-[11px] tracking-[0.25em] text-[var(--acc)] font-bold mb-3">AVALIAÇÕES</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">{b.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {b.items.map((t) => (
            <figure key={t.name} className="bg-white/6 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex gap-1 mb-4" style={{ color: "var(--acc)" }}>
                {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="w-4 h-4" />)}
              </div>
              <blockquote className="text-white/85 text-sm leading-relaxed">“{t.text}”</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-white/50 text-xs mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingBlock({ b, demo }: { b: Extract<Block, { kind: "booking" }>; demo: Demo }) {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ nome: "", tel: "", serv: b.services[0] ?? "", data: "", msg: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Vim pelo site ${demo.brand} e quero agendar.\n\n👤 Nome: ${f.nome}\n📱 Contato: ${f.tel}\n🗂 ${b.serviceLabel}: ${f.serv}\n📅 Data preferida: ${f.data || "a combinar"}${f.msg ? `\n💬 Obs: ${f.msg}` : ""}`;
    window.open(waLink(text), "_blank");
    setSent(true);
  };
  const inputCls = "w-full bg-white border border-black/12 rounded-xl px-4.5 py-3.5 text-sm text-[#15181e] placeholder:text-[#9aa3af] focus:border-[var(--acc)] transition-colors";
  return (
    <section id={b.id} className="py-20 bg-[#fbfbf9]">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-10">
          <p className="font-mono text-[11px] tracking-[0.25em] text-[var(--acc)] font-bold mb-3">AGENDAMENTO</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#15181e]">{b.title}</h2>
          <p className="mt-3 text-[#5c6572]">{b.sub}</p>
        </div>
        {sent ? (
          <div className="pop-in bg-white rounded-3xl border border-black/8 p-12 text-center">
            <span className="mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white mb-5" style={{ background: "#16a34a" }}>
              <Icon name="check" className="w-8 h-8" />
            </span>
            <h3 className="font-display font-bold text-2xl text-[#15181e]">Solicitação enviada!</h3>
            <p className="text-[#5c6572] mt-2">Abrimos o WhatsApp com os seus dados. É só enviar a mensagem para confirmar. ✦</p>
            <button onClick={() => setSent(false)} className="mt-6 text-sm font-bold underline" style={{ color: "var(--acc)" }}>
              Fazer outro agendamento
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-white rounded-3xl border border-black/8 p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-[#3d4450] mb-2">Seu nome *</label>
              <input required value={f.nome} onChange={(e) => setF({ ...f, nome: e.target.value })} placeholder="Como podemos te chamar?" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#3d4450] mb-2">WhatsApp *</label>
              <input required value={f.tel} onChange={(e) => setF({ ...f, tel: e.target.value })} placeholder="(11) 99999-9999" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#3d4450] mb-2">{b.serviceLabel}</label>
              <select value={f.serv} onChange={(e) => setF({ ...f, serv: e.target.value })} className={inputCls}>
                {b.services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#3d4450] mb-2">Data preferida</label>
              <input type="date" value={f.data} onChange={(e) => setF({ ...f, data: e.target.value })} className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#3d4450] mb-2">Observações</label>
              <textarea rows={3} value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} placeholder="Conte um pouco do que você precisa…" className={inputCls} />
            </div>
            <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2.5 font-bold px-7 py-4 rounded-full text-white hover:-translate-y-0.5 hover:shadow-xl transition-all" style={{ background: "var(--acc)" }}>
              <Icon name="whatsapp" className="w-5 h-5" /> {b.action}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function LocationBlock({ b }: { b: Extract<Block, { kind: "location" }> }) {
  return (
    <section id={b.id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHead kicker="LOCALIZAÇÃO" title={b.title} />
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "color-mix(in srgb, var(--acc) 14%, white)", color: "var(--acc)" }}>
                <Icon name="pin" className="w-5 h-5" />
              </span>
              <div>
                <p className="font-bold text-[#15181e]">Endereço</p>
                <p className="text-[#5c6572] text-sm mt-0.5">{b.addr}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "color-mix(in srgb, var(--acc) 14%, white)", color: "var(--acc)" }}>
                <Icon name="clock" className="w-5 h-5" />
              </span>
              <div>
                <p className="font-bold text-[#15181e]">Horários</p>
                {b.hours.map((h) => <p key={h} className="text-[#5c6572] text-sm mt-0.5">{h}</p>)}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "color-mix(in srgb, var(--acc) 14%, white)", color: "var(--acc)" }}>
                <Icon name="phone" className="w-5 h-5" />
              </span>
              <div>
                <p className="font-bold text-[#15181e]">Telefone / WhatsApp</p>
                <p className="text-[#5c6572] text-sm mt-0.5">{b.phone}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden border border-black/10 h-72 lg:h-96 bg-[#eef0ea]">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(340px circle at 55% 45%, color-mix(in srgb, var(--acc) 18%, transparent), transparent 70%)` }} />
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300" fill="none" stroke="#15181e" strokeWidth="5">
            <path d="M-10 220 C 80 200, 140 120, 410 90" />
            <path d="M60 -10 C 90 90, 200 160, 220 310" />
            <path d="M-10 80 C 120 110, 260 40, 410 200" strokeWidth="3" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
            <span className="relative">
              <span className="absolute inset-0 rounded-full" style={{ background: "var(--acc)", animation: "kf-pulse-ring 1.8s ease-out infinite" }} />
              <Icon name="pin" className="w-10 h-10 relative" filled />
            </span>
            <span className="mt-2 bg-white shadow-lg rounded-full px-4 py-1.5 text-xs font-bold text-[#15181e]">Estamos aqui ✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqBlock({ b }: { b: Extract<Block, { kind: "faq" }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id={b.id} className="py-20 bg-[#fbfbf9]">
      <div className="max-w-3xl mx-auto px-5">
        <SectionHead kicker="DÚVIDAS" title={b.title} />
        <div className="space-y-3">
          {b.items.map((it, i) => (
            <div key={it.q} className="bg-white rounded-2xl border border-black/8 overflow-hidden transition-all hover:border-[var(--acc)]">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-bold text-[#15181e]">{it.q}</span>
                <span className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300" style={{ background: "color-mix(in srgb, var(--acc) 14%, white)", color: "var(--acc)", transform: open === i ? "rotate(45deg)" : undefined }}>
                  <Icon name="plus" className="w-4 h-4" />
                </span>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-400 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-[#5c6572] leading-relaxed">{it.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ b, demo }: { b: Extract<Block, { kind: "cta" }>; demo: Demo }) {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "var(--acc)" }}>
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl leading-tight">{b.title}</h2>
        <p className="mt-4 text-white/85 text-lg">{b.sub}</p>
        <a
          href={waLink(demo.wa)}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 bg-[#14171d] text-white font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-2xl transition-all"
        >
          <Icon name="whatsapp" className="w-5 h-5" /> {b.btn}
        </a>
      </div>
    </section>
  );
}

/* ---------- Footer do site demonstrativo ---------- */
export function DemoFooter({ demo }: { demo: Demo }) {
  return (
    <footer className="bg-[#14171d] py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-black" style={{ background: "var(--acc)" }}>
                {demo.brand[0]}
              </span>
              <span className="font-display font-bold text-white text-lg">{demo.brand}</span>
            </div>
            <p className="text-white/50 text-sm mt-3 max-w-xs">{demo.tagline} — atendimento rápido pelo WhatsApp, todos os dias.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {demo.nav.slice(1).map((l) => (
              <a key={l.id} href={`#${l.id}`} className="text-white/60 text-sm hover:text-[var(--acc)] transition-colors">{l.label}</a>
            ))}
          </div>
          <a href={waLink(demo.wa)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full hover:-translate-y-0.5 transition-all" style={{ background: "var(--acc)" }}>
            <Icon name="whatsapp" className="w-4 h-4" /> WhatsApp
          </a>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2026 {demo.brand} · Site demonstrativo com conteúdo fictício.</p>
          <a href="/" className="flex items-center gap-2 hover:text-[var(--acc)] transition-colors font-semibold">
            <Icon name="bolt" className="w-3.5 h-3.5" /> Site criado pela KartFusion
          </a>
        </div>
      </div>
    </footer>
  );
}

export function DemoBlockRenderer({ b, demo, onAdd }: { b: Block; demo: Demo; onAdd: () => void }) {
  switch (b.kind) {
    case "hero": return <HeroBlock b={b} demo={demo} />;
    case "stats": return <StatsBand b={b} />;
    case "services": return <ServicesGrid b={b} />;
    case "menu": return <MenuBlock b={b} />;
    case "products": return <ProductsGrid b={b} demo={demo} onAdd={onAdd} />;
    case "gallery": return <GalleryGrid b={b} />;
    case "team": return <TeamGrid b={b} />;
    case "plans": return <PlansGrid b={b} demo={demo} />;
    case "testimonials": return <TestimonialsBlock b={b} />;
    case "booking": return <BookingBlock b={b} demo={demo} />;
    case "location": return <LocationBlock b={b} />;
    case "faq": return <FaqBlock b={b} />;
    case "cta": return <CtaBand b={b} demo={demo} />;
  }
}
