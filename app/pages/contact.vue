<template>
  <div
    class="min-h-screen bg-[linear-gradient(135deg,#fffaf6_0%,#fff7ed_45%,#ffffff_100%)] text-slate-900"
  >
    <Navbar />

    <main class="pt-24 pb-20">
      <section class="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div class="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div
            class="rounded-[2rem] border border-orange-100/80 bg-gradient-to-br from-white via-orange-50/70 to-white p-8 shadow-3d sm:p-10 lg:p-12"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.3em] text-primary-700"
            >
              Contact us
            </p>
            <h1 class="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Let’s make rider operations feel effortless.
            </h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you need support with onboarding, coordination, or rider
              enablement, our team is ready to help you move faster with
              confidence.
            </p>

            <div class="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@feroferto.gr"
                class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                Email us
              </a>
              <a
                href="tel:+306943252014"
                class="inline-flex items-center justify-center rounded-full border border-primary-200 bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition-all duration-300 hover:border-primary-400 hover:bg-primary-50"
              >
                Call now
              </a>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-2">
              <div
                class="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
              >
                <p class="text-sm font-semibold text-slate-500">Email</p>
                <a
                  href="mailto:info@feroferto.gr"
                  class="mt-2 block text-base font-semibold text-primary-700 transition-colors duration-200 hover:text-primary-800"
                >
                  info@feroferto.gr
                </a>
              </div>
              <div
                class="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
              >
                <p class="text-sm font-semibold text-slate-500">Phone</p>
                <a
                  href="tel:+306943252014"
                  class="mt-2 block text-base font-semibold text-primary-700 transition-colors duration-200 hover:text-primary-800"
                >
                  +30 694 325 2014
                </a>
              </div>
            </div>
          </div>

          <div
            class="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-3d sm:p-10 lg:p-12"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
            >
              How we help
            </p>
            <div class="mt-6 space-y-4">
              <div
                class="rounded-2xl border border-orange-100 bg-orange-50/70 p-5"
              >
                <h2 class="text-xl font-semibold text-slate-900">
                  Rider onboarding support
                </h2>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                  Simplify onboarding, compliance, and platform readiness with
                  expert guidance.
                </p>
              </div>
              <div
                class="rounded-2xl border border-orange-100 bg-orange-50/70 p-5"
              >
                <h2 class="text-xl font-semibold text-slate-900">
                  Operations coordination
                </h2>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                  Improve communication, scheduling, and performance visibility
                  for your rider network.
                </p>
              </div>
              <div
                class="rounded-2xl border border-orange-100 bg-orange-50/70 p-5"
              >
                <h2 class="text-xl font-semibold text-slate-900">
                  Fast response
                </h2>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                  We reply promptly and tailor support to your team’s growth
                  stage and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-6 pb-8">
        <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            class="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-8 shadow-sm sm:p-10"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.3em] text-primary-700"
            >
              Get in touch
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">
              Share what you’re building and we’ll help you shape it.
            </h2>
            <p class="mt-4 text-base leading-8 text-slate-600">
              Send us a message with your company, goals, or questions. We’ll
              get back to you shortly with the right next steps.
            </p>

            <div class="mt-8 space-y-4 text-sm text-slate-600">
              <div class="flex items-start gap-3">
                <span class="mt-1 text-lg text-primary-700">✉</span>
                <div>
                  <p class="font-semibold text-slate-900">Email</p>
                  <a
                    href="mailto:info@feroferto.gr"
                    class="mt-1 inline-block text-primary-700 hover:text-primary-800"
                    >info@feroferto.gr</a
                  >
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="mt-1 text-lg text-primary-700">☎</span>
                <div>
                  <p class="font-semibold text-slate-900">Phone</p>
                  <a
                    href="tel:+306943252014"
                    class="mt-1 inline-block text-primary-700 hover:text-primary-800"
                    >+30 694 325 2014</a
                  >
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="mt-1 text-lg text-primary-700">⏰</span>
                <div>
                  <p class="font-semibold text-slate-900">Response time</p>
                  <p class="mt-1">Usually within one business day.</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-3d sm:p-10"
          >
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    for="name"
                    class="mb-2 block text-sm font-semibold text-slate-900"
                    >Full name</label
                  >
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Your name"
                    class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="mb-2 block text-sm font-semibold text-slate-900"
                    >Email address</label
                  >
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>

              <div>
                <label
                  for="company"
                  class="mb-2 block text-sm font-semibold text-slate-900"
                  >Company or platform</label
                >
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  placeholder="Your company"
                  class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label
                  for="message"
                  class="mb-2 block text-sm font-semibold text-slate-900"
                  >Message</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  placeholder="Tell us about your needs..."
                  class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div
                class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <button
                  type="submit"
                  class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-7 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  Send message
                </button>
                <p class="text-sm text-slate-500">
                  We typically respond within one business day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const form = reactive<ContactFormData>({
  name: "",
  email: "",
  company: "",
  message: "",
});

const handleSubmit = () => {
  const subject = encodeURIComponent(
    `New inquiry from ${form.name || "a visitor"}`,
  );
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "Not provided"}\n\nMessage:\n${form.message}`,
  );

  window.location.href = `mailto:info@feroferto.gr?subject=${subject}&body=${body}`;
};

definePageMeta({
  title: "Contact Feroferto",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Feroferto for rider onboarding support, platform coordination, and operational guidance.",
    },
  ],
});
</script>
