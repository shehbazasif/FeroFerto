<template>
  <section id="testimonials" class="py-24 bg-gradient-to-b from-white to-primary-50">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center mb-16">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Testimonials</p>
        <h2 class="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">What riders and platform leaders say</h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">Hear how Feroferto delivers visibility, speed, and confidence across rider networks.</p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div v-for="(testimonial, idx) in testimonials" :key="testimonial.id" class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-soft" data-scroll-fade :style="{ animationDelay: `${idx * 0.08}s` }" data-hover-lift>
          <div class="mb-6 flex items-center gap-4">
            <div class="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-100 text-2xl">😊</div>
            <div>
              <p class="font-semibold text-slate-900">{{ testimonial.name }}</p>
              <p class="text-sm text-slate-500">{{ testimonial.role }} · {{ testimonial.company }}</p>
            </div>
          </div>
          <p class="text-slate-600 leading-8">"{{ testimonial.content }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Testimonial } from "~/types";

const testimonials: Testimonial[] = [
  {
    id: "rider-1",
    name: "Marco",
    role: "Delivery Rider",
    company: "Rome, Italy",
    content:
      "Feroferto made onboarding super quick, and I love the transparent payroll system. I get paid faster and can track my earnings in real time.",
  },
  {
    id: "ops-1",
    name: "Elena",
    role: "Operations Manager",
    company: "EFOOD Expansion Team",
    content:
      "We integrated Feroferto in two weeks and immediately saw our onboarding costs drop significantly. The platform handles compliance automatically.",
  },
  {
    id: "platform-1",
    name: "Sofia",
    role: "Platform Lead",
    company: "Volt Logistics",
    content:
      "Feroferto's API integration was smooth. We can now manage riders across multiple delivery services without operational overhead.",
  },
];

useScrollAnimation();
</script>
