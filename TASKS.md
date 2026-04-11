# TASKS — alexendros-me

Lista viva de pendientes del repositorio standalone `alexendros-me` tras el split del 2026-04-11.
Formato: checkbox + breve descripcion. Marca hecho conforme lo completes.

---

## 1. Infraestructura git (fuera de Claude — accion usuario)

- [ ] Crear repo en GitHub: `github.com/alexendros/alexendros-me`
  - Privado al principio, dark-mode preview, sin README autogenerado (ya hay uno).
- [ ] Anadir remote y primer push:
  ```bash
  cd ~/Apps/alexendros-me
  git remote add origin git@github.com:alexendros/alexendros-me.git
  git push -u origin main
  ```
- [ ] Proteger `main` en GitHub (require PR + 1 review si aplica).

## 2. Deploy Vercel

- [ ] Importar repo desde Vercel dashboard.
- [ ] Framework preset: **Next.js**.
- [ ] Root directory: `./` (raiz del repo).
- [ ] Build command: `pnpm build` (output ya es static en `out/`).
- [ ] Output directory: `out` (por el `output: 'export'`).
- [ ] Region: **mad1** (Madrid — region nativa del ecosistema).
- [ ] Variables de entorno: **ninguna** (la app es 100% estatica).
- [ ] Verificar que `vercel.json` aplica los security headers (CSP strict, HSTS preload, X-Frame-Options DENY).
- [ ] Validar deploy preview en la URL `*.vercel.app`:
  - [ ] Home carga con fonts Geist locales (no FOUT)
  - [ ] Navegacion mobile (Sheet) funciona
  - [ ] Las 7 paginas publicas resuelven (/, /about, /projects, /uses, /contact, /legal/*)
  - [ ] JSON-LD visible en `view-source`
  - [ ] `robots.txt` y `sitemap.xml` accesibles

## 3. DNS alexendros.me

- [ ] Anadir dominio `alexendros.me` al proyecto Vercel.
- [ ] Configurar registros en el registrar (Cloudflare / Porkbun / Namecheap / whoever):
  - A record apuntando a `76.76.21.21` (Vercel anycast), **o**
  - CNAME `alexendros.me` → `cname.vercel-dns.com` si el registrar soporta ALIAS/ANAME en apex.
- [ ] Anadir `www.alexendros.me` → redirect 301 a apex.
- [ ] Esperar propagacion DNS (5–30 min) + emision del cert SSL automatico por Vercel.
- [ ] Verificar HTTPS con `curl -I https://alexendros.me` — cabeceras HSTS, CSP, X-Frame-Options presentes.

## 4. Post-deploy — validaciones

- [ ] **Lighthouse audit** (mobile + desktop):
  - [ ] Performance > 90
  - [ ] Accessibility = 100
  - [ ] Best practices = 100
  - [ ] SEO = 100
- [ ] **CWV reales**: `npx @unlighthouse/cli https://alexendros.me` y verificar LCP < 2.5s mobile.
- [ ] **SEO**: `curl https://alexendros.me/sitemap.xml` y `curl https://alexendros.me/robots.txt`.
- [ ] **JSON-LD**: validar en https://validator.schema.org con `view-source` de la home.
- [ ] **OG image**: previsualizar en https://www.opengraph.xyz/url/https%3A%2F%2Falexendros.me o https://metatags.io.
- [ ] Enviar sitemap a Google Search Console + IndexNow (Bing).

## 5. Futuras mejoras (no bloqueantes)

- [ ] Decidir si se cruza `alexendros.me/contact` → formulario con Resend (requeriria backend — romperia el static export).
- [ ] Integrar analytics privacy-first (Plausible EU / Umami self-hosted) — solo si el usuario lo pide y con consentimiento.
- [ ] Anadir link real al hub `alexendros.pro` cuando este deployado (ahora mismo se menciona en copy).
- [ ] Rotar el contenido de `/projects` con los ultimos casos (lexactu, afiladocs, argus).
- [ ] Revisar `lib/site.ts` y confirmar los `sameAs` del JSON-LD Person (GitHub, LinkedIn, Twitter handles al dia).

## 6. Higiene del repo

- [ ] Anadir CI basico en GitHub Actions: `pnpm install --frozen-lockfile && pnpm typecheck && pnpm build`.
- [ ] Anadir `.github/pull_request_template.md` si se empiezan a abrir PRs.
- [ ] Considerar anadir `CONTRIBUTING.md` o trasladar la seccion 4 del CLAUDE.md a un `docs/conventions.md` para contribuidores no-Claude.

---

_Ultima actualizacion: 2026-04-11 (creacion tras el split)._
