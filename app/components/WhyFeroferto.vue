<template>
  <section id="why" class="py-24 bg-white">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center mb-16">
        <p
          class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
        >
          Why Feroferto
        </p>
        <h2 class="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
          Designed for rider-first operations and platform confidence
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          A split-layout story of speed, compliance, and premium coordination
          that preserves rider satisfaction.
        </p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div class="space-y-8">
          <div class="flex gap-4" data-scroll-fade>
            <div
              class="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-100 text-xl"
            >
              🎯
            </div>
            <div>
              <h3 class="text-xl font-semibold text-slate-900">
                End-to-end platform control
              </h3>
              <p class="mt-2 text-slate-600">
                Manage onboarding, verification, equipment, payroll, and
                delivery coordination from a single secure dashboard.
              </p>
            </div>
          </div>

          <div class="flex gap-4" data-scroll-fade>
            <div
              class="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-100 text-xl"
            >
              🔄
            </div>
            <div>
              <h3 class="text-xl font-semibold text-slate-900">
                Platform agnostic integration
              </h3>
              <p class="mt-2 text-slate-600">
                Seamlessly onboard riders across EFOOD, Wolt, and custom
                delivery networks with reliable sync and workflows.
              </p>
            </div>
          </div>

          <div class="flex gap-4" data-scroll-fade>
            <div
              class="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-100 text-xl"
            >
              ⚡
            </div>
            <div>
              <h3 class="text-xl font-semibold text-slate-900">
                Fast onboarding with strong controls
              </h3>
              <p class="mt-2 text-slate-600">
                Get riders ready to work in minutes while keeping compliance and
                quality checks firmly in place.
              </p>
            </div>
          </div>

          <div class="flex gap-4" data-scroll-fade>
            <div
              class="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-100 text-xl"
            >
              🛡️
            </div>
            <div>
              <h3 class="text-xl font-semibold text-slate-900">
                Compliance-first operations
              </h3>
              <p class="mt-2 text-slate-600">
                Built-in KYC, payroll tax controls, and audit-ready reporting
                keep platforms confident and riders protected.
              </p>
            </div>
          </div>
        </div>

        <div class="relative" data-scroll-fade>
          <div
            class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-50 to-white shadow-3d"
          ></div>
          <div
            class="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-100 p-6"
          >
            <NuxtImg
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
              alt="Team planning rider operations"
              class="h-[520px] w-full object-cover rounded-[1.75rem]"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 520px"
            />
            <div
              class="absolute -bottom-8 right-6 w-64 rounded-[1.6rem] bg-white/95 p-6 shadow-3d-soft ring-1 ring-slate-200/80 backdrop-blur-md"
            >
              <p class="text-2xl font-semibold text-primary-700">98%</p>
              <p class="mt-1 text-sm text-slate-600">
                Rider recommendation score for our coordination platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useScrollAnimation();
</script>
