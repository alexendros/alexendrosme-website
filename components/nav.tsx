"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // Sombra scroll-aware: marcamos el header con data-scrolled cuando scrollY > 8.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      header.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerRef} className="site-nav">
      <nav className="site-shell site-nav__inner max-w-3xl">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex min-h-[var(--tap-target-min)] items-center font-mono text-lg font-bold text-primary hover:opacity-80 transition-opacity"
        >
          Alexendros
        </Link>

        {/* Desktop nav */}
        <ul className="site-nav__links">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`site-nav__link px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "site-nav__link--active bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-touch" className="md:hidden" aria-label="Abrir menú">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(18rem,85vw)] sm:w-64">
            <div className="mt-8">
              <Link
                href="/"
                className="font-mono text-lg font-bold text-primary block mb-6"
                onClick={() => setOpen(false)}
              >
                Alexendros
              </Link>
              <ul className="flex flex-col gap-1">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-[var(--tap-target-min)] items-center px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
