<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 border-b border-white/20 glass backdrop-saturate-150 transition-all duration-500"
    :class="{ 'shadow-2xl': scrolled }"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
      <!-- Logo with creative styling -->
      <a
        href="#"
        class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700"
      >
        <NuxtImg
          src="/images/Logo_MasterFile_Website icons.png"
          alt="FeroFerto Logo"
          width="60"
          height="60"
          class="inline-block mr-2 -mt-1"
        />
        FeroFerto
      </a>
      <div class="hidden lg:flex items-center gap-8">
        <div class="flex gap-8">
          <a
            href="#services"
            class="text-lg font-bold text-slate-700 relative group hover:text-primary-700 transition-colors duration-200"
          >
            Services
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            href="#workflow"
            class="text-lg font-bold text-slate-700 relative group hover:text-primary-700 transition-colors duration-200"
          >
            Workflow
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            href="#why"
            class="text-lg font-bold text-slate-700 relative group hover:text-primary-700 transition-colors duration-200"
          >
            Why
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            href="#testimonials"
            class="text-lg font-bold text-slate-700 relative group hover:text-primary-700 transition-colors duration-200"
          >
            Testimonials
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </div>
      </div>

      <!-- CTA and Menu buttons -->
      <div class="flex items-center gap-3">
        <button
          @click="scrollToContact"
          class="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-primary-500/50 hover:shadow-2xl hover:-translate-y-0.5 relative group overflow-hidden"
        >
          <span
            class="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></span>
          <span class="relative z-10">Get Started</span>
          <span
            class="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            >→</span
          >
        </button>

        <!-- Enhanced mobile menu toggle -->
        <button
          @click="toggleMenu"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/60 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm text-slate-700 transition-all duration-300 hover:border-primary-400 hover:shadow-lg lg:hidden group"
          aria-label="Open navigation"
        >
          <div class="relative w-5 h-5 flex flex-col justify-center gap-1.5">
            <span
              class="h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300"
              :class="{ 'rotate-45 translate-y-2': showMobileMenu }"
            ></span>
            <span
              class="h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300"
              :class="{ 'opacity-0': showMobileMenu }"
            ></span>
            <span
              class="h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-2': showMobileMenu }"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Enhanced mobile menu with futuristic design -->
    <transition name="slide-down">
      <div
        v-if="showMobileMenu"
        class="border-t border-white/20 bg-gradient-to-b from-white/95 via-white/90 to-white/85 backdrop-blur-2xl lg:hidden"
      >
        <div class="mx-auto flex flex-col gap-4 px-6 py-8 text-sm">
          <a
            @click="closeMenu"
            href="#services"
            class="px-4 py-2 rounded-lg text-slate-700 hover:text-primary-700 hover:bg-primary-50/50 transition-all duration-200 font-medium"
          >
            Services
          </a>
          <a
            @click="closeMenu"
            href="#workflow"
            class="px-4 py-2 rounded-lg text-slate-700 hover:text-primary-700 hover:bg-primary-50/50 transition-all duration-200 font-medium"
          >
            Workflow
          </a>
          <a
            @click="closeMenu"
            href="#why"
            class="px-4 py-2 rounded-lg text-slate-700 hover:text-primary-700 hover:bg-primary-50/50 transition-all duration-200 font-medium"
          >
            Why
          </a>
          <a
            @click="closeMenu"
            href="#testimonials"
            class="px-4 py-2 rounded-lg text-slate-700 hover:text-primary-700 hover:bg-primary-50/50 transition-all duration-200 font-medium"
          >
            Testimonials
          </a>
          <button
            @click="scrollToContact"
            class="mt-4 w-full rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
const showMobileMenu = ref(false);
const scrolled = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrolled.value = window.scrollY > 10;
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", () => {});
});

const toggleMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const closeMenu = () => {
  showMobileMenu.value = false;
};

const scrollToContact = () => {
  const contactSection = document.getElementById("cta");
  if (contactSection) {
    closeMenu();
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
