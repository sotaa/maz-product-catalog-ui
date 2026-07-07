<script setup lang="ts">
import { SORT_OPTIONS } from "~/constants/productFilters";

const { sortKey, setSort } = useProductFilters();
</script>

<template>
  <ProductFilterCard>
    <AppAccordion title="مرتب سازی">
      <label
        v-for="option in SORT_OPTIONS"
        :key="option.key"
        class="flex cursor-pointer items-center gap-2"
      >
        <input
          type="radio"
          name="product-sort"
          class="size-4 accent-primary"
          :value="option.key"
          :checked="sortKey === option.key"
          @change="setSort(option.key)"
        />
        <span
          class="text-xs font-medium leading-4"
          :class="sortKey === option.key ? 'text-[#344456]' : 'text-[#647E9A]'"
        >
          {{ option.label }}
        </span>
      </label>
    </AppAccordion>
  </ProductFilterCard>
</template>
