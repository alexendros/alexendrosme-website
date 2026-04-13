import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Fullstack developer. Fundador de KitOS. Valencia.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 space-y-12">
      <h1 className="text-3xl font-bold text-foreground">Sobre mí</h1>

      {/* Acto I */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Acto I — Origen</h2>
        <p className="text-muted-foreground leading-relaxed">
          Itinerario no lineal: años de oficio fuera del software antes de meterme hasta el cuello.
          Lo cuento con calma en una versión ampliada de esta página — llegará pronto con los
          detalles que realmente explican cómo trabajo hoy.
        </p>
      </section>

      <Separator />

      {/* Acto II */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Acto II — Transición</h2>
        <p className="text-muted-foreground leading-relaxed">
          Salto al software a tiempo completo. Formación autodidacta intensiva en stack moderno:
          Next.js, Supabase, Stripe, Docker, n8n. Primeros proyectos freelance, apertura del
          repositorio público y decisión firme de trabajar en abierto.
        </p>
      </section>

      <Separator />

      {/* Acto III */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Acto III — Actualidad</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fundador en activo de KitOS (
          <a
            href="https://alexendros.pro"
            className="text-primary underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            alexendros.pro
          </a>
          ). Plataforma multi-Kit en producción, build in public documentado y disponibilidad para
          consultoría en proyectos donde la mezcla producto + ejecución técnica marca la diferencia.
        </p>
      </section>

      <Separator />

      {/* UVP */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">Propuesta de valor</h2>
        <blockquote className="border-l-2 border-primary pl-4">
          <p className="text-foreground font-medium leading-relaxed">
            &ldquo;Construyo, opero y cobro en mi propio SaaS. Lo que recomiendo lo he probado
            antes en producción.&rdquo;
          </p>
        </blockquote>

        {/* Diferenciación table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-4 font-medium text-foreground">Dimensión</th>
                <th className="text-center py-3 px-4 font-medium text-foreground">Alexendros</th>
                <th className="text-center py-3 pl-4 font-medium text-muted-foreground">
                  Dev genérico
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 pr-4 text-muted-foreground">Código fullstack enterprise</td>
                <td className="py-3 px-4 text-center text-primary">✓</td>
                <td className="py-3 pl-4 text-center text-muted-foreground">Variable</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-muted-foreground">
                  Cumplimiento legal (RGPD/LOPDGDD) bien integrado
                </td>
                <td className="py-3 px-4 text-center text-primary">✓</td>
                <td className="py-3 pl-4 text-center text-muted-foreground">Superficial</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-muted-foreground">
                  Producto SaaS propio en producción
                </td>
                <td className="py-3 px-4 text-center text-primary">✓</td>
                <td className="py-3 pl-4 text-center text-muted-foreground">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-muted-foreground">
                  Criterio de negocio desde el primer commit
                </td>
                <td className="py-3 px-4 text-center text-primary">✓</td>
                <td className="py-3 pl-4 text-center text-muted-foreground">Variable</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-muted-foreground">Build in public documentado</td>
                <td className="py-3 px-4 text-center text-primary">✓</td>
                <td className="py-3 pl-4 text-center text-muted-foreground">Variable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
