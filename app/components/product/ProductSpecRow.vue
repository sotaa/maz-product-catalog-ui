<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2 md:flex-row md:gap-2">
    <div
      class="flex min-h-12 w-full items-center bg-[#F5F7FA] px-4 py-3 text-right text-sm font-medium leading-none text-[#57728E] rounded-tl-[4px] rounded-tr-2xl rounded-br-2xl rounded-bl-[4px] md:w-[172px] md:shrink-0"
    >
      {{ label }}
    </div>

    <div
      class="flex min-h-12 w-full items-center bg-[#F5F7FA] px-4 py-3 text-right text-[13px] font-bold leading-5 text-[#30445B] rounded-tl-2xl rounded-tr-[4px] rounded-br-[4px] rounded-bl-2xl"
    >
      <slot />
    </div>
  </div>
</template>
