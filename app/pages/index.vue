<template>
  <main class="overflow-hidden bg-white">
    <Navbar />
    <Hero />
    <TrustedPlatforms />
    <Services />
    <Workflow />
    <Stats />
    <WhyFeroferto />
    <Testimonials />
    <CTA />
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Feroferto — Rider Workforce Enablement Platform",
  meta: [
    {
      name: "description",
      content:
        "Feroferto connects independent bike riders with EFOOD, Wolt, and major delivery platforms through premium onboarding, payroll, and performance coordination.",
    },
    {
      property: "og:title",
      content: "Feroferto — Rider Workforce Enablement Platform",
    },
    {
      property: "og:description",
      content:
        "Enterprise-grade rider workforce enablement for onboarding, verification, accessories, payroll, and live coordination.",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>
