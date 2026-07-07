<script setup lang="ts">
import { NAV_ITEMS } from "~/constants/navigation";

defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

function handleNavigate() {
  emit("close");
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="fixed inset-0 z-[60] md:hidden">
        <button
          type="button"
          class="absolute inset-0 bg-black/20"
          aria-label="بستن منو"
          @click="emit('close')"
        />

        <nav
          class="absolute inset-x-0 top-[60px] rounded-2xl bg-white px-4 py-3 shadow-[0px_2px_2px_0px_#00000014]"
        >
          <ul class="divide-y divide-gray-100">
            <li v-for="item in NAV_ITEMS" :key="item.link">
              <AppHeaderNavItem
                :item="item"
                class="py-3"
                @navigate="handleNavigate"
              />
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>
