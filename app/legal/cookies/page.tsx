import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de alexendros.me conforme a la Guía AEPD 2023.",
};

export default function CookiesPage() {
  return (
    <>
      <h1>Política de Cookies</h1>

      <p>
        En cumplimiento de la Guía sobre el uso de las cookies publicada por la Agencia Española de
        Protección de Datos (AEPD) en 2023, y de la Ley 34/2002 de Servicios de la Sociedad de la
        Información (LSSI-CE), se informa sobre el uso de cookies en{" "}
        <a href="https://alexendros.me" target="_blank" rel="noopener noreferrer">
          alexendros.me
        </a>
        .
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario
        cuando visita un sitio web. Permiten que el sitio recuerde información sobre la visita, lo
        que facilita la navegación y mejora la experiencia del usuario.
      </p>
      <p>
        Según la normativa vigente, las cookies que no sean estrictamente necesarias para el
        funcionamiento del servicio requieren el consentimiento previo e informado del usuario.
      </p>

      <h2>Uso de cookies en este sitio</h2>
      <p>
        <strong className="text-foreground">
          alexendros.me es un sitio web estático que no instala cookies de ningún tipo en el
          dispositivo del usuario.
        </strong>{" "}
        No se utilizan cookies propias, de terceros, analíticas ni publicitarias. Al no existir
        cookies, no se requiere mecanismo de consentimiento.
      </p>

      <h2>Derechos del usuario</h2>
      <p>
        Aunque este sitio no utiliza cookies, el usuario conserva en todo momento sus derechos
        conforme a la normativa vigente:
      </p>
      <ul>
        <li>
          <strong className="text-foreground">Configurar su navegador</strong> para rechazar o
          eliminar cookies. Consulte la ayuda de su navegador para más información.
        </li>
        <li>
          <strong className="text-foreground">Solicitar información</strong> adicional sobre el
          tratamiento de sus datos a través de:{" "}
          <a href="mailto:contacto@alexendros.me">contacto@alexendros.me</a>
        </li>
      </ul>

      <h2>Modificaciones</h2>
      <p>
        Si en el futuro se incorporan funcionalidades que requieran el uso de cookies, esta política
        se actualizará para reflejar los cambios y se implementará el mecanismo de consentimiento
        correspondiente conforme a la Guía AEPD 2023 y el Art. 22.2 LSSI-CE.
      </p>

      <p>
        <em>Última actualización: abril 2026. Conforme a la Guía AEPD 2023.</em>
      </p>
    </>
  );
}
