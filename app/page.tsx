import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { StackMarquee } from "@/components/stack-marquee";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inicio",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Hero — visible without scroll, answers: quien, que, para quien */}
      <section className="py-10 sm:py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-[clamp(1.75rem,6vw+0.5rem,3rem)] md:text-5xl font-bold leading-tight tracking-tight [text-shadow:0_0_40px_color-mix(in_oklch,var(--primary)_25%,transparent)]">
            Software que hace su trabajo — y cumple la ley sin drama.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Fullstack developer. Fundador de{" "}
            <a
              href="https://alexendros.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
            >
              KitOS
            </a>
            . Valencia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects">Ver proyectos</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contacto</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl px-4 sm:px-6" />

      {/* About brief */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Dev fullstack y fundador de{" "}
              <strong className="text-foreground">KitOS</strong>, una plataforma SaaS de kits
              digitales pensados sector a sector. Lo construyo con Next.js, Supabase y Stripe,
              apretando donde se nota: rendimiento real (LCP &lt; 2s), conversión y cumplimiento
              legal (RGPD/LOPDGDD) sin letra pequeña.
            </p>
            <p>
              Llegué al software por una ruta poco ortodoxa —la contaré con calma en{" "}
              <Link
                href="/about"
                className="text-primary underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
              >
                Sobre mí
              </Link>
              —. Lo que me traje del camino: obsesión por los detalles que importan, criterio de
              negocio desde el primer commit y cero tolerancia al humo técnico.
            </p>
            <p>
              Ahora mismo: <strong className="text-foreground">KitOS</strong> en producción en{" "}
              <a
                href="https://alexendros.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
              >
                alexendros.pro
              </a>
              . StageKit (música electrónica), LexKit (despachos) y GestKit (gestorías) caminando en
              el roadmap.
            </p>
          </div>
          <div className="mt-6">
            <Button variant="link" asChild className="px-0">
              <Link href="/about">Leer más →</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl px-4 sm:px-6" />

      {/* Projects preview */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6">Proyectos</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">KitOS</CardTitle>
                  <Badge className="shrink-0">En producción</Badge>
                </div>
                <CardDescription>
                  Plataforma SaaS de kits digitales verticalizados. Next.js + Supabase + Stripe +
                  Turborepo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://alexendros.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  alexendros.pro →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">alexendros.me</CardTitle>
                  <Badge variant="secondary" className="shrink-0">
                    Rebuild activo
                  </Badge>
                </div>
                <CardDescription>
                  Portfolio y marca personal. Next.js static + Tailwind v4 + oklch tokens.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-muted-foreground">alexendros.me</span>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Button variant="link" asChild className="px-0">
              <Link href="/projects">Ver todos los proyectos →</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl px-4 sm:px-6" />

      {/* Stack */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-2">Stack</h2>
            <p className="text-muted-foreground mb-10 md:mb-14">
              Las piezas con las que construyo. Ver el detalle y el porqué en{" "}
              <Link
                href="/herramientas"
                className="text-primary underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
              >
                Herramientas
              </Link>
              .
            </p>
          </div>
          <StackMarquee />
        </div>
      </section>
    </>
  );
}
