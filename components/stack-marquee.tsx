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
};

const items: StackItem[] = [
  { icon: siNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: siTypescript, label: "TypeScript", color: `#${siTypescript.hex}` },
  { icon: siSupabase, label: "Supabase", color: `#${siSupabase.hex}` },
  { icon: siPrisma, label: "Prisma", color: "#8b9dff" },
  { icon: siStripe, label: "Stripe", color: `#${siStripe.hex}` },
  { icon: siTailwindcss, label: "Tailwind", color: `#${siTailwindcss.hex}` },
  { icon: siTurborepo, label: "Turborepo", color: `#${siTurborepo.hex}` },
  { icon: siVercel, label: "Vercel", color: "#ffffff" },
  { icon: siResend, label: "Resend", color: "#ffffff" },
  { icon: siN8n, label: "n8n", color: `#${siN8n.hex}` },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 px-6"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map(({ icon, label, color }) => (
        <div
          key={label + (ariaHidden ? "-dup" : "")}
          className="flex shrink-0 flex-col items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
          style={{ color }}
          title={icon.title}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="h-10 w-10"
            style={{ filter: "drop-shadow(0 0 14px currentColor)" }}
            aria-label={icon.title}
          >
            <path d={icon.path} fill="currentColor" />
          </svg>
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function StackMarquee() {
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  );
}
