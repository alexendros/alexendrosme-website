import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 — Página no encontrada",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24 text-center">
      <h1 className="text-4xl font-bold text-foreground">Página no encontrada</h1>
      <p className="mt-4 text-muted-foreground">La página que buscas no existe o ha sido movida.</p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
