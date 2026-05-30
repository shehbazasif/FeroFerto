<template>
  <div class="min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden">
    <Navbar />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

if (process.client) {
  onMounted(() => {
    const preloadImages = [
      "https://images.unsplash.com/photo-1547649432-ba9d1d1b91f1?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
    ];

    preloadImages.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      document.head.appendChild(link);
    });
  });
}
</script>

<style scoped>
:deep(html) {
  scroll-behavior: smooth;
}
</style>
