<template>
  <nav class="fixed inset-x-0 top-0 z-50 border-b border-white/20 glass backdrop-saturate-150 transition-transform duration-500">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
      <NuxtLink to="/" class="flex items-center gap-3 text-sm font-semibold transition-all duration-300 hover:opacity-80">
        <div class="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-3d text-white">
          ⚡
        </div>
        <div class="hidden sm:block">
          <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Feroferto</p>
          <p class="font-semibold text-slate-900">Rider Enablement</p>
        </div>
      </NuxtLink>

      <div class="hidden lg:flex items-center gap-10 text-sm text-slate-700">
        <a href="#services" class="hover:text-primary-700 transition-colors duration-200">Services</a>
        <a href="#workflow" class="hover:text-primary-700 transition-colors duration-200">Workflow</a>
        <a href="#why" class="hover:text-primary-700 transition-colors duration-200">Why</a>
        <a href="#testimonials" class="hover:text-primary-700 transition-colors duration-200">Testimonials</a>
      </div>

      <div class="flex items-center gap-3">
        <button @click="scrollToContact" class="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-3d-soft">
          Get Started
          <span aria-hidden="true">→</span>
        </button>

        <button @click="toggleMenu" class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors duration-200 hover:border-primary-300 lg:hidden" aria-label="Open navigation">
          <span class="text-xl">☰</span>
        </button>
      </div>
    </div>

    <transition name="slide-down">
      <div v-if="showMobileMenu" class="border-t border-white/20 bg-white/95 backdrop-blur-xl lg:hidden">
        <div class="mx-auto flex flex-col gap-4 px-6 py-6 text-sm text-slate-700">
          <a @click="closeMenu" href="#services" class="hover:text-primary-700">Services</a>
          <a @click="closeMenu" href="#workflow" class="hover:text-primary-700">Workflow</a>
          <a @click="closeMenu" href="#why" class="hover:text-primary-700">Why</a>
          <a @click="closeMenu" href="#testimonials" class="hover:text-primary-700">Testimonials</a>
          <button @click="scrollToContact" class="mt-2 rounded-full bg-primary-600 px-5 py-3 text-white transition-all duration-200 hover:bg-primary-700">
            Get Started
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
const showMobileMenu = ref(false);
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

<style scoped>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-down-enter-active {
  animation: slideDown 220ms ease-out forwards;
}
</style>
