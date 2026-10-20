<script setup lang="ts">
interface RentalApplication {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  platform: string;
  location: string;
  startDate: string;
  notes: string;
}

interface DriverApplication {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  licence: string;
  experience: string;
  availability: string;
  notes: string;
}

const rentalForm = reactive<RentalApplication>({
  company: "",
  contactName: "",
  email: "",
  phone: "",
  platform: "",
  location: "",
  startDate: "",
  notes: "",
});

const driverForm = reactive<DriverApplication>({
  fullName: "",
  email: "",
  phone: "",
  location: "",
  licence: "",
  experience: "",
  availability: "",
  notes: "",
});

const fieldClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

const rentalFeedback = ref("");
const rentalFeedbackType = ref<"success" | "error" | "">("");
const submittingRental = ref(false);
const driverFeedback = ref("");
const driverFeedbackType = ref<"success" | "error" | "">("");
const submittingDriver = ref(false);

const submitRentalApplication = async () => {
  submittingRental.value = true;
  rentalFeedback.value = "";
  rentalFeedbackType.value = "";

  try {
    await $fetch("/api/van-application", {
      method: "POST",
      body: { type: "rental", ...rentalForm },
    });
    rentalFeedbackType.value = "success";
    rentalFeedback.value =
      "Your rental enquiry has been sent. We’ve also emailed a confirmation to you.";
  } catch {
    rentalFeedbackType.value = "error";
    rentalFeedback.value =
      "We couldn’t send your enquiry. Please try again or email van@feroferto.gr.";
  } finally {
    submittingRental.value = false;
  }
};

const submitDriverApplication = async () => {
  submittingDriver.value = true;
  driverFeedback.value = "";
  driverFeedbackType.value = "";

  try {
    await $fetch("/api/van-application", {
      method: "POST",
      body: { type: "driver", ...driverForm },
    });
    driverFeedbackType.value = "success";
    driverFeedback.value =
      "Your driver application has been sent. We’ve also emailed a confirmation to you.";
  } catch {
    driverFeedbackType.value = "error";
    driverFeedback.value =
      "We couldn’t send your application. Please try again or email van@feroferto.gr.";
  } finally {
    submittingDriver.value = false;
  }
};

useHead({
  title: "Van Rental & Driver Opportunities | FeroFerto",
  meta: [
    {
      name: "description",
      content:
        "Ask FeroFerto about renting our delivery van for your company or apply to drive with our delivery team.",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900">
    <Navbar />

    <main>
      <section class="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          class="pointer-events-none absolute -right-32 -top-40 -z-10 size-[34rem] rounded-full bg-orange-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          class="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.85fr] lg:px-10 lg:py-24"
        >
          <div>
            <p
              class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-orange-200"
            >
              <span class="size-2 rounded-full bg-orange-400" />
              FeroFerto fleet opportunities
            </p>
            <h1
              class="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              A van for your
              <span class="text-orange-400">next delivery run.</span>
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We have a van available for delivery work. Delivery companies can
              enquire about renting it, and drivers can apply to get behind the
              wheel.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a
                href="#rent-the-van"
                class="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Enquire about renting
              </a>
              <a
                href="#driver-application"
                class="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Apply as a driver
              </a>
            </div>
          </div>

          <div
            class="relative mx-auto flex aspect-[1.15] w-full max-w-lg items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8"
            aria-label="Illustration of a delivery van"
            role="img"
          >
            <div
              class="absolute inset-0 opacity-20"
              style="
                background-image: radial-gradient(#fff 0.7px, transparent 0.7px);
                background-size: 18px 18px;
              "
              aria-hidden="true"
            />
            <div class="relative w-full max-w-sm">
              <div class="mb-3 flex items-center justify-between">
                <span
                  class="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300"
                  >Delivery ready</span
                >
                <span class="text-sm text-slate-400">FeroFerto</span>
              </div>
              <svg
                class="w-full drop-shadow-2xl"
                viewBox="0 0 480 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M35 63C35 48.64 46.64 37 61 37H293C307.36 37 319 48.64 319 63V169H35V63Z"
                  fill="#F8FAFC"
                />
                <path
                  d="M319 87H379.4C389.06 87 397.9 92.34 402.38 100.9L435 163.24V169H319V87Z"
                  fill="#F8FAFC"
                />
                <path
                  d="M339 105H372.8C377.2 105 381.25 107.38 383.39 111.22L403 146H339V105Z"
                  fill="#CBD5E1"
                />
                <path d="M63 57H289V149H63V57Z" fill="#E2E8F0" />
                <path d="M35 157H435V184H35V157Z" fill="#EA580C" />
                <path d="M35 184H435V193H35V184Z" fill="#C2410C" />
                <path
                  d="M85 105H267"
                  stroke="#94A3B8"
                  stroke-width="5"
                  stroke-linecap="round"
                />
                <path
                  d="M85 122H220"
                  stroke="#94A3B8"
                  stroke-width="5"
                  stroke-linecap="round"
                />
                <circle cx="119" cy="190" r="29" fill="#0F172A" />
                <circle cx="119" cy="190" r="13" fill="#CBD5E1" />
                <circle cx="366" cy="190" r="29" fill="#0F172A" />
                <circle cx="366" cy="190" r="13" fill="#CBD5E1" />
                <path d="M419 151H435V166H419V151Z" fill="#FBBF24" />
              </svg>
              <p class="mt-4 text-center text-sm text-slate-400">
                Interested? Tell us how you’d put it to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div class="mx-auto max-w-2xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700"
          >
            Two ways to get started
          </p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Make the van work for you.
          </h2>
          <p class="mt-4 leading-7 text-slate-600">
            Whether you represent a delivery company or you’re looking for a
            driving opportunity, send us a few details and our team will be in
            touch.
          </p>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href="#rent-the-van"
            class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-8"
          >
            <span
              class="flex size-12 items-center justify-center rounded-xl bg-orange-50 text-orange-700"
              aria-hidden="true"
            >
              <svg
                class="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 7.5A1.5 1.5 0 0 1 4.5 6h10A1.5 1.5 0 0 1 16 7.5V16H3V7.5ZM16 10h3.1a1.5 1.5 0 0 1 1.3.75l1.1 1.9V16h-5.5v-6ZM7 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                />
              </svg>
            </span>
            <h3 class="mt-5 text-xl font-bold">Rent the van for your company</h3>
            <p class="mt-2 leading-7 text-slate-600">
              Share your delivery operation, location, and preferred start date
              so we can discuss availability and rental details.
            </p>
            <span
              class="mt-5 inline-flex items-center gap-2 font-semibold text-orange-700 group-hover:text-orange-800"
            >
              Company rental enquiry
              <span aria-hidden="true">→</span>
            </span>
          </a>

          <a
            href="#driver-application"
            class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-8"
          >
            <span
              class="flex size-12 items-center justify-center rounded-xl bg-orange-50 text-orange-700"
              aria-hidden="true"
            >
              <svg
                class="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                />
              </svg>
            </span>
            <h3 class="mt-5 text-xl font-bold">Apply for a driver role</h3>
            <p class="mt-2 leading-7 text-slate-600">
              Tell us where you’re based, your driving background, and when
              you’re available.
            </p>
            <span
              class="mt-5 inline-flex items-center gap-2 font-semibold text-orange-700 group-hover:text-orange-800"
            >
              Driver application
              <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </section>

      <section
        class="border-y border-slate-200 bg-slate-50"
        aria-label="Applications"
      >
        <div class="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div class="grid gap-8 lg:grid-cols-2">
            <div
              id="rent-the-van"
              class="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <p
                class="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700"
              >
                For delivery companies
              </p>
              <h2 class="mt-3 text-2xl font-bold">Enquire about renting</h2>
              <p class="mt-2 text-sm leading-6 text-slate-600">
                Share your details and what you need. We’ll follow up to discuss
                the van, availability, and rental terms.
              </p>

              <form
                class="mt-6 space-y-4"
                @submit.prevent="submitRentalApplication"
              >
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="block text-sm font-medium text-slate-700">
                    Company name
                    <input
                      v-model="rentalForm.company"
                      :class="fieldClass"
                      type="text"
                      autocomplete="organization"
                      required
                      placeholder="Your company"
                    />
                  </label>
                  <label class="block text-sm font-medium text-slate-700">
                    Contact name
                    <input
                      v-model="rentalForm.contactName"
                      :class="fieldClass"
                      type="text"
                      autocomplete="name"
                      required
                      placeholder="Your name"
                    />
                  </label>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="block text-sm font-medium text-slate-700">
                    Work email
                    <input
                      v-model="rentalForm.email"
                      :class="fieldClass"
                      type="email"
                      autocomplete="email"
                      required
                      placeholder="you@company.com"
                    />
                  </label>
                  <label class="block text-sm font-medium text-slate-700">
                    Phone number
                    <input
                      v-model="rentalForm.phone"
                      :class="fieldClass"
                      type="tel"
                      autocomplete="tel"
                      required
                      placeholder="+30"
                    />
                  </label>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="block text-sm font-medium text-slate-700">
                    Delivery platform
                    <input
                      v-model="rentalForm.platform"
                      :class="fieldClass"
                      type="text"
                      placeholder="Platform or delivery service"
                    />
                  </label>
                  <label class="block text-sm font-medium text-slate-700">
                    Operating location
                    <input
                      v-model="rentalForm.location"
                      :class="fieldClass"
                      type="text"
                      required
                      placeholder="City or area"
                    />
                  </label>
                </div>
                <label class="block text-sm font-medium text-slate-700">
                  Preferred start date
                  <input
                    v-model="rentalForm.startDate"
                    :class="fieldClass"
                    type="date"
                  />
                </label>
                <label class="block text-sm font-medium text-slate-700">
                  What would you like us to know?
                  <textarea
                    v-model="rentalForm.notes"
                    :class="fieldClass"
                    rows="3"
                    placeholder="Tell us about your delivery operation or rental needs"
                  />
                </label>
                <button
                  type="submit"
                  :disabled="submittingRental"
                  class="inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  {{ submittingRental ? "Sending…" : "Send rental enquiry" }}
                </button>
                <p
                  v-if="rentalFeedback"
                  class="rounded-xl p-3 text-sm"
                  :class="
                    rentalFeedbackType === 'success'
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'bg-red-50 text-red-800'
                  "
                  :role="rentalFeedbackType === 'error' ? 'alert' : 'status'"
                  aria-live="polite"
                >
                  {{ rentalFeedback }}
                </p>
              </form>
            </div>

            <div
              id="driver-application"
              class="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <p
                class="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700"
              >
                For drivers
              </p>
              <h2 class="mt-3 text-2xl font-bold">Apply to drive</h2>
              <p class="mt-2 text-sm leading-6 text-slate-600">
                Interested in driving a delivery van? Introduce yourself and
                tell us about your experience and availability.
              </p>

              <form
                class="mt-6 space-y-4"
                @submit.prevent="submitDriverApplication"
              >
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="block text-sm font-medium text-slate-700">
                    Full name
                    <input
                      v-model="driverForm.fullName"
                      :class="fieldClass"
                      type="text"
                      autocomplete="name"
                      required
                      placeholder="Your name"
                    />
                  </label>
                  <label class="block text-sm font-medium text-slate-700">
                    Email
                    <input
                      v-model="driverForm.email"
                      :class="fieldClass"
                      type="email"
                      autocomplete="email"
                      required
                      placeholder="you@email.com"
                    />
                  </label>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="block text-sm font-medium text-slate-700">
                    Phone number
                    <input
                      v-model="driverForm.phone"
                      :class="fieldClass"
                      type="tel"
                      autocomplete="tel"
                      required
                      placeholder="+30"
                    />
                  </label>
                  <label class="block text-sm font-medium text-slate-700">
                    Location
                    <input
                      v-model="driverForm.location"
                      :class="fieldClass"
                      type="text"
                      required
                      placeholder="City or area"
                    />
                  </label>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="block text-sm font-medium text-slate-700">
                    Driving licence details
                    <input
                      v-model="driverForm.licence"
                      :class="fieldClass"
                      type="text"
                      placeholder="Licence category or experience"
                    />
                  </label>
                  <label class="block text-sm font-medium text-slate-700">
                    Driving experience
                    <input
                      v-model="driverForm.experience"
                      :class="fieldClass"
                      type="text"
                      placeholder="Years or relevant experience"
                    />
                  </label>
                </div>
                <label class="block text-sm font-medium text-slate-700">
                  Availability
                  <input
                    v-model="driverForm.availability"
                    :class="fieldClass"
                    type="text"
                    placeholder="When can you start?"
                  />
                </label>
                <label class="block text-sm font-medium text-slate-700">
                  A little about yourself
                  <textarea
                    v-model="driverForm.notes"
                    :class="fieldClass"
                    rows="3"
                    placeholder="Share any other details relevant to your application"
                  />
                </label>
                <button
                  type="submit"
                  :disabled="submittingDriver"
                  class="inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  {{ submittingDriver ? "Sending…" : "Send driver application" }}
                </button>
                <p
                  v-if="driverFeedback"
                  class="rounded-xl p-3 text-sm"
                  :class="
                    driverFeedbackType === 'success'
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'bg-red-50 text-red-800'
                  "
                  :role="driverFeedbackType === 'error' ? 'alert' : 'status'"
                  aria-live="polite"
                >
                  {{ driverFeedback }}
                </p>
              </form>
            </div>
          </div>
          <p class="mt-5 text-center text-sm text-slate-500">
            Your application is sent to
            <a
              href="mailto:van@feroferto.gr"
              class="font-medium text-orange-700 underline underline-offset-2 hover:text-orange-800"
              >van@feroferto.gr</a
            >. We’ll also email a confirmation to the address you provide.
            <NuxtLink
              to="/contact"
              class="font-medium text-orange-700 underline underline-offset-2 hover:text-orange-800"
            >
              Contact us
            </NuxtLink>
            if you need help.
          </p>
        </div>
      </section>

      <section class="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 lg:py-16">
        <h2 class="text-2xl font-bold">Questions before you apply?</h2>
        <p class="mt-3 leading-7 text-slate-600">
          We’re happy to talk through the rental details or the driving role
          before you send an application.
        </p>
        <NuxtLink
          to="/contact"
          class="mt-6 inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-orange-300 hover:text-orange-700"
        >
          Get in touch
        </NuxtLink>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
