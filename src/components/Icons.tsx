import type { ReactNode } from "react";

const S: Record<string, ReactNode> = {
  rocket: (
    <>
      <path d="M12 3c4.5 2 6.5 6 6.5 10.5l3 3-4.5 1-2.5 3.5-3-3.5C7 17.5 5 13 5 8.5 7 7.5 9.5 5.5 12 3z" />
      <circle cx="12.5" cy="10.5" r="2" />
      <path d="M7.5 17.5 4 21" />
    </>
  ),

  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.6 0 2-1.1 1.5-2s-.2-2 1.4-2H17a4 4 0 0 0 4-4.2C20.6 9 16.8 3 12 3z" />
      <circle cx="8" cy="9" r="1.1" />
      <circle cx="13" cy="7" r="1.1" />
      <circle cx="16.5" cy="10.5" r="1.1" />
      <circle cx="8.5" cy="14" r="1.1" />
    </>
  ),

  device: (
    <>
      <rect x="2.5" y="4" width="15" height="11" rx="1.5" />
      <path d="M7 19h6M10 15v4" />
      <rect x="16.5" y="9" width="5.5" height="11" rx="1.5" />
    </>
  ),

  bolt: <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />,

  chart: (
    <>
      <path d="M3.5 4v16h17" />
      <path d="M8 16v-5M12.5 16V7.5M17 16v-3.5" />
    </>
  ),

  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.3 3.8 8.5S14.6 18 12 20.5C9.4 18 8.2 15.2 8.2 12S9.4 6 12 3.5z" />
    </>
  ),

  cart: (
    <>
      <path d="M3.5 4.5H6l2.4 11h9.4l2.2-8H7" />
      <circle cx="9.5" cy="19.5" r="1.4" />
      <circle cx="16.8" cy="19.5" r="1.4" />
    </>
  ),

  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </>
  ),

  check: <path d="M4.5 12.5l5 5L19.5 7" />,

  arrow: <path d="M4 12h15M13.5 6 19.5 12l-6 6" />,

  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4.5 4.5" />
    </>
  ),

  code: <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />,

  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5z" />
      <path d="m3.5 13.5 8.5 4.7 8.5-4.7M3.5 17.5 12 22l8.5-4.5" />
    </>
  ),

  phone: (
    <path d="M5 3h4l1.5 5-2.5 1.5a12 12 0 0 0 6.5 6.5L16 13.5 21 15v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3z" />
  ),

  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.5l3.5 2" />
    </>
  ),

  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),

  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,

  close: <path d="m6 6 12 12M18 6 6 18" />,

  plus: <path d="M12 5v14M5 12h14" />,

  minus: <path d="M5 12h14" />,

  pin: (
    <>
      <path d="M12 21.5s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),

  spark: (
    <path d="M12 3l2.2 6 6 2.2-6 2.2L12 19.5l-2.2-6.1-6-2.2 6-2.2L12 3z" />
  ),
};


const F: Record<string, ReactNode> = {

  whatsapp: (
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.2-3.2-.7-2.6-1.1-4.2-3.7-4.4-3.9-.1-.2-1-1.4-1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4-.1.6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.7.9-.5 1.2.6 1 1.6 2.2 2.9 2.9.4.2.6.2.8-.1l.7-.9c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.2.1.8 0 1.2z" />
  ),

  star: (
    <path d="m12 2.5 2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5z" />
  ),

  quote: (
    <path d="M5 5h6v6H8c0 3.3-.8 5.2-2.6 6.8L4 16.3c1.2-1.1 1.7-2.3 1.8-4.3H5V5zm8.5 0h6v6h-3c0 3.3-.8 5.2-2.6 6.8l-1.4-1.5c1.2-1.1 1.7-2.3 1.8-4.3h-1.3V5z" />
  ),

  tiktok: (
    <path d="M16 3c.3 2.1 1.5 3.5 3.5 4v3c-1.6 0-3-.5-4.2-1.3v6.8a5.5 5.5 0 1 1-5.5-5.5c.4 0 .8 0 1.2.1v3a2.5 2.5 0 1 0 1.3 2.2V3H16z" />
  ),

  mail: (
    <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2 8 5 8-5" />
  ),
};


export function Icon({
  name,
  className = "w-6 h-6",
  filled = false,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {

  if (F[name]) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
      >
        {F[name]}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {S[name] ?? S.spark}
    </svg>
  );
}
 
/* Logotipo KartFusion */
export function LogoMark({
  className = "w-9 h-9",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10"
        fill="#0b1411"
        stroke="#00ff88"
        strokeWidth="1.6"
      />

      <path
        d="M12 9v22M12 20l13-11M12 20l14 11"
        stroke="#00ff88"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <circle
        cx="30.5"
        cy="9.5"
        r="2"
        fill="#00ff88"
      />
    </svg>
  );
}