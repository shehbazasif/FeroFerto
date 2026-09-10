<script setup lang="ts">
interface SocialItems {
  label: string;
  icon: string;
  href: string;
}

const socials: readonly SocialItems[] = [
  {
    label: "Facebook",
    icon: "simple-icons:facebook",
    href: "https://facebook.com",
  },
  {
    label: "Instagram",
    icon: "simple-icons:instagram",
    href: "https://instagram.com",
  },
  {
    label: "YouTube",
    icon: "simple-icons:youtube",
    href: "https://youtube.com",
  },
  {
    label: "Twitter",
    icon: "simple-icons:twitter",
    href: "https://twitter.com",
  },
  {
    label: "LinkedIn",
    icon: "simple-icons:linkedin",
    href: "https://linkedin.com",
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
            <li>
              <a href="/career" class="hover:text-primary-300">Careers</a>
            </li>
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
            class="flex h-9 w-9 items-center justify-center bg-orange-600 rounded-full text-white hover:bg-slate-100 hover:text-orange-600"
          >
            <Icon
              :name="social.icon"
              class="h-[18px] w-[18px]"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
