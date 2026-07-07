<script setup lang="ts">
import type { BreadcrumbItem } from '~/components/ui/AppBreadcrumb.vue'

definePageMeta({
  layout: 'default',
})

const route = useRoute()
const productId = computed(() => route.params.id)

const breadcrumbItems: BreadcrumbItem[] = [
  { text: 'لیست محصولات‌ها', link: '/products' },
  { text: 'اتوماتیک بازویی' },
]
</script>

<template>
  <section>
    <AppBreadcrumb :items="breadcrumbItems" />

    <h1 class="mt-6 text-2xl font-bold text-navy">جزئیات محصول</h1>
    <p class="mt-2 text-sm text-navy/70">
      محصول {{ productId }} — به‌زودی تکمیل می‌شود.
    </p>
  </section>
</template>
