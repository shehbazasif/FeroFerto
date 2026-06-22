<template>
  <footer class="bg-neutral-50 text-slate-900">
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
              <p class="text-sm uppercase tracking-[0.3em] text-primary-700">
                Feroferto
              </p>
              <p class="font-semibold text-slate-900">Rider Enablement</p>
            </div>
          </div>
          <p class="text-sm leading-7 text-slate-400">
            Enterprise-grade rider workforce enablement for delivery platforms
            and independent riders.
          </p>
        </div>

        <div>
          <p class="mb-4 font-semibold text-slate-900">Product</p>
          <ul class="space-y-3 text-sm text-slate-400">
            <li>
              <a href="#services" class="hover:text-primary-300">Features</a>
            </li>
            <li>
              <a href="#workflow" class="hover:text-primary-300"
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
          <p class="mb-4 font-semibold text-slate-900">Company</p>
          <ul class="space-y-3 text-sm text-slate-400">
            <li>
              <NuxtLink href="/about" class="hover:text-primary-300"
                >About</NuxtLink
              >
            </li>
            <li><a href="#" class="hover:text-primary-300">Blog</a></li>
            <li><a href="#" class="hover:text-primary-300">Careers</a></li>
            <li><a href="#cta" class="hover:text-primary-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <p class="mb-4 font-semibold text-slate-900">Legal</p>
          <ul class="space-y-3 text-sm text-slate-400">
            <li><a href="#" class="hover:text-primary-300">Privacy</a></li>
            <li><a href="#" class="hover:text-primary-300">Terms</a></li>
            <li><a href="#" class="hover:text-primary-300">Data Policy</a></li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 border-t border-primary-100 pt-8 text-sm text-slate-500 md:flex md:items-center md:justify-between"
      >
        <p>© 2025 Feroferto. All rights reserved.</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a
            href="#"
            aria-label="Twitter"
            class="transition-colors duration-200 hover:text-primary-600"
            >Twitter</a
          >
          <a
            href="#"
            aria-label="LinkedIn"
            class="transition-colors duration-200 hover:text-primary-600"
            >LinkedIn</a
          >
          <a
            href="#"
            aria-label="GitHub"
            class="transition-colors duration-200 hover:text-primary-600"
            >GitHub</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
