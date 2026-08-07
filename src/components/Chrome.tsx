import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Icon, LogoMark } from "./Icons";
import { waLink, WA_SITE_MSG } from "../lib/fx";

function useScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      setP(total > 0 ? window.scrollY / total : 0);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return p;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/#servicos", label: "Serviços" },
    { to: "/modelos", label: "Modelos" },
    { to: "/#portfolio", label: "Portfólio" },
    { to: "/#como-funciona", label: "Como funciona" },
    { to: "/#depoimentos", label: "Depoimentos" },
  ];

  const navigate = useNavigate();

  const go = (hash: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/", {
        state: {
          anchor: hash.replace("#", ""),
        },
      });
    } else {
      document
        .querySelector(hash)
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      <div
        className="absolute top-0 left-0 h-[2px] bg-neon shadow-[0_0_12px_rgba(0,255,136,0.8)] transition-[width] duration-150"
        style={{
          width: `${progress * 100}%`,
        }}
      />

      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <LogoMark className="w-9 h-9" />

          <span className="font-display font-black text-xl tracking-tight group-hover:text-neon transition-colors">
            KartFusion
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
            l.to.startsWith("/#") ? (
              <button
                key={l.to}
                onClick={() => go(l.to.slice(1))}
                className="px-4 py-2 text-sm font-semibold text-fog hover:text-neon transition-colors relative group"
              >
                {l.label}

                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-neon scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </button>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold transition-colors relative group ${
                    isActive
                      ? "text-neon"
                      : "text-fog hover:text-neon"
                  }`
                }
              >
                {l.label}

                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-neon scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </NavLink>
            )
          )}
        </div>

        <div className="flex items-center gap-3">

          <a
            href={waLink(WA_SITE_MSG)}
            target="_blank"
            rel="noreferrer"
            className="btn-neon hidden sm:inline-flex items-center gap-2 bg-neon text-ink-950 font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-[0_0_30px_rgba(0,255,136,0.45)] hover:-translate-y-0.5 transition-all"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            Solicitar site
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-paper hover:text-neon transition-colors"
            aria-label="Abrir menu"
          >
            <Icon
              name={open ? "close" : "menu"}
              className="w-6 h-6"
            />
          </button>

        </div>

      </nav>


      {/* menu mobile */}

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        } glass`}
      >

        <div className="px-6 py-5 flex flex-col gap-1">

          {links.map((l) =>
            l.to.startsWith("/#") ? (
              <button
                key={l.to}
                onClick={() => go(l.to.slice(1))}
                className="text-left px-3 py-3 rounded-lg text-fog hover:text-neon hover:bg-white/5 transition-all font-semibold"
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-3 rounded-lg text-fog hover:text-neon hover:bg-white/5 transition-all font-semibold"
              >
                {l.label}
              </Link>
            )
          )}


          <a
            href={waLink(WA_SITE_MSG)}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-neon text-ink-950 font-bold px-5 py-3 rounded-full"
          >
            <Icon name="whatsapp" className="w-4 h-4" />

            Solicitar meu site
          </a>

        </div>

      </div>

    </header>
  );
}



export function Footer() {

  return (

    <footer className="border-t border-white/10 bg-ink-950">

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">


          <div>

            <div className="flex items-center gap-3 mb-5">

              <LogoMark className="w-9 h-9" />

              <span className="font-display font-black text-xl">
                KartFusion
              </span>

            </div>


            <p className="text-fog text-sm leading-relaxed">

              Agência especializada em sites profissionais,
              landing pages e lojas virtuais que transformam
              visitantes em clientes.

            </p>


            <div className="flex gap-3 mt-6">


              <a
                href="https://www.instagram.com/kart.fusion/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-neon hover:text-neon transition-all"
              >
                <Icon name="instagram" className="w-5 h-5" />
              </a>


              <a
                href="https://www.tiktok.com/@kart.fusion"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-neon hover:text-neon transition-all"
              >
                <Icon name="tiktok" className="w-5 h-5" />
              </a>


              <a
                href="mailto:contato.kartfusion@gmail.com"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-neon hover:text-neon transition-all"
              >
                <Icon name="mail" className="w-5 h-5" />
              </a>


            </div>

          </div>

          <div>

            <h3 className="font-display font-bold mb-5">
              NAVEGAÇÃO
            </h3>

            <div className="flex flex-col gap-3 text-sm text-fog">

              <Link
                to="/"
                className="hover:text-neon transition-colors"
              >
                Início
              </Link>

              <Link
                to="/modelos"
                className="hover:text-neon transition-colors"
              >
                Biblioteca de modelos
              </Link>

              <span className="hover:text-neon transition-colors cursor-pointer">
                Portfólio
              </span>

              <span className="hover:text-neon transition-colors cursor-pointer">
                Depoimentos
              </span>

            </div>

          </div>



          <div>

            <h3 className="font-display font-bold mb-5">
              SERVIÇOS
            </h3>

            <div className="flex flex-col gap-3 text-sm text-fog">

              <span>
                Site institucional
              </span>

              <span>
                Loja virtual
              </span>

              <span>
                Landing pages
              </span>

              <span>
                Projetos sob medida
              </span>

            </div>

          </div>



          <div>

            <h3 className="font-display font-bold mb-5">
              CONTATO
            </h3>


            <div className="flex flex-col gap-3 text-sm text-fog">


              <a
                href="https://wa.me/5543996317934"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neon transition-colors"
              >
                📱 (43) 99631-7934
              </a>


              <a
                href="mailto:contato.kartfusion@gmail.com"
                className="hover:text-neon transition-colors"
              >
                ✉️ contato.kartfusion@gmail.com
              </a>


              <a
                href="https://www.instagram.com/kart.fusion/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neon transition-colors"
              >
                📸 Instagram
              </a>


              <a
                href="https://www.tiktok.com/@kart.fusion"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neon transition-colors"
              >
                🎵 TikTok
              </a>


              <span>
                🕒 Seg – Sáb · 08h às 21h
              </span>


              <span>
                🚀 Entrega média em 7 dias
              </span>


            </div>

          </div>


        </div>

      </div>


      <div className="border-t border-white/10 py-6">

        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-fog">

          <span>
            © 2026 KartFusion · Todos os direitos reservados.
          </span>


          <span>
            feito com ▲ performance e ◆ design
          </span>

        </div>

      </div>


    </footer>

  );

}




export function WhatsAppFloat() {

  const [show, setShow] = useState(false);


  useEffect(() => {

    const t = setTimeout(() => setShow(true), 900);

    return () => clearTimeout(t);

  }, []);


  return (

    <a
      href={waLink(WA_SITE_MSG)}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-[70] group flex items-center gap-3 transition-all duration-700 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0"
      }`}
    >

      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />


      <span className="relative flex items-center gap-3 bg-[#25D366] text-white font-bold px-5 py-3 rounded-full shadow-lg">

        <Icon
          name="whatsapp"
          className="w-5 h-5"
        />

        Fale com um especialista

      </span>


    </a>

  );

}




export default function Layout() {

  const location = useLocation();


  useEffect(() => {

    if (!location.hash) {

      window.scrollTo({
        top: 0,
        behavior: "instant" as ScrollBehavior,
      });

    }

  }, [location.pathname, location.hash]);


  const isDemo =
    location.pathname.startsWith("/modelo/");


  return (

    <>
      {!isDemo && <Navbar />}

      <main>
        <Outlet />
      </main>

      {!isDemo && <Footer />}

      {!isDemo && <WhatsAppFloat />}

    </>

  );

}