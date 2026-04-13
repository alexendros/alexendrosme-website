import type { Metadata } from "next";
import Link from "next/link";
import { UsesRedirect } from "./redirect-client";

export const metadata: Metadata = {
  title: "Herramientas",
  description: "Esta página se mudó a /herramientas.",
  alternates: { canonical: "/herramientas" },
  robots: { index: false, follow: true },
};

export default function UsesRedirectPage() {
  return (
    <>
      <UsesRedirect />
      <div className="site-shell max-w-3xl section space-y-4">
        <h1 className="headline">Esta página se mudó</h1>
        <p className="text-muted-foreground">
          Ahora está en{" "}
          <Link
            href="/herramientas"
            className="text-primary underline underline-offset-4 decoration-primary/60"
          >
            /herramientas
          </Link>
          .
        </p>
      </div>
    </>
  );
}
