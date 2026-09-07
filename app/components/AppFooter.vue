<script setup lang="ts">
interface SocialItems {
  label: string;
  shortLabel: string;
  icon: "facebook" | "instagram" | "youtube" | "twitter" | "linkedin";
  href: string;
  title: string;
}

const socials: readonly SocialItems[] = [
  {
    label: "Facebook",
    shortLabel: "f",
    icon: "facebook",
    href: "https://facebook.com",
    title: "Follow us on Facebook",
  },
  {
    label: "Instagram",
    shortLabel: "◎",
    icon: "instagram",
    href: "https://instagram.com",
    title: "Follow us on Instagram",
  },
  {
    label: "YouTube",
    shortLabel: "▶",
    icon: "youtube",
    href: "https://youtube.com",
    title: "Subscribe to our YouTube channel",
  },
  {
    label: "Twitter",
    shortLabel: "X",
    icon: "twitter",
    href: "https://twitter.com",
    title: "Follow us on Twitter",
  },
  {
    label: "LinkedIn",
    shortLabel: "in",
    icon: "linkedin",
    href: "https://linkedin.com",
    title: "Connect with us on LinkedIn",
  },
] as const;
</script>

<template>
  <footer class="bg-black text-white">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid gap-12 md:grid-cols-4">
        <div>
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center">
              <NuxtImg
                src="/images/logo.png"
                alt="FeroFerto Logo"
                class="h-10 w-10"
              />
            </div>
            <div>
              <p class="text-md font-bold uppercase tracking-[0.3em]">
                Feroferto
              </p>
              <p class="font-semibold t">Rider Enablement</p>
            </div>
          </div>
          <p class="text-sm leading-7">
            Enterprise-grade rider workforce enablement for delivery platforms
            and independent riders.
          </p>
        </div>

        <div>
          <p class="mb-4 font-semibold">Product</p>
          <ul class="space-y-3 text-sm">
            <li>
              <a href="#services" class="hover:text-primary-500">Features</a>
            </li>
            <li>
              <a href="#workflow" class="hover:text-primary-500"
                >How it works</a
              >
            </li>
            <li>
              <a href="#why" class="hover:text-primary-300">Why Feroferto</a>
            </li>
            <li>
              <a href="#testimonials" class="hover:text-primary-300"
                >Testimonials</a
              >
            </li>
          </ul>
        </div>

        <div>
          <p class="mb-4 font-semibold">Company</p>
          <ul class="space-y-3 text-sm">
            <li>
              <NuxtLink href="/about" class="hover:text-primary-300"
                >About</NuxtLink
              >
            </li>
            <li><a href="#" class="hover:text-primary-300">Blog</a></li>
            <li><a href="#" class="hover:text-primary-300">Careers</a></li>
            <li>
              <NuxtLink href="/contact" class="hover:text-primary-300"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div>
          <p class="mb-4 font-semibold">Legal</p>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-primary-300">Privacy</a></li>
            <li><a href="#" class="hover:text-primary-300">Terms</a></li>
            <li><a href="#" class="hover:text-primary-300">Data Policy</a></li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 border-t border-primary-100 pt-8 text-sm text-primary-400 md:flex md:items-center md:justify-between"
      >
        <p>© 2025 Feroferto. All rights reserved.</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <NuxtLink
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noreferrer"
            class="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-950"
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
              v-else-if="social.icon === 'youtube'"
              class="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M21.6 7.2a2.99 2.99 0 0 0-2.1-2.1C17.65 4.6 12 4.6 12 4.6s-5.65 0-7.5.5a2.99 2.99 0 0 0-2.1 2.1c-.5 1.85-.5 4.8-.5 4.8s0 2.95.5 4.8a2.99 2.99 0 0 0 2.1 2.1c1.85.5 7.5.5 7.5.5s5.65 0 7.5-.5a2.99 2.99 0 0 0 2.1-2.1c.5-1.85.5-4.8.5-4.8s0-2.95-.5-4.8ZM10.1 15.3V8.7l5.7 3.3-5.7 3.3Z"
              />
            </svg>
            <svg
              v-else-if="social.icon === 'twitter'"
              class="h-[17px] w-[17px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M18.9 2.5h3.68l-8.04 9.19L24 21.5h-7.4l-5.8-7.58-6.63 7.58H.48l7.85-8.97L0 2.5h7.59l5.24 6.93L18.9 2.5Zm-1.29 17.05h2.04L6.48 4.35H4.29l13.32 15.2Z"
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
                d="M5.5 3.5A2.5 2.5 0 1 1 5.5 8a2.5 2.5 0 0 1 0-4.5ZM3.3 9.5h4.4v11H3.3v-11ZM10.4 9.5h4.2V11c.6-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.4h-4.4v-4.8c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v4.9h-4.5v-11Z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
