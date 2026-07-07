<script setup lang="ts">
import type { FooterTopSocialLink } from "~/constants/footer";

defineProps<{
  title: string;
  links: FooterTopSocialLink[];
}>();
</script>

<template>
  <div>
    <h3 class="mb-[24px] text-[20px] font-bold leading-6 text-navy">
      {{ title }}
    </h3>

    <ul class="space-y-[16px]">
      <li v-for="link in links" :key="link.icon">
        <a
          :href="link.link"
          class="flex items-center gap-2 text-[13px] font-normal leading-6 text-navy/80 transition-colors hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            class="inline-flex size-[24px] shrink-0 items-center justify-center rounded-full text-[#6783A0]"
          >
            <AppIcon :name="link.icon" size="size-[24px]" />
          </span>
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
