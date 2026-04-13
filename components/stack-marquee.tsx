"use client";

import {
  siNextdotjs,
  siTypescript,
  siSupabase,
  siPrisma,
  siStripe,
  siTailwindcss,
  siTurborepo,
  siVercel,
  siResend,
  siN8n,
  type SimpleIcon,
} from "simple-icons";

type StackItem = {
  icon: SimpleIcon;
  label: string;
  color: string;
  href: string;
};

const items: StackItem[] = [
  { icon: siNextdotjs, label: "Next.js", color: "#ffffff", href: "https://nextjs.org" },
  {
    icon: siTypescript,
    label: "TypeScript",
    color: `#${siTypescript.hex}`,
    href: "https://www.typescriptlang.org",
  },
  {
    icon: siSupabase,
    label: "Supabase",
    color: `#${siSupabase.hex}`,
    href: "https://supabase.com",
  },
  { icon: siPrisma, label: "Prisma", color: "#8b9dff", href: "https://www.prisma.io" },
  { icon: siStripe, label: "Stripe", color: `#${siStripe.hex}`, href: "https://stripe.com" },
  {
    icon: siTailwindcss,
    label: "Tailwind",
    color: `#${siTailwindcss.hex}`,
    href: "https://tailwindcss.com",
  },
  {
    icon: siTurborepo,
    label: "Turborepo",
    color: `#${siTurborepo.hex}`,
    href: "https://turborepo.com",
  },
  { icon: siVercel, label: "Vercel", color: "#ffffff", href: "https://vercel.com" },
  { icon: siResend, label: "Resend", color: "#ffffff", href: "https://resend.com" },
  { icon: siN8n, label: "n8n", color: `#${siN8n.hex}`, href: "https://n8n.io" },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-14 px-7" aria-hidden={ariaHidden || undefined}>
      {items.map(({ icon, label, color, href }) => {
        const content = (
          <>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full opacity-40 blur-2xl transition-opacity duration-300 group-hover/logo:opacity-80"
              style={{ background: `radial-gradient(circle, ${color} 0%, transparent 65%)` }}
            />
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="relative h-11 w-11 transition-transform duration-300 group-hover/logo:scale-110"
              style={{ filter: "drop-shadow(0 0 10px currentColor)" }}
              aria-label={icon.title}
            >
              <path d={icon.path} fill="currentColor" />
            </svg>
          </>
        );

        const linkProps = ariaHidden ? { tabIndex: -1, "aria-hidden": true as const } : {};

        return (
          <a
            key={label + (ariaHidden ? "-dup" : "")}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/logo flex shrink-0 flex-col items-center gap-2 rounded-md px-2 py-1 opacity-80 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            style={{ color }}
            title={`${icon.title} — ${href}`}
            {...linkProps}
          >
            <span className="relative flex h-11 w-11 items-center justify-center">{content}</span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground transition-colors group-hover/logo:text-foreground">
              {label}
            </span>
          </a>
        );
      })}
    </div>
  );
}

export function StackMarquee() {
  return (
    <div className="marquee-viewport py-8">
      <div className="marquee-track items-center">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  );
}
