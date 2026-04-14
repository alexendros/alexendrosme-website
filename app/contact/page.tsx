import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Alejandro Agustí. Email, GitHub, LinkedIn.",
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/alexendros",
    display: "github.com/alexendros",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexendros",
    display: "linkedin.com/in/alexendros",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/alexendros",
    display: "x.com/alexendros",
  },
];

export default function ContactPage() {
  return (
    <div className="site-shell max-w-3xl section space-y-10">
      <div className="space-y-3">
        <h1 className="headline">Contacto</h1>
        <p className="prose-lead">
          Disponible para consultoría técnica en proyectos donde la intersección tech + legal aporta
          valor real.
        </p>
      </div>

      {/* Email */}
      <section className="space-y-4">
        <h2 className="title">Email</h2>
        <Button asChild>
          <a href="mailto:contacto@alexendros.me">contacto@alexendros.me</a>
        </Button>
      </section>

      <Separator />

      {/* Tiempo de respuesta */}
      <section className="space-y-4">
        <h2 className="title">Tiempo de respuesta</h2>
        <p className="text-muted-foreground">
          24–48h en días laborables. Para proyectos concretos, indica alcance y plazo en el email —
          así la primera respuesta ya es útil.
        </p>
      </section>

      <Separator />

      {/* Social links */}
      <section className="space-y-4">
        <h2 className="title">Redes</h2>
        <ul>
          {socials.map((social) => (
            <li key={social.label} className="contact-row">
              <span className="contact-row__label">{social.label}</span>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row__value underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
              >
                {social.display}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      {/* Location */}
      <section className="space-y-2">
        <h2 className="title">Ubicación</h2>
        <p className="text-sm text-muted-foreground">Valencia, España</p>
      </section>
    </div>
  );
}
