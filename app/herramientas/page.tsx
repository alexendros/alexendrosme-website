import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Herramientas",
  description: "Stack, herramientas y criterios de elección que uso a diario.",
  alternates: { canonical: "/herramientas" },
};

type Section = {
  category: string;
  description: string;
  rationale: string;
  items: string[];
};

const stack: Section[] = [
  {
    category: "Framework & Runtime",
    description: "La base sobre la que corre todo el producto: rendering, tipos y tiempo de ejecución.",
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
    description: "Persistencia, autenticación y almacenamiento sin montar infraestructura manualmente.",
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

export default function HerramientasPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-foreground">Herramientas</h1>
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
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {section.category}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{section.description}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Por qué: </span>
                {section.rationale}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {section.items.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
