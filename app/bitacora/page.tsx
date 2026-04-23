import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Bitácora",
  description: "Feed de publicaciones breves: notas, decisiones y aprendizajes en abierto.",
};

type Entry = {
  title: string;
  subtitle: string;
  date: string;
  body: string;
};

const entries: Entry[] = [
  {
    title: "Apertura de bitácora",
    subtitle: "Notas cortas, fechadas, sin editor intermedio",
    date: "2026-04-23",
    body: "Abro este feed para dejar rastro público de decisiones pequeñas: lo que cambio, por qué, y qué aprendo al operarlo. Formato fijo: título, subtítulo, fecha y texto.",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BitacoraPage() {
  return (
    <div className="site-shell max-w-3xl section space-y-10">
      <header className="space-y-3">
        <h1 className="headline">Bitácora</h1>
        <p className="prose-lead">
          Notas cortas en abierto. Decisiones, contratiempos y aprendizajes — fechados, sin
          retocar.
        </p>
      </header>

      <div className="space-y-10">
        {entries.map((entry, idx) => (
          <article key={`${entry.date}-${idx}`} className="space-y-3">
            <div className="space-y-1">
              <h2 className="title">{entry.title}</h2>
              <p className="text-sm text-muted-foreground">{entry.subtitle}</p>
              <time
                dateTime={entry.date}
                className="text-xs uppercase tracking-wide text-muted-foreground"
              >
                {formatDate(entry.date)}
              </time>
            </div>
            <p className="text-muted-foreground leading-relaxed">{entry.body}</p>
            {idx < entries.length - 1 && <Separator className="mt-8" />}
          </article>
        ))}
      </div>
    </div>
  );
}
