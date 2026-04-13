<div align="center">

# alexendros.me

**Landing estática de marca personal — construida con las mismas decisiones que aplico en producción.**

[![Next.js 15](https://img.shields.io/badge/Next.js-15-000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript strict](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-inline-000)](https://ui.shadcn.com)
[![Deploy · Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white)](https://vercel.com)

[alexendros.me](https://alexendros.me) · [hola@alexendros.me](mailto:hola@alexendros.me)

</div>

---

> Si llegas aquí desde mi firma, una charla o una tarjeta: esto es lo que construí para presentarme. No es una plantilla ni un `create-next-app` con tema oscuro — es un campo de pruebas real de las decisiones que tomo cuando lanzo producto.

## Qué es

Una landing de marca personal **sin backend, sin tracking y sin compromisos**. Tres kilobytes de JavaScript bien puestos valen más que un framework mal usado: el sitio renderiza en el servidor, se exporta a HTML estático y se sirve desde CDN. Cero cold starts, cero fugas de datos, cero dependencias que no hayas visto pasar.

La uso también como banco de pruebas de identidad visual antes de llevar las decisiones a [alexendros.pro](https://alexendros.pro) (el hub de producto real).

## Lo que vas a ver

- **Renderizado estático puro** — `output: "export"` de Next.js 15 + App Router. El HTML se genera en build y se sirve tal cual. Sin SSR en runtime, sin edge functions, sin sorpresas en la factura.
- **Tailwind CSS v4 CSS-first** — tokens `oklch` dark-first definidos en `app/globals.css`, sin `tailwind.config.js`. Paleta coherente en un único archivo.
- **shadcn/ui inline** — componentes copiados a `components/ui/`, no una dependencia. Lo que lees es lo que corre.
- **Headers de seguridad endurecidos** — CSP estricta (`base-uri 'self'`, `form-action 'self'`, `object-src 'none'`), HSTS con preload a 2 años, `X-Frame-Options: DENY`, Referrer-Policy, Permissions-Policy. Ver [vercel.json](./vercel.json).
- **SEO serio** — JSON-LD `Person` + `WebSite`, sitemap y robots estáticos, Open Graph pre-renderizada (1200×630), metadata tipada.
- **Legales reales** — aviso legal (LSSI-CE Art. 10), privacidad (RGPD Art. 13), cookies (Guía AEPD 2023). No lorem ipsum.
- **Accesibilidad y rendimiento como requisito, no como checkbox** — CWV targets declarados: LCP < 2.0 s desktop / < 2.5 s mobile, INP < 200 ms, CLS < 0.1, Lighthouse > 90.

## Stack

| Capa             | Elección                                                                  |
| ---------------- | ------------------------------------------------------------------------- |
| Framework        | Next.js 15 · App Router · React 19 · TypeScript `strict`                  |
| Estilos          | Tailwind CSS v4 (CSS-first) · tokens `oklch` dark-first                   |
| UI               | shadcn/ui inline · Radix primitives · `lucide-react`                      |
| Tipografía       | Geist Sans + Geist Mono (self-hosted en `public/fonts/`)                  |
| Calidad          | ESLint flat + Prettier 3 + depcheck + ts-prune · `noUncheckedIndexedAccess` |
| Package manager  | pnpm 10 · Node ≥ 22                                                       |
| Despliegue       | Vercel (región `mad1`) — static export servido desde CDN                  |
| Pair programming | [Claude Code](https://claude.com/claude-code) — asistente en CLI + VS Code |

## Decisiones deliberadas (y lo que no hay)

- **No hay API routes, ni middleware, ni base de datos.** Una landing no necesita backend; añadirlo sería deuda gratuita.
- **No hay analytics.** Ni PostHog, ni GA, ni fingerprinting. Si algún día los añado, será con consentimiento previo y banner RGPD real.
- **No hay formularios que envíen datos a ningún servidor.** Contacto vía `mailto:` y Calendly.
- **No hay colores hardcodeados fuera de `globals.css`.** Un cambio de paleta es un archivo.
- **No hay `any`.** TypeScript strict con `noUncheckedIndexedAccess`.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000 (Turbopack)
pnpm build        # genera out/ — HTML estático listo para CDN
```

### Scripts

| Comando                  | Qué hace                                           |
| ------------------------ | -------------------------------------------------- |
| `pnpm dev`               | Dev server con Turbopack                           |
| `pnpm build`             | Build + static export a `out/`                     |
| `pnpm typecheck`         | `tsc --noEmit`                                     |
| `pnpm lint`              | ESLint flat config                                 |
| `pnpm format` / `:check` | Prettier write / check                             |
| `pnpm deadcode:deps`     | depcheck · dependencias no usadas                  |
| `pnpm deadcode:exports`  | ts-prune · exports no consumidos                   |

## Estructura

```
app/          Rutas (App Router) — page.tsx por ruta, static export
components/   nav, footer, y ui/ (shadcn inline)
lib/          site config, cn helper, structured-data (JSON-LD)
public/       fonts, OG image, sitemap.xml, robots.txt
docs/         CHANGELOG + histórico por fases
```

Detalle extendido en [CLAUDE.md](./CLAUDE.md).

## Calidad y cumplimiento

Quality gate verde en el último pase (`2026-04-13`):

- `pnpm lint` → 0 errores, 0 warnings
- `pnpm typecheck` → 0 errores
- `pnpm format:check` → conforme
- `pnpm deadcode:deps` → sin issues
- `pnpm build` → 11 páginas estáticas, sin warnings

Checklist ISO 25010 firmada pre-deploy en [`docs/CHANGELOG.md`](./docs/CHANGELOG.md).


## Contacto

- **Web**: [alexendros.me](https://alexendros.me)
- **Producto**: [alexendros.pro](https://alexendros.pro)
- **Email**: [hola@alexendros.me](mailto:hola@alexendros.me)

<div align="center">

Hecho en Valencia · dark-first · sin cookies

</div>
