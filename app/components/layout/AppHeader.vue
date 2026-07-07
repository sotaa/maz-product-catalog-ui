<script setup lang="ts">
import { CONTACT_ROUTE, NAV_ITEMS } from "~/constants/navigation";

const isMenuOpen = ref(false);
const route = useRoute();

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

watch(
  () => route.path,
  () => {
    closeMenu();
  },
);
</script>

<template>
  <header
    class="relative z-50 w-full rounded-b-2xl bg-white shadow-[0px_2px_2px_0px_#00000014]"
  >
    <!-- Desktop & tablet -->
    <div
      class="relative app-container hidden h-[120px] items-center justify-center md:flex"
    >
      <AppButton
        :to="CONTACT_ROUTE"
        variant="contained"
        icon="phone-call-2"
        icon-position="end"
        icon-class="size-[13.33px]"
        class="absolute left-0 w-[107px] text-sm font-bold leading-4"
      >
        تماس
      </AppButton>

      <nav class="flex items-center gap-6">
        <AppHeaderNavItem
          v-for="item in NAV_ITEMS"
          :key="item.link"
          :item="item"
        />
      </nav>
    </div>

    <!-- Mobile -->
    <div class="flex h-[72px] items-center justify-between p-4 md:hidden">
      <AppButton
        variant="outlined"
        icon="fi_menu"
        icon-only
        aria-label="منو"
        @click="toggleMenu"
      />

      <AppButton
        :to="CONTACT_ROUTE"
        variant="outlined"
        icon="phone-call-2"
        icon-only
        aria-label="تماس"
      />
    </div>

    <AppHeaderMobileMenu :open="isMenuOpen" @close="closeMenu" />
  </header>
</template>
