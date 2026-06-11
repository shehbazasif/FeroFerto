<template>
  <section class="bg-neutral-50">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center mb-12">
        <p
          class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
        >
          Trusted platforms
        </p>
        <h2 class="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Platform partnerships built for reliability
        </h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          class="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-soft"
          data-scroll-fade
        >
          <div
            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 text-2xl text-white"
          >
            <NuxtImg
              src="images/EFOOD.png"
              alt="Wolt"
              class="h-full w-full object-cover"
            />
          </div>
          <p class="text-lg font-semibold text-slate-900">EFOOD</p>
          <p class="mt-2 text-sm text-slate-500">
            Trusted partner for rider onboarding and performance.
          </p>
        </div>

        <div
          class="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-soft"
          data-scroll-fade
        >
          <div
            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 text-2xl text-white"
          >
            <NuxtImg
              src="images/wolt.png"
              alt="Wolt"
              class="h-full w-full object-cover"
            />
          </div>
          <p class="text-lg font-semibold text-slate-900">Wolt</p>
          <p class="mt-2 text-sm text-slate-500">
            Live workforce coordination across delivery channels.
          </p>
        </div>

        <div
          class="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-soft"
          data-scroll-fade
        >
          <div
            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 text-2xl text-white"
          >
            📦
          </div>
          <p class="text-lg font-semibold text-slate-900">
            Custom Integrations
          </p>
          <p class="mt-2 text-sm text-slate-500">
            Plug into existing systems with secure APIs and webhooks.
          </p>
        </div>

        <div
          class="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-soft"
          data-scroll-fade
        >
          <div
            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 text-2xl text-white"
          >
            🚀
          </div>
          <p class="text-lg font-semibold text-slate-900">Scale Ready</p>
          <p class="mt-2 text-sm text-slate-500">
            Designed for multi-city rider networks and rapid growth.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useScrollAnimation();
</script>
