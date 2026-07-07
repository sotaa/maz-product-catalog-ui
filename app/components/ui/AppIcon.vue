<script setup lang="ts">
import { getIconSvg } from '~/utils/icons'

const props = withDefaults(
  defineProps<{
    name: string
    size?: string
  }>(),
  {
    size: 'size-4',
  },
)

const svgContent = computed(() => getIconSvg(props.name))
</script>

<template>
  <span
    class="inline-flex shrink-0 [&>svg]:size-full"
    :class="size"
    aria-hidden="true"
    v-html="svgContent"
  />
</template>
