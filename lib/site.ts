export const siteConfig = {
  name: "Alexendros",
  fullName: "Alejandro Domingo Agustí",
  title: "Alejandro Agustí — Fullstack Developer",
  description:
    "Fullstack developer especializado en Next.js y Supabase. Plataforma propia en alexendros.pro. Valencia.",
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
    { label: "Bitácora", href: "/bitacora" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Autobiografía", href: "/autobiografia" },
    { label: "Experiencia", href: "/experiencia" },
    { label: "Contacto", href: "/contacto" },
  ],
  legalNav: [
    { label: "Aviso legal", href: "/legal/aviso-legal" },
    { label: "Privacidad", href: "/legal/privacidad" },
    { label: "Cookies", href: "/legal/cookies" },
  ],
} as const;
