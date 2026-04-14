import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Portfolio de proyectos: KitOS, alexendros.me y roadmap.",
};

type ProjectStatus = "produccion" | "desarrollo";

type Project = {
  title: string;
  description: string;
  stack: string[];
  status: string;
  statusVariant: "default" | "secondary";
  url: string;
  year: string;
  section: ProjectStatus;
};

const projects: Project[] = [
  {
    title: "KitOS",
    description:
      "Plataforma SaaS de kits digitales verticalizados. Cada Kit es un producto independiente dirigido a un sector específico, construido sobre infraestructura compartida: auth, pagos, email, analytics.",
    stack: ["Next.js", "Supabase", "Prisma", "Stripe", "Turborepo", "Vercel"],
    status: "En producción",
    statusVariant: "default",
    url: "https://alexendros.pro",
    year: "2024",
    section: "produccion",
  },
  {
    title: "alexendros.me",
    description:
      "Portfolio y marca personal. Sitio estático con Next.js, Tailwind v4, tokens oklch y componentes shadcn/ui.",
    stack: ["Next.js", "Tailwind v4", "Vercel"],
    status: "En desarrollo",
    statusVariant: "secondary",
    url: "https://alexendros.me",
    year: "2025",
    section: "desarrollo",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-border">
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-foreground text-xl">{project.title}</CardTitle>
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
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Ver proyecto →
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function ProjectsPage() {
  const produccion = projects.filter((p) => p.section === "produccion");
  const desarrollo = projects.filter((p) => p.section === "desarrollo");

  return (
    <div className="site-shell max-w-3xl section space-y-10">
      <h1 className="headline">Proyectos</h1>
      <p className="prose-lead">
        Portfolio activo agrupado por estado. Stack específico, hitos recientes y enlaces a
        producción cuando los hay.
      </p>

      <section className="space-y-6">
        <h2 className="title">En producción</h2>
        <div className="space-y-6">
          {produccion.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="title">En desarrollo</h2>
        <div className="space-y-6">
          {desarrollo.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="title">En roadmap</h2>
        <p className="text-muted-foreground">
          <strong>StageKit</strong> (producción musical electrónica), <strong>LexKit</strong>{" "}
          (despachos jurídicos) y <strong>GestKit</strong> (gestorías) caminando en el roadmap de
          KitOS. Público cuando haya algo operativo, no antes.
        </p>
      </section>
    </div>
  );
}
