import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "Rodrigo Amorín",
  description:
    "Ayudamos a marcas e instituciones a ordenar su comunicación y proyectarse con una imagen sólida en entornos digitales, integrando creatividad, análisis y tecnología en cada sistema que desarrollamos.",
  url: "https://rodrigoamorin.com",
  lang: "es",
  locale: "es_AR",
  author: "Rodrigo Amorín",
  twitter: "@Devgelo",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com/RodrigoAmorin",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Nosotros", href: "/nosotros" },
    { text: "Servicios", href: "/servicios" },
    { text: "Blog", href: "/blog" },
    { text: "Contacto", href: "/contacto" },
    { text: "Recursos", href: "/widgets" },
  ],
};
