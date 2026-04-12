import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad conforme al Art. 13 RGPD y LOPDGDD.",
};

export default function PrivacidadPage() {
  return (
    <>
      <h1>Política de Privacidad</h1>

      <p>
        En cumplimiento del Art. 13 del Reglamento (UE) 2016/679 del Parlamento
        Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y de la Ley
        Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y
        garantía de los derechos digitales (LOPDGDD), se informa de las
        siguientes condiciones del tratamiento de datos personales:
      </p>

      <h2>1. Identidad del responsable del tratamiento</h2>
      <ul>
        <li>
          <strong className="text-foreground">Responsable:</strong> Alejandro
          Domingo Agustí
        </li>
        <li>
          <strong className="text-foreground">NIF:</strong> 21002968N
        </li>
        <li>
          <strong className="text-foreground">Domicilio:</strong> Valencia, España
        </li>
        <li>
          <strong className="text-foreground">Email de contacto:</strong>{" "}
          <a href="mailto:hola@alexendros.me">hola@alexendros.me</a>
        </li>
      </ul>

      <h2>2. Delegado de Protección de Datos (DPD)</h2>
      <p>
        No se ha designado Delegado de Protección de Datos al no concurrir las
        circunstancias previstas en el Art. 37 RGPD (organización con menos de
        250 empleados, tratamiento no masivo de categorías especiales de datos).
      </p>

      <h2>3. Finalidades y bases legales del tratamiento</h2>
      <p>
        Este sitio web es estático y no recoge datos personales de forma
        automatizada. Las únicas finalidades de tratamiento son:
      </p>
      <ul>
        <li>
          <strong className="text-foreground">
            Prestación del servicio web (hosting)
          </strong>{" "}
          — El proveedor de hosting (Vercel) puede procesar datos técnicos de
          conexión (dirección IP, agente de usuario) como parte de la entrega
          del contenido. Base legal: Art. 6.1.b RGPD (prestación del servicio).
        </li>
        <li>
          <strong className="text-foreground">
            Contacto voluntario por email
          </strong>{" "}
          — Si el usuario contacta a través de{" "}
          <a href="mailto:hola@alexendros.me">hola@alexendros.me</a>, los datos
          proporcionados se tratarán exclusivamente para responder a la
          consulta. Base legal: Art. 6.1.b RGPD (medidas precontractuales a
          petición del interesado).
        </li>
      </ul>

      <h2>4. Destinatarios de los datos</h2>
      <p>
        Los datos técnicos de conexión son procesados por el siguiente
        proveedor:
      </p>
      <ul>
        <li>
          <strong className="text-foreground">Vercel, Inc.</strong> — Hosting y
          entrega de contenido web (CDN). Los datos se procesan conforme a su
          política de privacidad y acuerdo de procesamiento de datos (DPA).
        </li>
      </ul>
      <p>
        No se comunican datos a ningún otro tercero. No se ceden datos con
        fines comerciales o publicitarios.
      </p>

      <h2>5. Transferencias internacionales de datos</h2>
      <p>
        Vercel, Inc. tiene su sede en Estados Unidos. Las transferencias se
        realizan con las garantías adecuadas previstas en el Art. 46 RGPD,
        mediante Cláusulas Contractuales Tipo (CCT/SCCs) adoptadas por la
        Comisión Europea, conforme al Art. 46.2.c RGPD.
      </p>

      <h2>6. Plazos de conservación</h2>
      <p>
        Este sitio web no almacena datos personales de los visitantes. Los datos
        técnicos de conexión procesados por Vercel se rigen por su propia
        política de retención.
      </p>
      <p>
        En caso de contacto por email, los datos se conservarán durante el
        tiempo necesario para atender la consulta y, en su caso, durante los
        plazos legales aplicables.
      </p>

      <h2>7. Derechos de los interesados</h2>
      <p>
        El interesado tiene derecho a ejercer, en cualquier momento, los
        siguientes derechos:
      </p>
      <ul>
        <li>
          <strong className="text-foreground">Acceso</strong> — Conocer qué
          datos se tratan y con qué finalidad.
        </li>
        <li>
          <strong className="text-foreground">Rectificación</strong> —
          Corregir datos inexactos o incompletos.
        </li>
        <li>
          <strong className="text-foreground">Supresión</strong> — Solicitar la
          eliminación de los datos («derecho al olvido»).
        </li>
        <li>
          <strong className="text-foreground">Portabilidad</strong> — Obtener
          los datos en formato estructurado, de uso común y lectura mecánica.
        </li>
        <li>
          <strong className="text-foreground">Oposición</strong> — Oponerse al
          tratamiento basado en interés legítimo.
        </li>
        <li>
          <strong className="text-foreground">Limitación</strong> — Solicitar
          que se restrinja el tratamiento en determinadas circunstancias.
        </li>
      </ul>
      <p>
        Para ejercer estos derechos, puede dirigirse a:{" "}
        <a href="mailto:hola@alexendros.me">hola@alexendros.me</a>
      </p>

      <h2>8. Derecho a presentar reclamación ante la AEPD</h2>
      <p>
        Si considera que sus derechos no han sido debidamente atendidos, tiene
        derecho a presentar una reclamación ante la Agencia Española de
        Protección de Datos (AEPD), autoridad de control competente en España,
        a través de su sitio web:{" "}
        <a
          href="https://www.aepd.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          aepd.es
        </a>
        .
      </p>

      <p>
        <em>
          Última actualización: abril 2026. Esta política se actualizará si se
          incorporan funcionalidades que impliquen tratamiento de datos
          personales adicional.
        </em>
      </p>
    </>
  );
}
