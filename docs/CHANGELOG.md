# Changelog — alexendros-me

Síntesis cronológica de hitos del repo. Registro operativo, no log de ejecución.
Para detalle histórico de planes originales, ver git log.

---

## 2026-04-11 — Split a repo standalone

- Extraído de `alexendros-monorepo@a180d73` como repositorio independiente.
- Reemplazadas dependencias `@repo/*` por equivalentes inline:
  - shadcn/ui → `components/ui/` (5 componentes activos: badge, button, card, separator, sheet).
  - tokens oklch → `app/globals.css` directo.
  - `cn()` helper → `lib/utils.ts`.
- `TASKS.md` creado con checklist de deploy Vercel + DNS.
- Sin dependencia de Turborepo ni workspaces pnpm.

## 2026-04-09 — Fase 3 · Plan 03: SEO, headers y build verificado

- `lib/structured-data.ts` con `personJsonLd` + `websiteJsonLd` (Person + WebSite schema).
- JSON-LD inyectado en `app/layout.tsx` vía `dangerouslySetInnerHTML` (metadata API no cubre scripts arbitrarios).
- `public/sitemap.xml` y `public/robots.txt` estáticos. Motivo: `output: "export"` en Next.js 15 no soporta `app/sitemap.ts` ni `app/robots.ts` como route handlers.
- `public/og/opengraph-image.png` (1200×630) pre-generada con ImageMagick. Motivo: `next/og ImageResponse` requiere runtime incompatible con static export.
- `vercel.json` con 6 security headers: X-Frame-Options DENY, X-Content-Type-Options nosniff, CSP con `'unsafe-inline'` documentado (hydration de Next.js + JSON-LD inline + Tailwind v4), HSTS 2 años + preload, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy camera/mic/geo bloqueados.
- Build: 11 páginas estáticas, 0 errores TypeScript.

## 2026-04-09 — Fase 3 · Plan 02: páginas de contenido + legales

- 4 páginas de contenido: `/about` (narrativa 3 actos), `/projects` (portfolio KitOS + alexendros.me), `/uses` (stack), `/contact` (mailto + socials, sin formulario).
- 3 páginas legales con contenido real:
  - `/legal/aviso-legal` — LSSI-CE Art. 10, NIF 21002968N (riesgo T-03-03 aceptado: requerido por ley).
  - `/legal/privacidad` — RGPD Art. 13, 8 secciones, SCCs, periodos de retención.
  - `/legal/cookies` — Guía AEPD 2023, inventario de cookies.
- `app/legal/layout.tsx` con tipografía manual por variantes arbitrarias Tailwind (sin dependencia `@tailwindcss/typography`).
- Email `hola@alexendros.me` expuesto en `/contact` (riesgo T-03-04 aceptado: contacto intencional).

## 2026-04-08 — Fase 3 · Plan 01: shell de layout + hero

- `app/layout.tsx` refactor: eliminado `data-kit="stagekit"`; `:root` oklch tokens como paleta de marca personal.
- `lib/site.ts` con `siteConfig` (nav, legalNav, links, email, location).
- `components/nav.tsx` responsive (Sheet mobile, desktop links, `"use client"` por `usePathname`).
- `components/footer.tsx` Server Component con links legales y sociales (`target="_blank"` + `rel="noopener noreferrer"`).
- `app/page.tsx` hero + bio + projects preview + stack, Server Component, sin imágenes para LCP < 2s.
- `lucide-react` añadido como dependencia explícita (antes transitiva vía `@repo/ui`).

---

## Contexto de fase original

- Periodo: 2026-04-07 (contexto) → 2026-04-09 (cierre de Fase 3).
- Alcance: 3 planes, 8 páginas estáticas, SEO completo, security headers, build verificado.
- Tareas diferidas a post-MVP: analytics con consentimiento, animaciones complejas, i18n, blog/MDX, dynamic OG images.
- Deploy Vercel + DNS siempre fue user-setup manual (sin credenciales en código).
