import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Paneles de proyectos: portales y aplicaciones en la red, iniciativas, conceptos y sociedades.",
  alternates: { canonical: "/proyectos" },
};

type Category = "portal" | "aplicacion" | "iniciativa" | "concepto" | "sociedad";

type Project = {
  title: string;
  description: string;
  category: Category;
  status: string;
  statusVariant: "default" | "secondary";
  year: string;
  stack?: string[];
  url?: string;
};

const categories: { key: Category; label: string; blurb: string }[] = [
  {
    key: "portal",
    label: "Portales",
    blurb: "Webs públicas y landings operativas en la red.",
  },
  {
    key: "aplicacion",
    label: "Aplicaciones",
    blurb: "Productos SaaS, herramientas y dashboards en producción o beta.",
  },
  {
    key: "iniciativa",
    label: "Iniciativas",
    blurb: "Proyectos en marcha con objetivo concreto y plazo.",
  },
  {
    key: "concepto",
    label: "Conceptos",
    blurb: "Ideas articuladas y prototipos que todavía no son producto.",
  },
  {
    key: "sociedad",
    label: "Sociedades",
    blurb: "Entidades jurídicas o colaboraciones formalizadas.",
  },
];

const projects: Project[] = [
  {
    title: "KitOS",
    description:
      "Plataforma SaaS de kits digitales verticalizados. Cada Kit es un producto independiente dirigido a un sector específico, construido sobre infraestructura compartida: auth, pagos, email, analytics.",
    category: "aplicacion",
    status: "En producción",
    statusVariant: "default",
    year: "2024",
    stack: ["Next.js", "Supabase", "Prisma", "Stripe", "Turborepo", "Vercel"],
    url: "https://alexendros.pro",
  },
  {
    title: "alexendros.me",
    description:
      "Portfolio y marca personal. Sitio estático con Next.js, Tailwind v4, tokens oklch y componentes shadcn/ui.",
    category: "portal",
    status: "En desarrollo",
    statusVariant: "secondary",
    year: "2025",
    stack: ["Next.js", "Tailwind v4", "Vercel"],
    url: "https://alexendros.me",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-border h-full">
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-foreground text-lg">{project.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{project.year}</p>
          </div>
          <Badge variant={project.statusVariant} className="shrink-0">
            {project.status}
          </Badge>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      {(project.stack || project.url) && (
        <CardContent className="space-y-4">
          {project.stack && (
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
            >
              {project.url.replace(/^https?:\/\//, "")} →
            </a>
          )}
        </CardContent>
      )}
    </Card>
  );
}

export default function ProyectosPage() {
  return (
    <div className="site-shell max-w-3xl section space-y-12">
      <header className="space-y-3">
        <h1 className="headline">Proyectos</h1>
        <p className="prose-lead">
          Paneles agrupados por naturaleza: portales y aplicaciones en la red, iniciativas,
          conceptos y sociedades.
        </p>
      </header>

      {categories.map((cat) => {
        const panel = projects.filter((p) => p.category === cat.key);
        if (panel.length === 0) return null;
        return (
          <section key={cat.key} className="space-y-5">
            <div className="space-y-1">
              <h2 className="title">{cat.label}</h2>
              <p className="text-sm text-muted-foreground">{cat.blurb}</p>
            </div>
            <div className="space-y-6">
              {panel.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="space-y-4">
        <h2 className="title">En roadmap</h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong>StageKit</strong> (producción musical electrónica), <strong>LexKit</strong>{" "}
          (despachos jurídicos) y <strong>GestKit</strong> (gestorías) caminando en el roadmap de
          KitOS. Público cuando haya algo operativo, no antes.
        </p>
      </section>
    </div>
  );
}
