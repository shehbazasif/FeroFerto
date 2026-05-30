<template>
  <section id="cta" class="py-24 bg-white">
    <div class="mx-auto max-w-4xl px-6">
      <div class="text-center mb-12">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Get started</p>
        <h2 class="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Ready to transform your rider operations?</h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">Join platforms and riders using Feroferto to streamline onboarding, payroll, compliance, and live coordination.</p>
      </div>

      <div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-12 shadow-3d">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-semibold text-slate-900 mb-2">Full name</label>
            <input id="name" v-model="form.name" type="text" required placeholder="Your name" class="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label for="email" class="block text-sm font-semibold text-slate-900 mb-2">Email address</label>
              <input id="email" v-model="form.email" type="email" required placeholder="your@email.com" class="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
            </div>
            <div>
              <label for="company" class="block text-sm font-semibold text-slate-900 mb-2">Company / platform</label>
              <input id="company" v-model="form.company" type="text" placeholder="Your company" class="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
            </div>
          </div>

          <div>
            <label for="message" class="block text-sm font-semibold text-slate-900 mb-2">Message</label>
            <textarea id="message" v-model="form.message" placeholder="Tell us about your needs..." rows="5" required class="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"></textarea>
          </div>

          <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button type="submit" :disabled="isSubmitting" class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-3d-soft disabled:cursor-not-allowed disabled:opacity-60">
              {{ isSubmitting ? "Sending..." : "Request a demo" }}
            </button>
            <p class="text-sm text-slate-600">We respond within 24 hours.</p>
          </div>

          <Transition enter-active-class="transition-all duration-300" enter-from-class="opacity-0 transform scale-95" enter-to-class="opacity-100 transform scale-100">
            <div v-if="showSuccess" class="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
              ✓ Thanks for reaching out! We’ll be in touch shortly.
            </div>
          </Transition>
        </form>

        <div class="mt-12 grid gap-6 md:grid-cols-3 pt-12 border-t border-slate-200">
          <div class="rounded-3xl bg-white p-6 text-center shadow-sm">
            <p class="text-3xl font-semibold text-primary-700">💬</p>
            <p class="mt-4 font-semibold text-slate-900">Live support</p>
            <p class="mt-2 text-sm text-slate-500">24/7 rider and platform support.</p>
          </div>
          <div class="rounded-3xl bg-white p-6 text-center shadow-sm">
            <p class="text-3xl font-semibold text-primary-700">📧</p>
            <p class="mt-4 font-semibold text-slate-900">Email</p>
            <p class="mt-2 text-sm text-primary-700 font-medium">hello@feroferto.com</p>
          </div>
          <div class="rounded-3xl bg-white p-6 text-center shadow-sm">
            <p class="text-3xl font-semibold text-primary-700">📱</p>
            <p class="mt-4 font-semibold text-slate-900">Call us</p>
            <p class="mt-2 text-sm text-primary-700 font-medium">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ContactFormData } from "~/types";

const form = reactive<ContactFormData>({
  name: "",
  email: "",
  company: "",
  message: "",
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1400));
    form.name = "";
    form.email = "";
    form.company = "";
    form.message = "";
    showSuccess.value = true;
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  } finally {
    isSubmitting.value = false;
  }
};

useScrollAnimation();
</script>
