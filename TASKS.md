# TASKS — alexendros-me

Lista viva de pendientes del repositorio standalone `alexendros-me`.

---

## 1. Infraestructura git

- [ ] Crear repo en GitHub: `github.com/alexendros/alexendros-me`.
  - Privado al principio, sin README autogenerado (ya existe uno).
- [ ] Añadir remote y primer push de `main`:
  ```bash
  cd ~/Apps/alexendros-me
  git remote add origin git@github.com:alexendros/alexendros-me.git
  git push -u origin main
  ```
- [ ] Push de la rama `audit/cleanup-20260412` y abrir PR contra `main`.
- [ ] Proteger `main` en GitHub (require PR + 1 review).

## 2. Deploy Vercel

- [ ] Importar repo desde Vercel dashboard.
- [ ] Framework preset: **Next.js**.
- [ ] Root directory: `./`.
- [ ] Build command: `pnpm build`.
- [ ] Output directory: `out`.
- [ ] Region: **mad1**.
- [ ] Variables de entorno: ninguna.
- [ ] Verificar que `vercel.json` aplica los security headers.
- [ ] Validar deploy preview en `*.vercel.app`:
  - [ ] Home carga con fonts Geist locales (sin FOUT).
  - [ ] Navegación mobile (Sheet) funciona.
  - [ ] 8 páginas públicas resuelven (/, /about, /projects, /uses, /contact, /legal/aviso-legal, /legal/privacidad, /legal/cookies).
  - [ ] `/404` custom renderiza correctamente.
  - [ ] JSON-LD visible en `view-source`.
  - [ ] `robots.txt` y `sitemap.xml` accesibles.

## 3. DNS alexendros.me

- [ ] Añadir dominio `alexendros.me` al proyecto Vercel.
- [ ] Configurar registros en el registrar:
  - A record apex → `76.76.21.21`, o
  - CNAME → `cname.vercel-dns.com` si el registrar soporta ALIAS/ANAME en apex.
- [ ] Redirect 301 `www.alexendros.me` → apex.
- [ ] Esperar propagación + cert SSL automático.
- [ ] `curl -I https://alexendros.me` y verificar HSTS, CSP, X-Frame-Options.

## 4. Post-deploy — validaciones

- [ ] **Lighthouse audit** (mobile + desktop):
  - [ ] Performance > 90
  - [ ] Accessibility = 100
  - [ ] Best practices = 100
  - [ ] SEO = 100
- [ ] **CWV reales**: `npx @unlighthouse/cli https://alexendros.me`, LCP < 2.5s mobile.
- [ ] **SEO**: `curl https://alexendros.me/sitemap.xml` y `/robots.txt`.
- [ ] **JSON-LD**: validar en https://validator.schema.org con `view-source` de la home.
- [ ] **OG image**: previsualizar en https://metatags.io.
- [ ] Enviar sitemap a Google Search Console + IndexNow.

## 5. Futuras mejoras (no bloqueantes)

- [ ] Rotar `/projects` con los últimos casos reales (lexactu, afiladocs, argus).
- [ ] Actualizar `sameAs` del JSON-LD Person si cambian handles sociales.
- [ ] Analytics privacy-first (Plausible EU / Umami) con consentimiento explícito.
- [ ] Link real al hub `alexendros.pro` cuando esté deployado.
- [ ] Preload de fuentes Geist (`<link rel="preload">`) para mejorar TTFB percibido.
- [ ] Microanimaciones en hero con `tw-animate-css` (ya instalado).
- [ ] Calendly embed en `/contact` (iframe, compatible con static export).

## 6. Higiene del repo

- [ ] GitHub Actions CI: `pnpm install --frozen-lockfile && pnpm typecheck && pnpm build`.
- [ ] `.github/pull_request_template.md`.
- [ ] Dependabot para actualizaciones de seguridad.

## 7. Audit 2026-04-12 (completado)

- [x] Auditoría de estructura canónica Next.js 15 + shadcn.
- [x] Análisis estático: imports no usados (0), componentes UI huérfanos (0), CSS vars muertas (0).
- [x] `docs/history/` sintetizado en `docs/CHANGELOG.md` y eliminado.
- [x] `CLAUDE.md` y `README.md` actualizados (referencias a `docs/history/` → `docs/CHANGELOG.md`).
- [x] `app/error.tsx` creado (error boundary raíz).
- [x] `app/page.tsx` con `metadata` explícita.
- [x] Build verde: typecheck 0 errores, lint 0 warnings, `pnpm build` 11 páginas estáticas.

---

_Última actualización: 2026-04-12 (tras audit/cleanup)._
