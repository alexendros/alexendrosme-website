import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Autobiografía",
  description:
    "Relato personal en tres actos: origen, transición al software y actualidad como fundador. Propuesta de valor y diferenciación.",
  alternates: { canonical: "/autobiografia" },
};

export default function AutobiografiaPage() {
  return (
    <div className="site-shell max-w-3xl section space-y-12">
      <header className="space-y-3">
        <h1 className="headline">Autobiografía</h1>
        <p className="prose-lead">
          Itinerario no lineal contado en tres actos. Contexto honesto sobre de dónde vengo, qué
          aprendí por el camino y qué construyo ahora.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="title">Acto I — Origen</h2>
        <p className="text-muted-foreground leading-relaxed">
          Años fuera del software —hostelería, gestión, atención al cliente— que me enseñaron a
          leer negocios antes que a escribir código. Traje de ahí tres cosas: criterio para
          distinguir lo que importa del ruido, paciencia para los detalles que nadie ve, y la
          costumbre de cobrar por resultados. Cuando por fin me senté a programar, ya tenía claro
          para qué.
        </p>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="title">Acto II — Transición</h2>
        <p className="text-muted-foreground leading-relaxed">
          Salto al software a tiempo completo. Formación autodidacta intensiva en stack moderno:
          Next.js, Supabase, Stripe, Docker, n8n. Primeros proyectos freelance, apertura del
          repositorio público y decisión firme de trabajar en abierto.
        </p>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="title">Acto III — Actualidad</h2>
        <p className="text-muted-foreground leading-relaxed">
          Operador de la plataforma (
          <a
            href="https://alexendros.pro"
            className="text-primary underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            alexendros.pro
          </a>
          ). Monorepo multi-app en construcción, build in public documentado y disponibilidad para
          consultoría en proyectos donde la mezcla producto + ejecución técnica marca la diferencia.
        </p>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="title">Propuesta de valor</h2>
        <blockquote className="border-l-2 border-primary pl-4">
          <p className="text-foreground font-medium leading-relaxed">
            &ldquo;Construyo, opero y cobro en mi propio SaaS. Lo que recomiendo lo he probado antes
            en producción.&rdquo;
          </p>
        </blockquote>

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
