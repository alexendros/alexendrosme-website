import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 — Página no encontrada",
};

export default function NotFound() {
  return (
    <div className="site-shell max-w-3xl section text-center">
      <h1 className="headline">Página no encontrada</h1>
      <p className="mt-4 text-muted-foreground">La página que buscas no existe o ha sido movida.</p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
