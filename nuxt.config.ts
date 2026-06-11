export default defineNuxtConfig({
  compatibilityDate: "2026-05-31",
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  image: {
    quality: 80,
    format: ["webp", "jpeg", "png"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  app: {
    head: {
      title: "Feroferto — Rider Workforce Enablement",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content:
            "Feroferto empowers independent bike riders with seamless onboarding, verification, payroll, and performance coordination across delivery platforms like EFOOD and Wolt.",
        },
        {
          name: "theme-color",
          content: "#f97316",
        },
        {
          property: "og:title",
          content: "Feroferto — Rider Workforce Enablement",
        },
        {
          property: "og:description",
          content:
            "Enterprise-grade rider workforce enablement for platforms, independent riders, payroll, onboarding, and live coordination.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/image.png",
        },
      ],
    },
  },

  devtools: { enabled: true },

  typescript: {
    strict: true,
  },
});
