import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export const WA_NUMBER = "5543996317934";

export const WA_SITE_MSG =
  "Olá, vim pelo site da KartFusion e gostaria de criar um site para minha empresa.";

export const WA_MODEL_MSG =
  "Olá, vi o modelo da KartFusion e gostaria de criar um site parecido para minha empresa.";

export function waLink(msg: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onChange = () => setReduced(mq.matches);

    mq.addEventListener("change", onChange);

    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/* ---------- Scroll reveal wrapper ---------- */

export function Reveal({
  children,
  className = "",
  delay = 0,
  dir = "up",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "left" | "right" | "scale";
  as?: "div" | "section" | "article" | "li" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("on");
            io.unobserve(el);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  const dirClass =
    dir === "left"
      ? "rv rv-l"
      : dir === "right"
      ? "rv rv-r"
      : dir === "scale"
      ? "rv rv-s"
      : "rv";

  return (
    <Tag
      ref={ref as never}
      className={`${dirClass} ${className}`}
      style={{ "--rvd": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
 
/* ---------- Animated counter ---------- */

export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
  className = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    let raf = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        io.disconnect();

        if (reduced) {
          setVal(to);
          return;
        }

        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);

          const eased = 1 - Math.pow(1 - t, 3);

          setVal(to * eased);

          if (t < 1) {
            raf = requestAnimationFrame(tick);
          }
        };

        raf = requestAnimationFrame(tick);
      },
      {
        threshold: 0.4,
      }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration, reduced]);

  const display =
    decimals > 0
      ? val.toFixed(decimals).replace(".", ",")
      : Math.round(val).toLocaleString("pt-BR");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}


/* ---------- Scramble / decode text ---------- */

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01";

export function Scramble({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [out, setOut] = useState(text);

  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setOut(text);
      return;
    }

    let frame = 0;
    let raf = 0;

    const total = 34;

    const run = () => {
      frame++;

      const progress = frame / total;

      const settled = Math.floor(text.length * progress);

      let s = "";

      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          s += " ";
        } else if (i < settled) {
          s += text[i];
        } else {
          s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setOut(s);

      if (frame < total) {
        raf = requestAnimationFrame(run);
      } else {
        setOut(text);
      }
    };

    const t = window.setTimeout(() => {
      raf = requestAnimationFrame(run);
    }, delay);

    return () => {
      window.clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [text, delay, reduced]);

  return <span className={className}>{out}</span>;
}

/* ---------- Tilt-on-hover card ---------- */

export function useTilt(maxDeg = 7) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;

    if (!el || reduced) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();

      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;

      el.style.transform =
        `perspective(900px) rotateX(${-y * maxDeg}deg) rotateY(${x * maxDeg}deg)`;
    };

    const onLeave = () => {
      el.style.transform =
        "perspective(900px) rotateX(0) rotateY(0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [maxDeg, reduced]);

  return ref;
}