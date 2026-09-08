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
const efoodAsset = { url: "/images/EFOOD.png" };
const woltAsset = { url: "/images/wolt.png" };

// Page Data Arrays
const stats = ref([
  { label: "Active riders", value: "1,200+" },
  { label: "Cities covered", value: "14" },
  { label: "Shift fill rate", value: "99.4%" },
]);

const headline = {
  before: "The operating layer between ",
  riders: "Riders",
  after: " and delivery platforms.",
};

const typedBefore = ref("");
const typedRiders = ref("");
const typedAfter = ref("");
const isTyping = ref(false);
let typingCancelled = false;

const typeText = async (
  target: { value: string },
  text: string,
  delay = 40,
) => {
  target.value = "";

  for (const character of text) {
    if (typingCancelled) return;
    target.value += character;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
};

onMounted(async () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typedBefore.value = headline.before;
    typedRiders.value = headline.riders;
    typedAfter.value = headline.after;
    return;
  }

  isTyping.value = true;
  await typeText(typedBefore, headline.before);
  await typeText(typedRiders, headline.riders, 40);
  await typeText(typedAfter, headline.after);
  isTyping.value = false;
});

onUnmounted(() => {
  typingCancelled = true;
});
</script>

<template>
  <section class="relative overflow-hidden border-b border-border">
    <div class="pointer-events-none absolute inset-0 bg-grid opacity-70" />
    <div
      class="relative mx-auto grid max-w-7xl gap-14 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-10"
    >
      <div>
        <span
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-card"
        >
          <span class="size-2 animate-pulse rounded-full bg-primary" />
          Live fleets on EFOOD & Wolt
        </span>

        <h1
          class="mt-6 text-[2.7rem] font-bold leading-[1.02] text-slate-900 sm:text-6xl"
        >
          <span aria-hidden="true">
            {{ typedBefore
            }}<span class="text-orange-600">{{ typedRiders }}</span
            >{{ typedAfter
            }}<span
              v-if="isTyping"
              class="ml-1 inline-block h-[0.85em] w-0.5 translate-y-1 bg-orange-600 align-baseline animate-pulse"
            />
          </span>
          <span class="sr-only"
            >The operating layer between Riders and delivery platforms.</span
          >
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          FeroFerto sources, verifies, equips and pays delivery riders then
          keeps every shift covered. One team for onboarding, compliance, gear,
          payroll and daily coordination.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <Button
            as-child
            size="xl"
            class="rounded font-semibold px-3 py-3 bg-orange-600 text-white shadow-sm transition-colors hover:bg-orange-700 focus-visible:ring-orange-500"
          >
            <NuxtLink to="/apply/rider" class="inline-flex items-center gap-2">
              Become Rider
            </NuxtLink>
          </Button>
          <Button
            as-child
            variant="outline"
            size="xl"
            class="rounded font-semibold px-3 py-3 bg-black text-white shadow-sm transition-colors hover:bg-slate-700 focus-visible:ring-orange-500"
          >
            <NuxtLink to="/auth">Get started</NuxtLink>
          </Button>
        </div>

        <div class="mt-10 grid max-w-lg grid-cols-3 gap-4">
          <div
            v-for="s in stats.slice(0, 3)"
            :key="s.label"
            class="rounded-xl border border-border bg-card p-4 shadow-card"
          >
            <p class="font-display text-2xl font-bold text-slate-900">
              {{ s.value }}
            </p>
            <p class="mt-1 text-xs leading-5 text-slate-600">
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
      </div>
    </div>
  </section>

  <!-- Platforms -->
  <div class="border-b border-border bg-secondary/40 py-8">
    <div
      class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5"
    >
      <p class="font-display text-lg font-semibold text-slate-600">
        Riders supplied to
      </p>
      <img src="/images/EFOOD.png" alt="EFOOD" class="h-7 w-auto opacity-80" />
      Efood
      <img
        src="/images/wolt.png"
        alt="Wolt"
        class="h-7 w-auto opacity-80"
      />Wolt
      <span class="font-display text-lg font-semibold text-slate-600">
        + Regional networks
      </span>
    </div>
  </div>
  <div class="0...3214566789"></div>
</template>
