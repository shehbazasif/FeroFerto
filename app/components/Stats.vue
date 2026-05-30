<template>
  <section class="py-24 bg-white">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center mb-16">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Impact</p>
        <h2 class="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">By the numbers</h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">A premium network engine built to scale rider operations with measurable business outcomes.</p>
      </div>

      <div class="grid gap-6 lg:grid-cols-4">
        <div v-for="(stat, idx) in stats" :key="stat.id" class="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-soft" :class="stat.id === 'platforms' ? 'glass-card' : ''" data-scroll-fade data-scroll-counter :style="{ animationDelay: `${idx * 0.1}s` }">
          <div class="text-4xl font-semibold tracking-tight text-primary-700">
            {{ displayValue[stat.id] ?? 0 }}<span v-if="stat.suffix" class="text-2xl">{{ stat.suffix }}</span>
          </div>
          <p class="mt-4 text-lg font-semibold text-slate-900">{{ stat.label }}</p>
          <p class="mt-3 text-sm text-slate-500">Active this quarter</p>
        </div>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <div class="rounded-[2rem] bg-primary-50 p-8 border border-primary-100 shadow-sm">
          <p class="text-3xl font-semibold text-primary-700">€2.5M+</p>
          <p class="mt-2 text-slate-600">Total payouts distributed last year.</p>
        </div>
        <div class="rounded-[2rem] bg-primary-50 p-8 border border-primary-100 shadow-sm">
          <p class="text-3xl font-semibold text-primary-700">95%</p>
          <p class="mt-2 text-slate-600">Average satisfaction rating across riders and platforms.</p>
        </div>
        <div class="rounded-[2rem] bg-primary-50 p-8 border border-primary-100 shadow-sm">
          <p class="text-3xl font-semibold text-primary-700">50K+</p>
          <p class="mt-2 text-slate-600">Deliveries coordinated daily across partner platforms.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Stat } from "~/types";

const stats: Stat[] = [
  { id: "riders", label: "Active Riders", value: 2500, duration: 2000 },
  { id: "platforms", label: "Platforms", value: 8, duration: 1800 },
  { id: "countries", label: "Countries", value: 12, duration: 1800 },
  { id: "uptime", label: "System Uptime", value: 99, suffix: "%", duration: 2000 },
];

const displayValue = reactive<Record<string, number>>({});

onMounted(() => {
  stats.forEach((stat) => {
    let current = 0;
    const increment = stat.value / 100;
    const duration = stat.duration || 2000;
    const step = duration / 100;

    const timer = window.setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        displayValue[stat.id] = stat.value;
        window.clearInterval(timer);
      } else {
        displayValue[stat.id] = Math.floor(current);
      }
    }, step);
  });
});

const formatNumber = (value: number): string => {
  if (value >= 1000) {
    return (value / 1000).toFixed(1) + "K";
  }
  return value.toString();
};

useScrollAnimation();
</script>
