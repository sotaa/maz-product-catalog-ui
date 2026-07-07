<script setup lang="ts">
import type { FooterLink } from "~/constants/footer";

defineProps<{
  title?: string;
  links: FooterLink[];
  highlightFirst?: boolean;
}>();
</script>

<template>
  <div>
    <h3
      v-if="title"
      class="mb-[24px] text-[20px] font-bold leading-6 text-navy"
    >
      {{ title }}
    </h3>

    <ul class="space-y-[16px]">
      <li v-for="(link, index) in links" :key="link.link">
        <NuxtLink
          :to="link.link"
          class="text-[13px] font-normal leading-6 transition-colors hover:text-primary"
          :class="'text-navy/80'"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
