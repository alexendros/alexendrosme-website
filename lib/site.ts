export const siteConfig = {
  name: "Alexendros",
  fullName: "Alejandro Domingo Agustí",
  title: "Alejandro Agustí — Fullstack Developer",
  description:
    "Fullstack developer especializado en Next.js y Supabase. Fundador de KitOS. Valencia.",
  url: "https://alexendros.me",
  email: "contacto@alexendros.me",
  location: "Valencia, España",
  links: {
    pro: "https://alexendros.pro",
    github: "https://github.com/alexendros",
    linkedin: "https://linkedin.com/in/alexendros",
    twitter: "https://x.com/alexendros",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/about" },
    { label: "Proyectos", href: "/projects" },
    { label: "Herramientas", href: "/herramientas" },
    { label: "Contacto", href: "/contact" },
  ],
  legalNav: [
    { label: "Aviso legal", href: "/legal/aviso-legal" },
    { label: "Privacidad", href: "/legal/privacidad" },
    { label: "Cookies", href: "/legal/cookies" },
  ],
} as const;
