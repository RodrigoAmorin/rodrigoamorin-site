import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "Rodrigo Amorín",
  description:
    "Diseñador multimedia especializado en comunicación estratégica, motion graphics y soluciones digitales.",
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
    { text: "Sobre mí", href: "/sobre-mi" },
    { text: "Servicios", href: "/servicios" },
    { text: "Blog", href: "/blog" },
    { text: "Contacto", href: "/contacto" },
    { text: "Recursos", href: "/widgets" },
  ],
};
