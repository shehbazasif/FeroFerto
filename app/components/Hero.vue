<script setup lang="ts">
// Nuxt Head Management
useHead({
  title: "FeroFerto — Rider Workforce Enablement for Delivery Platforms",
  meta: [
    {
      name: "description",
      content:
        "FeroFerto onboards, verifies, equips and pays delivery riders for EFOOD, Wolt and regional platforms — with a rider portal and admin console.",
    },
    { property: "og:title", content: "FeroFerto — Rider Workforce Enablement" },
    {
      property: "og:description",
      content:
        "Onboarding, compliance, gear, payroll and live coordination for delivery rider fleets.",
    },
  ],
});

// Mock Asset Paths (Replace with your actual assets/imports)
const heroAsset = {
  url: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&q=80&w=1200",
};
const efoodAsset = { url: "/images/efood-logo.svg" };
const woltAsset = { url: "/images/wolt-logo.svg" };

// Page Data Arrays
const stats = ref([
  { label: "Active riders", value: "1,200+" },
  { label: "Cities covered", value: "14" },
  { label: "Shift fill rate", value: "99.4%" },
]);
</script>

<template>
  <section class="relative overflow-hidden border-b border-border">
    <div class="pointer-events-none absolute inset-0 bg-grid opacity-70" />
    <div
      class="relative mx-auto grid max-w-7xl gap-14 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-10"
    >
      <div>
        <span
          class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-card"
        >
          <span class="size-2 animate-pulse rounded-full bg-primary" />
          Live fleets on EFOOD & Wolt
        </span>

        <h1 class="mt-6 text-[2.7rem] font-bold leading-[1.02] sm:text-6xl">
          The operating layer between
          <span class="text-primary">riders</span> and delivery platforms.
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          FeroFerto sources, verifies, equips and pays delivery riders — then
          keeps every shift covered. One team for onboarding, compliance, gear,
          payroll and daily coordination.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <Button as-child variant="signal" size="xl">
            <NuxtLink to="/apply/rider" class="inline-flex items-center gap-2">
              Apply as a rider
              <svg
                class="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </NuxtLink>
          </Button>
          <Button as-child variant="outline" size="xl">
            <NuxtLink to="/for-partners">Partner with us</NuxtLink>
          </Button>
        </div>

        <div class="mt-10 grid max-w-lg grid-cols-3 gap-4">
          <div
            v-for="s in stats.slice(0, 3)"
            :key="s.label"
            class="rounded-xl border border-border bg-card p-4 shadow-card"
          >
            <p class="font-display text-2xl font-bold text-primary">
              {{ s.value }}
            </p>
            <p class="mt-1 text-xs leading-5 text-muted-foreground">
              {{ s.label }}
            </p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="overflow-hidden rounded-3xl border border-border shadow-lift"
        >
          <img
            :src="heroAsset.url"
            alt="FeroFerto courier riding through the city with a delivery bag"
            class="h-[26rem] w-full object-cover lg:h-[32rem]"
          />
        </div>
        <div
          class="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border bg-card/95 p-5 shadow-lift backdrop-blur sm:left-10 sm:right-auto sm:w-72"
        >
          <p
            class="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Dispatch status
          </p>
          <div class="mt-3 space-y-2.5 text-sm">
            <Row label="Athens · evening" value="42 / 42 riders" ok />
            <Row label="Thessaloniki · night" value="17 / 18 riders" />
            <Row label="Patras · weekend" value="12 / 12 riders" ok />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Platforms -->
  <div class="border-b border-border bg-secondary/40 py-8">
    <div
      class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5"
    >
      <p
        class="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground"
      >
        Riders supplied to
      </p>
      <img :src="efoodAsset.url" alt="EFOOD" class="h-7 w-auto opacity-80" />
      <img :src="woltAsset.url" alt="Wolt" class="h-7 w-auto opacity-80" />
      <span class="font-display text-lg font-semibold text-muted-foreground">
        + regional networks
      </span>
    </div>
  </div>
  <div class="0...3214566789"></div>
</template>
