<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="flex min-h-[40vh] flex-col items-center justify-center text-center">
    <h1 class="text-2xl font-bold text-navy">{{ title }}</h1>
    <p class="mt-3 max-w-md text-sm leading-7 text-navy/70">
      این صفحه هنوز آماده نشده است. به‌زودی محتوای آن در دسترس قرار می‌گیرد.
    </p>
  </section>
</template>
