<script setup lang="ts">
import { FOOTER_SOCIAL_LINKS } from '~/constants/footer'

defineProps<{
  icon: string
  href: string
  label: string
}>()
</script>

<template>
  <a
    :href="href"
    :aria-label="label"
    class="inline-flex text-social transition-opacity hover:opacity-80"
    target="_blank"
    rel="noopener noreferrer"
  >
    <AppIcon :name="icon" size="size-6" />
  </a>
</template>
