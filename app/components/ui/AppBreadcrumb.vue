<script setup lang="ts">
import { NuxtLink } from "#components";

export interface BreadcrumbItem {
  text: string;
  link?: string;
}

const props = defineProps<{
  items: BreadcrumbItem[];
}>();

const HOME_ITEM: BreadcrumbItem = { text: "خانه", link: "/" };

const allItems = computed<BreadcrumbItem[]>(() => [HOME_ITEM, ...props.items]);
</script>

<template>
  <nav aria-label="مسیر صفحه">
    <ol class="flex flex-wrap items-center gap-2 text-[#6783A0]">
      <li
        v-for="(item, index) in allItems"
        :key="index"
        class="flex items-center gap-2"
      >
        <AppIcon
          v-if="index > 0"
          name="arrow-left"
          size="size-5"
          class="shrink-0"
        />

        <component
          :is="item.link ? NuxtLink : 'span'"
          :to="item.link"
          class="flex items-center gap-1 align-middle text-sm font-bold leading-4"
          :class="item.link ? 'transition-colors hover:text-primary' : ''"
          :aria-current="!item.link ? 'page' : undefined"
        >
          <AppIcon
            v-if="index === 0"
            name="home"
            size="size-[18px]"
            class="shrink-0"
          />
          <span v-else>{{ item.text }}</span>
        </component>
      </li>
    </ol>
  </nav>
</template>
