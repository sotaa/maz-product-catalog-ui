<script setup lang="ts">
const props = defineProps<{
  title: string
  image: string
}>()

const isZoomOpen = ref(false)

function openZoom() {
  isZoomOpen.value = true
}

function closeZoom() {
  isZoomOpen.value = false
}

watch(isZoomOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div
    class="flex flex-col gap-8 rounded-3xl bg-white px-6 py-8 shadow-[0px_1px_2px_0px_#0000000F]"
  >
    <h1
      class="text-right text-lg font-bold leading-6 text-navy md:text-2xl"
    >
      {{ title }}
    </h1>

    <div class="relative w-full">
      <img
        :src="image"
        :alt="title"
        class="h-[235px] w-full rounded-2xl object-cover md:h-[310px]"
        loading="lazy"
      />

      <button
        type="button"
        class="absolute right-2 top-2 flex size-10 items-center justify-center rounded-lg bg-[#00000080] text-white backdrop-blur-[1px] transition-opacity hover:opacity-90"
        aria-label="بزرگ‌نمایی تصویر"
        @click="openZoom"
      >
        <AppIcon name="search-zoom-in" size="size-6" />
      </button>
    </div>
  </div>

  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
        role="dialog"
        aria-modal="true"
        @click="closeZoom"
      >
        <button
          type="button"
          class="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20"
          aria-label="بستن"
          @click="closeZoom"
        >
          &times;
        </button>

        <img
          :src="image"
          :alt="props.title"
          class="max-h-full max-w-full rounded-2xl object-contain"
          @click.stop
        />
      </div>
    </Transition>
  </Teleport>
</template>
