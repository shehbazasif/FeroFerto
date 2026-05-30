<template>
  <section id="services" class="py-24 bg-white">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center mb-16">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Our services</p>
        <h2 class="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">End-to-end rider enablement for every platform</h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">A carefully designed service grid powering onboarding, accessories supply, payroll, tracking and integrations across delivery networks.</p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="(service, idx) in services" :key="service.id" class="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-soft" data-scroll-fade :style="{ animationDelay: `${idx * 0.08}s` }" data-hover-lift>
          <div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 text-2xl text-white shadow-lg">{{ service.icon }}</div>
          <h3 class="text-2xl font-semibold text-slate-900 mb-3">{{ service.title }}</h3>
          <p class="text-slate-600 mb-6">{{ service.description }}</p>
          <ul class="space-y-3 text-sm text-slate-600">
            <li v-for="feature in service.features" :key="feature" class="flex gap-3">
              <span class="mt-1 text-primary-600">•</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Service } from "~/types";

const services: Service[] = [
  {
    id: "onboarding",
    title: "Rider Onboarding",
    description: "Streamlined registration and KYC verification with automated workflows and clear status tracking.",
    icon: "📝",
    features: ["Quick profile setup", "Document verification", "Multi-language experience", "Automated compliance"],
  },
  {
    id: "verification",
    title: "Verification & Compliance",
    description: "Continuous identity checks and audit-ready compliance monitoring for riders and platforms.",
    icon: "✅",
    features: ["KYC automation", "Background screening", "Audit trails", "Policy enforcement"],
  },
  {
    id: "accessories",
    title: "Accessories Supply",
    description: "Manage bags, helmets, uniforms, and equipment lifecycle through a centralized rider inventory hub.",
    icon: "🎒",
    features: ["Inventory tracking", "Condition monitoring", "Fast replacements", "Supplier coordination"],
  },
  {
    id: "payroll",
    title: "Payroll Processing",
    description: "Automated earnings calculation and secure payouts with optional multi-currency support.",
    icon: "💰",
    features: ["Automated payouts", "Tax reconciliation", "Transparent statements", "Fast settlement"],
  },
  {
    id: "tracking",
    title: "Real-time Tracking",
    description: "Live GPS, delivery status, and rider performance metrics for reliable operations.",
    icon: "📍",
    features: ["Live location", "Performance dashboards", "Status alerts", "Delivery optimization"],
  },
  {
    id: "integration",
    title: "Platform Integration",
    description: "Seamless EFOOD, Volt, and custom API integrations with secure data synchronization.",
    icon: "🔗",
    features: ["API/webhook support", "Data sync", "Secure connections", "Custom workflows"],
  },
];

useScrollAnimation();
</script>
