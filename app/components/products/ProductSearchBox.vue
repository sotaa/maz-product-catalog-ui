<script setup lang="ts">
const { searchInput, applySearch, removeSearch } = useProductFilters();
</script>

<template>
  <ProductFilterCard>
    <span class="text-[13px] font-medium leading-4 text-[#445A74]">
      فیلتر و جستجو
    </span>

    <div
      class="flex h-10 items-center gap-2 rounded-xl border border-[#D1DBE8] px-3 transition-colors focus-within:border-primary"
    >
      <AppIcon name="search" size="size-4" class="shrink-0 text-primary" />

      <span class="h-5 w-px shrink-0 bg-[#D1DBE8]" />

      <input
        v-model="searchInput"
        type="text"
        placeholder="جستجو کنید"
        class="h-full flex-1 bg-transparent text-sm text-navy outline-none placeholder:text-[#647E9A]"
        @keyup.enter="applySearch"
      />

      <button
        v-if="searchInput"
        type="button"
        class="flex shrink-0 items-center justify-center"
        aria-label="پاک کردن جستجو"
        @click="removeSearch"
      >
        <AppIcon name="close" size="size-4" class="text-[#647E9A]" />
      </button>
    </div>

    <AppButton
      variant="contained"
      class="h-10 w-full !rounded-xl"
      @click="applySearch"
    >
      جستجو
    </AppButton>
  </ProductFilterCard>
</template>
