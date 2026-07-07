<script setup lang="ts">
import { isNavItemActive } from "~/constants/navigation";
import type { NavItem } from "~/constants/navigation";

const props = defineProps<{
  item: NavItem;
}>();

const emit = defineEmits<{
  navigate: [];
}>();

const route = useRoute();

const isActive = computed(() => isNavItemActive(props.item.link, route.path));
</script>

<template>
  <NuxtLink
    :to="item.link"
    class="relative flex items-center gap-2 pb-1 transition-colors"
    :class="isActive ? 'text-primary' : 'text-navy'"
    @click="emit('navigate')"
  >
    <AppIcon :name="item.icon" size="size-4" />
    <span class="text-[13px] font-medium leading-6">{{ item.text }}</span>
    <span
      v-if="isActive"
      class="absolute -bottom-1 left-1/2 hidden size-[5px] -translate-x-1/2 rounded-full bg-primary md:block"
      aria-hidden="true"
    />
  </NuxtLink>
</template>
