<template>
  <section class="relative overflow-hidden bg-neutral-50 pt-28 pb-24 md:pb-32">
    <div
      class="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-primary-50 to-neutral-50 opacity-90"
    ></div>
    <div
      class="absolute left-1/4 top-16 h-72 w-72 rounded-full bg-primary-200/70 blur-3xl"
    ></div>
    <div
      class="absolute right-0 top-32 h-80 w-80 rounded-full bg-primary-300/30 blur-3xl"
    ></div>

    <div
      class="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="max-w-2xl space-y-8">
        <div
          class="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-md"
        >
          <span
            class="inline-flex h-2.5 w-2.5 rounded-full bg-primary-600 animate-pulse"
          ></span>
          Trusted by EFOOD, Volt, and growing rider communities
        </div>

        <div>
          <h1
            class="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
          >
            Premium rider workforce enablement with enterprise-grade
            coordination.
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Feroferto connects independent bike riders with EFOOD, Volt, and
            major delivery platforms through seamless onboarding, compliance,
            accessories management, payroll automation, and live workforce
            coordination.
          </p>
        </div>

        <div class="flex flex-col gap-4 sm:flex-row">
          <button
            @click="scrollToContact"
            class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-3d-soft"
          >
            Start a pilot
          </button>
          <button
            class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-primary-300 hover:text-primary-700"
          >
            Watch demo
          </button>
        </div>

        <div class="grid gap-4 sm:grid-cols-3">
          <div
            class="rounded-3xl bg-white/90 p-5 text-slate-900 shadow-3d-soft ring-1 ring-primary-100"
          >
            <p class="text-2xl font-semibold text-primary-700">15 min</p>
            <p class="mt-1 text-sm text-slate-500">Average rider onboarding</p>
          </div>
          <div
            class="rounded-3xl bg-white/90 p-5 text-slate-900 shadow-3d-soft ring-1 ring-primary-100"
          >
            <p class="text-2xl font-semibold text-primary-700">99%</p>
            <p class="mt-1 text-sm text-slate-500">Platform uptime SLA</p>
          </div>
          <div
            class="rounded-3xl bg-white/90 p-5 text-slate-900 shadow-3d-soft ring-1 ring-primary-100"
          >
            <p class="text-2xl font-semibold text-primary-700">24/7</p>
            <p class="mt-1 text-sm text-slate-500">Live rider support</p>
          </div>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-3xl">
        <div
          class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-500/15 via-transparent to-transparent shadow-[0_60px_170px_-80px_rgba(109,45,217,0.35)]"
        ></div>
        <div
          class="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50 shadow-3d"
        >
          <NuxtImg
            src="https://images.unsplash.com/photo-1547649432-ba9d1d1b91f1?w=1200&h=800&fit=crop"
            alt="Rider on a bicycle in motion"
            class="h-[420px] w-full object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"
          ></div>
          <div
            class="absolute left-6 bottom-6 rounded-3xl bg-white/85 p-5 shadow-3d-soft backdrop-blur-md ring-1 ring-slate-200/60"
          >
            <p class="text-sm uppercase tracking-[0.3em] text-slate-500">
              Live coordination
            </p>
            <p class="mt-2 text-xl font-semibold text-slate-900">
              Dynamic rider routing & status updates
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 -mb-6 flex justify-center"
    >
      <div class="h-16 w-16 rounded-full bg-white/90 shadow-3d"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  const contactSection = document.getElementById("cta");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
