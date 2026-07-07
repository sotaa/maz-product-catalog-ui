<script setup lang="ts">
import { NuxtLink } from '#components'

type ButtonVariant = 'contained' | 'outlined'
type ButtonType = 'primary'
type ButtonSize = 'md'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    type?: ButtonType
    size?: ButtonSize
    icon?: string
    iconClass?: string
    iconOnly?: boolean
    iconPosition?: 'start' | 'end'
    to?: string
  }>(),
  {
    variant: 'contained',
    type: 'primary',
    size: 'md',
    iconOnly: false,
    iconPosition: 'start',
  },
)

defineOptions({ inheritAttrs: false })

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const attrs = useAttrs()

const tag = computed(() => (props.to ? NuxtLink : 'button'))

const variantClasses = computed(() => {
  if (props.type === 'primary' && props.variant === 'contained') {
    return 'border-0 bg-primary text-white'
  }

  if (props.type === 'primary' && props.variant === 'outlined') {
    return 'border border-primary bg-white text-primary'
  }

  return ''
})

const sizeClasses = computed(() => {
  if (props.size === 'md') {
    return props.iconOnly ? 'size-10 p-0' : 'h-10 px-4 py-3'
  }

  return ''
})

const radiusClasses = computed(() =>
  props.iconOnly ? 'rounded-lg' : 'rounded-2xl',
)
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :type="tag === 'button' ? 'button' : undefined"
    class="inline-flex items-center justify-center gap-2 font-yekan transition-colors"
    :class="[variantClasses, sizeClasses, radiusClasses, attrs.class]"
    v-bind="{ ...attrs, class: undefined }"
    @click="emit('click', $event)"
  >
    <template v-if="iconPosition === 'start'">
      <AppIcon v-if="icon" :name="icon" :class="iconClass" />
      <span v-if="!iconOnly" class="leading-none">
        <slot />
      </span>
    </template>
    <template v-else>
      <span v-if="!iconOnly" class="leading-none">
        <slot />
      </span>
      <AppIcon v-if="icon" :name="icon" :class="iconClass" />
    </template>
  </component>
</template>
