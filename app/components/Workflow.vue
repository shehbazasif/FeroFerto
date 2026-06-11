<template>
  <section
    id="workflow"
    class="py-24 bg-gradient-to-b from-white to-primary-50"
  >
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center mb-20">
        <p
          class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
        >
          How it works
        </p>
        <h2 class="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
          A smooth rider lifecycle from registration to payroll
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Every stage is designed for clarity, speed, and rider satisfaction
          without sacrificing operational control.
        </p>
      </div>

      <div class="relative">
        <div
          class="hidden md:block absolute left-1/2 top-10 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary-300 to-primary-600"
        ></div>
        <div class="grid gap-10 md:grid-cols-2">
          <div
            v-for="(step, idx) in steps"
            :key="step.id"
            class="relative md:px-8"
            :class="idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'"
          >
            <div
              class="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-3d-soft"
              data-scroll-fade
              :style="{ animationDelay: `${idx * 0.1}s` }"
              data-hover-lift
            >
              <div
                class="absolute -left-5 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg md:-left-6"
              >
                {{ idx + 1 }}
              </div>
              <div class="mb-4 text-4xl">{{ step.icon }}</div>
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">
                {{ step.title }}
              </h3>
              <p class="text-slate-600 mb-4">{{ step.description }}</p>
              <ul class="space-y-3 text-sm text-slate-600">
                <li
                  v-for="detail in step.details"
                  :key="detail"
                  class="flex gap-3"
                >
                  <span
                    class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary-600"
                  ></span>
                  <span>{{ detail }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { WorkflowStep } from "~/types";

const steps: WorkflowStep[] = [
  {
    id: 1,
    title: "Registration",
    description:
      "Riders onboard quickly with intuitive registration and platform selection.",
    icon: "📋",
    details: [
      "Quick account creation",
      "Profile verification",
      "Platform alignment",
      "Transparent status updates",
    ],
  },
  {
    id: 2,
    title: "Verification",
    description:
      "Automated KYC and compliance checks keep riders ready for active assignments.",
    icon: "✔️",
    details: [
      "Identity checks",
      "Document review",
      "Compliance approvals",
      "Real-time alerts",
    ],
  },
  {
    id: 3,
    title: "Assignment",
    description:
      "Riders receive optimized jobs across EFOOD, Wolt, and integrated networks.",
    icon: "📍",
    details: [
      "Smart job matching",
      "Route optimization",
      "Push notifications",
      "Shift coordination",
    ],
  },
  {
    id: 4,
    title: "Live Coordination",
    description:
      "Track rider performance and keep everyone connected during deliveries.",
    icon: "🔄",
    details: [
      "Real-time tracking",
      "Support hub",
      "Performance analytics",
      "Equipment monitoring",
    ],
  },
  {
    id: 5,
    title: "Payroll",
    description:
      "Automated earnings, tax handling, and payouts make rider payments painless.",
    icon: "💳",
    details: [
      "Earnings automation",
      "Tax reconciliation",
      "Secure payouts",
      "Clear reporting",
    ],
  },
];

useScrollAnimation();
</script>
