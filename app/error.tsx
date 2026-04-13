"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="site-shell max-w-3xl section text-center">
      <h1 className="headline">Algo ha ido mal</h1>
      <p className="mt-4 text-muted-foreground">
        Se ha producido un error inesperado. Puedes reintentarlo o volver al inicio.
      </p>
      {process.env.NODE_ENV === "development" && error.message ? (
        <pre className="mt-6 overflow-x-auto rounded-md border border-border bg-muted p-4 text-left text-sm text-muted-foreground">
          {error.message}
        </pre>
      ) : null}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button onClick={() => reset()}>Reintentar</Button>
        <Button variant="outline" asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
