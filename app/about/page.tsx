import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Fullstack developer. Fundador de KitOS. Valencia.",
};

export default function AboutPage() {
  return (
    <div className="site-shell max-w-3xl section space-y-12">
      <h1 className="headline">Sobre mí</h1>

      {/* Acto I */}
      <section className="space-y-4">
        <h2 className="title">Acto I — Origen</h2>
        <p className="text-muted-foreground leading-relaxed">
          Itinerario no lineal: años de oficio fuera del software antes de meterme hasta el cuello.
          Lo cuento con calma en una versión ampliada de esta página — llegará pronto con los
          detalles que realmente explican cómo trabajo hoy.
        </p>
      </section>

      <Separator />

      {/* Acto II */}
      <section className="space-y-4">
        <h2 className="title">Acto II — Transición</h2>
        <p className="text-muted-foreground leading-relaxed">
          Salto al software a tiempo completo. Formación autodidacta intensiva en stack moderno:
          Next.js, Supabase, Stripe, Docker, n8n. Primeros proyectos freelance, apertura del
          repositorio público y decisión firme de trabajar en abierto.
        </p>
      </section>

      <Separator />

      {/* Acto III */}
      <section className="space-y-4">
        <h2 className="title">Acto III — Actualidad</h2>
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
        <h2 className="title">Propuesta de valor</h2>
        <blockquote className="border-l-2 border-primary pl-4">
          <p className="text-foreground font-medium leading-relaxed">
            &ldquo;Construyo, opero y cobro en mi propio SaaS. Lo que recomiendo lo he probado
            antes en producción.&rdquo;
          </p>
        </blockquote>

        {/* Diferenciación — tabla en desktop, lista stack en móvil */}
        <table className="legal-table">
          <thead>
            <tr>
              <th>Dimensión</th>
              <th>Alexendros</th>
              <th>Dev genérico</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Código fullstack enterprise", "✓", "Variable"],
              ["Cumplimiento legal (RGPD/LOPDGDD) bien integrado", "✓", "Superficial"],
              ["Producto SaaS propio en producción", "✓", "—"],
              ["Criterio de negocio desde el primer commit", "✓", "Variable"],
              ["Build in public documentado", "✓", "Variable"],
            ].map(([dim, a, b]) => (
              <tr key={dim}>
                <td data-label="Dimensión">{dim}</td>
                <td data-label="Alexendros" className="text-primary">
                  {a}
                </td>
                <td data-label="Dev genérico" className="text-muted-foreground">
                  {b}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
