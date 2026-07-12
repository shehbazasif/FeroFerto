<template>
  <main
    class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_55%)] px-4 py-20 sm:px-6 lg:px-8"
  >
    <div class="mx-auto flex max-w-6xl flex-col gap-8">
      <Navbar />
      <section
        class="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-2xl shadow-slate-200/60 backdrop-blur xl:p-12"
      >
        <div
          class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div class="max-w-2xl space-y-4">
            <span
              class="inline-flex rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700"
            >
              {{ headingBadge }}
            </span>
            <h1
              class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl"
            >
              {{ pageTitle }}
            </h1>
            <p class="text-lg text-slate-600">
              {{ pageDescription }}
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600"
          >
            <p class="font-semibold text-slate-900">What happens next?</p>
            <ul class="mt-3 space-y-2">
              <li>• We review your application and documents.</li>
              <li>• Our team contacts you by email or phone.</li>
              <li>• You receive onboarding guidance for your account.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          class="rounded-[2rem] border border-slate-200/70 bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/20"
        >
          <h2 class="text-2xl font-bold">Why join FeroFerto?</h2>
          <div class="mt-6 space-y-4 text-sm text-slate-300">
            <div class="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p class="font-semibold text-white">Fast onboarding</p>
              <p class="mt-1">
                A simple application flow with guided document submission.
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p class="font-semibold text-white">Support for every role</p>
              <p class="mt-1">
                Riders and partner companies get a dedicated pathway.
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p class="font-semibold text-white">Secure submissions</p>
              <p class="mt-1">
                Enter your details and upload documents directly from this page.
              </p>
            </div>
          </div>
        </div>

        <div
          class="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-2xl shadow-slate-200/50 sm:p-8"
        >
          <div class="flex flex-wrap gap-2 rounded-full bg-slate-100 p-1">
            <button
              type="button"
              class="rounded-full px-4 py-2 text-sm font-semibold transition"
              :class="
                mode === 'signup'
                  ? 'bg-primary-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              "
              @click="mode = 'signup'"
            >
              Create account
            </button>
            <button
              type="button"
              class="rounded-full px-4 py-2 text-sm font-semibold transition"
              :class="
                mode === 'signin'
                  ? 'bg-primary-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              "
              @click="mode = 'signin'"
            >
              Sign in
            </button>
          </div>

          <form
            v-if="mode === 'signup'"
            class="mt-6 space-y-5"
            @submit.prevent="submitApplication"
          >
            <div class="grid gap-4 md:grid-cols-2">
              <label class="block text-sm font-medium text-slate-700">
                Full name
                <input
                  v-model="form.fullName"
                  type="text"
                  required
                  class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                />
              </label>

              <label class="block text-sm font-medium text-slate-700">
                Email address
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                />
              </label>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <label class="block text-sm font-medium text-slate-700">
                Phone number
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                />
              </label>

              <label class="block text-sm font-medium text-slate-700">
                {{ isRider ? "Driver licence number" : "Company contact role" }}
                <input
                  v-model="form.secondaryField"
                  type="text"
                  required
                  class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                />
              </label>
            </div>

            <div v-if="isRider" class="grid gap-4 md:grid-cols-2">
              <label class="block text-sm font-medium text-slate-700">
                Rider type
                <select
                  v-model="form.riderType"
                  class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                >
                  <option>Greek National</option>
                  <option>Non-Greek</option>
                </select>
              </label>

              <label class="block text-sm font-medium text-slate-700">
                Vehicle type
                <select
                  v-model="form.vehicleType"
                  class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                >
                  <option>Electrical vehicle</option>
                  <option>Non-electrical vehicle</option>
                </select>
              </label>
            </div>

            <div v-else class="grid gap-4 md:grid-cols-2">
              <label class="block text-sm font-medium text-slate-700">
                Company name
                <input
                  v-model="form.companyName"
                  type="text"
                  required
                  class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                />
              </label>

              <label class="block text-sm font-medium text-slate-700">
                Company type
                <input
                  v-model="form.companyType"
                  type="text"
                  required
                  class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                />
              </label>
            </div>

            <div
              class="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4"
            >
              <label class="block text-sm font-medium text-slate-700">
                Supporting documents
                <input
                  v-model="form.documents"
                  type="text"
                  placeholder="ID, licence, work permit, CV, company docs"
                  class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <p class="mt-2 text-xs text-slate-500">
                You can attach files in the next step or send them to
                support@feroferto.com.
              </p>
            </div>

            <label class="block text-sm font-medium text-slate-700">
              Additional notes
              <textarea
                v-model="form.notes"
                rows="4"
                class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
              />
            </label>

            <button
              type="submit"
              class="w-full rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Submit {{ isRider ? "rider" : "partner" }} application
            </button>
          </form>

          <form v-else class="mt-6 space-y-5" @submit.prevent="submitSignIn">
            <label class="block text-sm font-medium text-slate-700">
              Email or phone
              <input
                v-model="signinForm.identifier"
                type="text"
                required
                class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
              />
            </label>

            <label class="block text-sm font-medium text-slate-700">
              Password
              <input
                v-model="signinForm.password"
                type="password"
                required
                class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
              />
            </label>

            <button
              type="submit"
              class="w-full rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-300 hover:text-primary-700"
            >
              Sign in to my account
            </button>
          </form>

          <div
            v-if="submittedMessage"
            class="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700"
          >
            {{ submittedMessage }}
          </div>
        </div>
      </section>
      <AppFooter />
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const mode = ref<"signup" | "signin">("signup");
const submittedMessage = ref("");

const type = computed(() => {
  const value = route.params.type;
  return Array.isArray(value) ? value[0] : value;
});

const isRider = computed(() => type.value === "rider");
const pageTitle = computed(() =>
  isRider.value ? "Become a Rider" : "Become a Partner",
);
const headingBadge = computed(() =>
  isRider.value ? "Rider onboarding" : "Partner onboarding",
);
const pageDescription = computed(() =>
  isRider.value
    ? "Create your rider account, choose your rider profile, and submit the documents we need to verify your application."
    : "Create your partner account, share your company details, and start working with FeroFerto for your delivery team.",
);

useHead({
  title: `${pageTitle.value} | FeroFerto`,
  meta: [
    {
      name: "description",
      content: isRider.value
        ? "Join FeroFerto as a rider with a guided application form for Greek nationals and non-Greek riders."
        : "Join FeroFerto as a partner company with a guided onboarding form for your business.",
    },
  ],
});

const form = reactive({
  fullName: "",
  email: "",
  phone: "",
  secondaryField: "",
  riderType: "Greek National",
  vehicleType: "Electrical vehicle",
  documents: "",
  notes: "",
  companyName: "",
  companyType: "",
});

const signinForm = reactive({
  identifier: "",
  password: "",
});

const submitApplication = () => {
  submittedMessage.value = isRider.value
    ? `Thanks ${form.fullName || "there"}! Your rider request has been received. We will review your documents and contact you shortly.`
    : `Thanks ${form.fullName || "there"}! Your partner request has been received. We will review your company details and contact you shortly.`;
};

const submitSignIn = () => {
  submittedMessage.value = `Welcome back. We have received your sign in request for ${signinForm.identifier}.`;
};
</script>
