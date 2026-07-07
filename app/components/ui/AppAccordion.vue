<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    defaultOpen?: boolean;
  }>(),
  {
    defaultOpen: true,
  },
);

const open = ref(props.defaultOpen);

function toggle() {
  open.value = !open.value;
}
</script>

<template>
  <div class="flex flex-col gap-[20px]">
    <button
      type="button"
      class="flex w-full items-center justify-between"
      :aria-expanded="open"
      @click="toggle"
    >
      <span class="text-[13px] font-medium leading-4 text-[#445A74]">
        {{ title }}
      </span>
      <AppIcon
        name="arrow-down"
        size="size-4"
        class="text-[#6783A0] transition-transform"
        :class="{ 'rotate-180': !open }"
      />
    </button>

    <div v-show="open" class="flex flex-col gap-[20px]">
      <slot />
    </div>
  </div>
</template>
