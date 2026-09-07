<script setup lang="ts">
interface NavItem {
  title: string;
  href: string;
}

interface SocialLink {
  label: string;
  shortLabel: string;
  icon: "facebook" | "instagram" | "youtube";
  href: string;
}

const navLinks: readonly NavItem[] = [
  { title: "Services", href: "/#services" },
  { title: "How it works", href: "/#workflow" },
  { title: "For riders", href: "/#why" },
  { title: "For partners", href: "/#testimonials" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
] as const;

const socials: readonly SocialLink[] = [
  {
    label: "Facebook",
    shortLabel: "f",
    icon: "facebook",
    href: "https://facebook.com",
  },
  {
    label: "Instagram",
    shortLabel: "◎",
    icon: "instagram",
    href: "https://instagram.com",
  },
  {
    label: "YouTube",
    shortLabel: "▶",
    icon: "youtube",
    href: "https://youtube.com",
  },
] as const;

const showMobileMenu = ref(false);

const toggleMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const closeMenu = () => {
  showMobileMenu.value = false;
};
</script>

<template>
  <header class="border-b border-slate-200/80 bg-white">
    <div
      class="mx-auto flex min-h-[4.5rem] max-w-[1400px] items-center gap-6 px-5 sm:px-8 lg:px-10"
    >
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center gap-2.5 text-[1.05rem] font-semibold tracking-[-0.02em] text-slate-950"
      >
        <NuxtImg
          src="/images/logo.png"
          alt="FeroFerto logo"
          width="34"
          height="34"
          class="h-[34px] w-auto"
        />
        <span>FeroFerto</span>
      </NuxtLink>

      <nav
        aria-label="Main navigation"
        class="ml-auto hidden items-center gap-1 xl:flex"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.title"
          :to="link.href"
          class="rounded-md px-3.5 py-2 text-[0.9rem] font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950"
          active-class="!text-slate-950"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>

      <div class="ml-auto hidden items-center gap-4 xl:flex">
        <div class="h-7 w-px bg-slate-200" aria-hidden="true"></div>
        <nav aria-label="Social media" class="flex items-center gap-1">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noreferrer"
            class="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            <svg
              v-if="social.icon === 'facebook'"
              class="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.36 1.58-4.36 4.48V10H7v3h2.82v8h3.68Z"
              />
            </svg>
            <svg
              v-else-if="social.icon === 'instagram'"
              class="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.6"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            <svg
              v-else
              class="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M21.6 7.2a2.99 2.99 0 0 0-2.1-2.1C17.65 4.6 12 4.6 12 4.6s-5.65 0-7.5.5a2.99 2.99 0 0 0-2.1 2.1c-.5 1.85-.5 4.8-.5 4.8s0 2.95.5 4.8a2.99 2.99 0 0 0 2.1 2.1c1.85.5 7.5.5 7.5.5s5.65 0 7.5-.5a2.99 2.99 0 0 0 2.1-2.1c.5-1.85.5-4.8.5-4.8s0-2.95-.5-4.8ZM10.1 15.3V8.7l5.7 3.3-5.7 3.3Z"
              />
            </svg>
          </a>
        </nav>
        <div class="h-7 w-px bg-slate-200" aria-hidden="true"></div>
        <NuxtLink
          to="/auth"
          class="whitespace-nowrap text-[0.9rem] font-medium text-slate-700 transition-colors hover:text-slate-950"
        >
          Sign in
        </NuxtLink>
        <NuxtLink
          to="/join/riders"
          class="whitespace-nowrap rounded bg-orange-600 px-5 py-2 text-[0.9rem] font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Become a rider
        </NuxtLink>
      </div>

      <button
        type="button"
        class="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 xl:hidden"
        :aria-expanded="showMobileMenu"
        aria-controls="extra-nav-mobile-menu"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <svg
          v-if="showMobileMenu"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path stroke-linecap="round" d="m6 6 12 12M18 6 6 18" />
        </svg>
        <svg
          v-else
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </div>

    <div
      v-if="showMobileMenu"
      id="extra-nav-mobile-menu"
      class="border-t border-slate-200 bg-white px-5 py-4 sm:px-8 xl:hidden"
    >
      <nav aria-label="Mobile navigation" class="flex flex-col">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.title"
          :to="link.href"
          class="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 last:border-0"
          @click="closeMenu"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>
      <div
        class="mt-4 flex items-center justify-between border-t border-slate-100 pt-4"
      >
        <div class="flex items-center gap-1">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noreferrer"
            class="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-950"
          >
            <span class="text-xs font-bold">{{ social.shortLabel }}</span>
          </a>
        </div>
        <div class="flex items-center gap-4">
          <NuxtLink
            to="/auth"
            class="text-sm font-medium text-slate-700"
            @click="closeMenu"
            >Sign in</NuxtLink
          >
          <NuxtLink
            to="/join/riders"
            class="rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white"
            @click="closeMenu"
            >Become a rider</NuxtLink
          >
        </div>
      </div>
    </div>
  </header>
</template>
