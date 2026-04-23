import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Experiencia",
  description:
    "Carrera profesional, certificaciones, aprendizaje autodidacta, stack y pruebas verificables de trabajo efectivo.",
  alternates: { canonical: "/experiencia" },
};

type Role = {
  title: string;
  org: string;
  period: string;
  summary: string;
};

type StackSection = {
  category: string;
  description: string;
  rationale: string;
  items: string[];
};

type Recommendation = {
  name: string;
  href: string;
  tagline: string;
  why: string;
  perk?: string;
};

const roles: Role[] = [
  {
    title: "Fullstack developer & operador de plataforma",
    org: "alexendros.pro",
    period: "2024 — actualidad",
    summary:
      "Diseño y operación de plataforma SaaS multi-app: arquitectura, producto, cumplimiento y cobro.",
  },
];

const certs: { name: string; issuer: string; year: string }[] = [];

const autodidacta: string[] = [
  "Next.js 15 (App Router, Server Components, static export)",
  "Supabase (Auth, Postgres, RLS, Storage)",
  "Stripe (Billing, Checkout, webhooks)",
  "Prisma + Turborepo + Vercel",
  "TypeScript strict · Tailwind CSS v4 · shadcn/ui",
];

const proofs: { label: string; href: string }[] = [
  { label: "GitHub · alexendros", href: "https://github.com/alexendros" },
  { label: "Producto en producción · alexendros.pro", href: "https://alexendros.pro" },
];

const stack: StackSection[] = [
  {
    category: "Framework & Runtime",
    description:
      "La base sobre la que corre todo el producto: rendering, tipos y tiempo de ejecución.",
    rationale:
      "Next.js por App Router, static export y la mejor historia de rendimiento en Vercel. TypeScript en strict para que el compilador haga de primer revisor. React 19 por server components; Node 22 por LTS y soporte nativo de fetch y test runner.",
    items: ["Next.js 15", "TypeScript strict", "React 19", "Node.js 22"],
  },
  {
    category: "Estilos",
    description: "Cómo se pintan las interfaces sin arrastrar un design system inflado.",
    rationale:
      "Tailwind v4 con tokens oklch en CSS (dark-first) para coherencia visual sin hojas de estilo enormes. shadcn/ui inline sobre Radix: accesibilidad gratis, propiedad del código, cero caja negra.",
    items: ["Tailwind CSS v4", "shadcn/ui", "Radix UI"],
  },
  {
    category: "Base de datos & Auth",
    description:
      "Persistencia, autenticación y almacenamiento sin montar infraestructura manualmente.",
    rationale:
      "Supabase cubre Postgres, Auth y Storage con RLS real desde el minuto uno. Prisma aporta tipos end-to-end y migraciones verificables en CI — más fiable que escribir SQL a mano para CRUD de producto.",
    items: ["Supabase (PostgreSQL + Auth + Storage)", "Prisma 5"],
  },
  {
    category: "Pagos",
    description: "Cobros recurrentes, marketplace y facturación sin reinventar la rueda.",
    rationale:
      "Stripe porque Subscriptions + Connect Express cubre SaaS y marketplace con webhooks bien documentados. Pasar cumplimiento PCI delegado es una decisión de negocio, no de ego.",
    items: ["Stripe (Subscriptions + Connect Express)"],
  },
  {
    category: "Email",
    description: "Transaccional y templates que no parezcan de 2004.",
    rationale:
      "React Email para componer con JSX y tener previews locales. Resend para entrega: DX limpia, DKIM/SPF sencillos y buena reputación sin pelear con SMTPs legacy.",
    items: ["React Email", "Resend"],
  },
  {
    category: "Deploy & Infraestructura",
    description: "Dónde vive el código y cómo llega a producción.",
    rationale:
      "Vercel para la capa de front/edge (region mad1, cerca del usuario). Turborepo para orquestar monorepo cuando hace falta. GitHub Actions para CI por estándar y por ecosistema de actions.",
    items: ["Vercel", "Turborepo", "GitHub Actions"],
  },
  {
    category: "Automatización",
    description: "Pegamento entre servicios sin escribir un backend entero.",
    rationale:
      "n8n self-hosted: control del dato (no pasa por SaaS terceros), lógica versionable como workflows JSON, económico a escala.",
    items: ["n8n (self-hosted)"],
  },
  {
    category: "Monitoreo",
    description: "Saber qué pasa antes de que lo pregunte un usuario.",
    rationale:
      "Sentry para errores con stack trace fiable. PostHog (región EU) para producto, cumpliendo RGPD sin exportar datos fuera. Better Uptime para pings externos y status page pública.",
    items: ["Sentry", "PostHog (EU)", "Better Uptime"],
  },
  {
    category: "Testing",
    description: "Red de seguridad suficiente para moverse rápido sin romper producción.",
    rationale:
      "Vitest para unitarios e integración por velocidad y compatibilidad con el ecosistema Vite. Playwright para e2e porque soporta todos los motores y tiene mejor DX que Cypress para flujos complejos.",
    items: ["Vitest", "Playwright"],
  },
  {
    category: "Editor & Herramientas",
    description: "El día a día delante de la pantalla.",
    rationale:
      "VS Code por extensiones y Remote SSH. Claude Code como par de desarrollo — genera, refactoriza y documenta sin sacarme del terminal ni del repo.",
    items: ["VS Code", "Claude Code"],
  },
];

const recommendations: Recommendation[] = [
  {
    name: "Proton",
    href: "https://pr.tn/ref/J9V01ZFX",
    tagline: "Correo, VPN, Drive y Pass cifrados end-to-end, con sede en Suiza.",
    why: "Lo uso a diario para separar identidades y mantener el correo fuera del circuito publicitario. Alternativa real a Google/Microsoft con cumplimiento RGPD nativo y código abierto en los clientes.",
    perk: "Con este enlace obtienes un mes gratis en planes de pago.",
  },
  {
    name: "Hostinger",
    href: "https://www.hostinger.com/es?REFERRALCODE=G9PALEJANGEG",
    tagline: "Hosting, dominios y VPS económicos con panel propio y soporte 24/7.",
    why: "Lo recomiendo para proyectos que necesitan un VPS barato, un WordPress sin fricción o registrar un dominio rápido. Relación precio/rendimiento difícil de igualar para empezar.",
    perk: "Con este enlace accedes a un 20% de descuento adicional en la primera contratación.",
  },
];

export default function ExperienciaPage() {
  return (
    <div className="site-shell max-w-3xl section space-y-12">
      <header className="space-y-3">
        <h1 className="headline">Experiencia</h1>
        <p className="prose-lead">
          Carrera profesional, certificaciones, aprendizaje autodidacta, stack de trabajo y pruebas
          verificables. Todo en una pieza para que se lea de arriba abajo.
        </p>
      </header>

      <section className="space-y-5">
        <h2 className="title">Carrera profesional</h2>
        <ul className="space-y-6">
          {roles.map((r) => (
            <li key={r.title + r.org} className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-foreground font-medium">{r.title}</h3>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                  {r.period}
                </span>
              </div>
              <p className="text-sm text-primary">{r.org}</p>
              <p className="text-muted-foreground leading-relaxed">{r.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      <section className="space-y-5">
        <h2 className="title">Certificaciones</h2>
        {certs.length === 0 ? (
          <p className="text-muted-foreground">
            Sin certificaciones activas listadas. Se añadirán cuando aporten señal real, no relleno.
          </p>
        ) : (
          <ul className="space-y-3">
            {certs.map((c) => (
              <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-foreground">{c.name}</span>
                <span className="text-sm text-muted-foreground">
                  {c.issuer} · {c.year}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Separator />

      <section className="space-y-5">
        <h2 className="title">Aprendizaje autodidacta</h2>
        <div className="flex flex-wrap gap-2">
          {autodidacta.map((l) => (
            <Badge key={l} variant="outline" className="text-xs">
              {l}
            </Badge>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-8">
        <div className="space-y-3">
          <h2 className="title">Stack de trabajo</h2>
          <p className="text-muted-foreground leading-relaxed">
            Qué uso, qué hace cada capa y por qué la elegí. Nada de &ldquo;lo mejor del
            mercado&rdquo;: lo que me ha funcionado en proyectos reales.
          </p>
        </div>
        <div className="space-y-8">
          {stack.map((section, index) => (
            <div key={section.category}>
              {index > 0 && <Separator className="mb-8" />}
              <div className="space-y-3">
                <h3 className="text-foreground font-medium">{section.category}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Por qué: </span>
                  {section.rationale}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {section.items.map((item) => (
                    <span key={item} className="tool-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-5">
        <h2 className="title">Pruebas de trabajo</h2>
        <ul className="space-y-2">
          {proofs.map((p) => (
            <li key={p.href}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
              >
                {p.label} →
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      <section className="space-y-6">
        <div className="space-y-3">
          <h2 id="recomendaciones" className="title scroll-mt-24">
            Recomendaciones
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Servicios que uso o recomiendo y que además tienen programa de referidos. Los enlaces
            marcados llevan mi código: si contratas, la compañía me acredita una comisión sin coste
            extra para ti. Solo aparecen aquí si los usaría igualmente sin el programa.
          </p>
        </div>
        <div className="space-y-6">
          {recommendations.map((rec) => (
            <div key={rec.name} className="space-y-2">
              <h3 className="text-lg font-medium">
                <a
                  href={rec.href}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="underline underline-offset-4 decoration-primary/60"
                >
                  {rec.name}
                </a>
                <span className="text-muted-foreground text-xs font-normal ml-2">
                  (enlace de afiliado)
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">{rec.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Por qué: </span>
                {rec.why}
              </p>
              {rec.perk ? (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Ventaja con el enlace: </span>
                  {rec.perk}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
