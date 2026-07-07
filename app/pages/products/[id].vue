<script setup lang="ts">
import type { BreadcrumbItem } from '~/components/ui/AppBreadcrumb.vue'

definePageMeta({
  layout: 'default',
})

const route = useRoute()
const productId = computed(() => route.params.id as string)

const { data: product, pending, error, refresh } = useProduct(productId)

const breadcrumbItems = computed<BreadcrumbItem[]>(() => [
  { text: 'لیست محصولات', link: '/products' },
  { text: product.value?.title ?? 'جزئیات محصول' },
])
</script>

<template>
  <section>
    <AppBreadcrumb :items="breadcrumbItems" />

    <div class="mt-6">
      <!-- Loading -->
      <div v-if="pending" class="flex flex-col gap-6">
        <div
          class="flex flex-col gap-8 rounded-3xl bg-white px-6 py-8 shadow-[0px_1px_2px_0px_#0000000F]"
        >
          <div class="h-7 w-1/3 animate-pulse self-end rounded bg-surface" />
          <div
            class="h-[235px] w-full animate-pulse rounded-2xl bg-surface md:h-[310px]"
          />
        </div>
        <div
          class="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-[0px_1px_2px_0px_#0000000F]"
        >
          <div class="h-6 w-32 animate-pulse self-end rounded bg-surface" />
          <div
            v-for="n in 4"
            :key="n"
            class="h-12 w-full animate-pulse rounded-2xl bg-surface"
          />
        </div>
      </div>

      <!-- Error -->
      <div
        v-else-if="error"
        class="flex flex-col items-center justify-center gap-4 rounded-3xl bg-white py-16 text-center shadow-[0px_1px_2px_0px_#0000000F]"
      >
        <p class="text-sm text-navy/70">
          خطا در دریافت اطلاعات محصول. لطفاً دوباره تلاش کنید.
        </p>
        <AppButton variant="outlined" @click="refresh">تلاش مجدد</AppButton>
      </div>

      <!-- Content -->
      <div v-else-if="product" class="flex flex-col gap-6">
        <ProductGallery :title="product.title" :image="product.image" />
        <ProductSpecs :product="product" />
      </div>
    </div>
  </section>
</template>
