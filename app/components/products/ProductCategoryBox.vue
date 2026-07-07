<script setup lang="ts">
import { toPersianNumber } from "~/utils/format";

const { categories } = useCategories();
const { selectedCategories, toggleCategory } = useProductFilters();

function isSelected(name: string) {
  return selectedCategories.value.includes(name);
}
</script>

<template>
  <ProductFilterCard>
    <AppAccordion title="دسته بندی">
      <label
        v-for="category in categories"
        :key="category.name"
        class="flex cursor-pointer items-center justify-between"
      >
        <span class="flex items-center gap-2">
          <span class="relative inline-flex size-[16px] shrink-0">
            <input
              type="checkbox"
              class="peer size-[16px] cursor-pointer appearance-none rounded-[4px] border border-[#D1DBE8] bg-white transition-colors checked:border-primary checked:bg-primary"
              :checked="isSelected(category.name)"
              @change="toggleCategory(category.name)"
            />
            <svg
              class="pointer-events-none absolute inset-0 m-auto hidden size-3 text-white peer-checked:block"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2.5 6.5L5 9L9.5 3.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span
            class="text-xs font-medium leading-4"
            :class="
              isSelected(category.name) ? 'text-[#344456]' : 'text-[#647E9A]'
            "
          >
            {{ category.name }}
          </span>
        </span>

        <span
          class="flex size-6 shrink-0 items-center justify-center rounded-md text-xs text-white"
          :class="isSelected(category.name) ? 'bg-primary' : 'bg-[#141928]'"
        >
          {{ toPersianNumber(category.count) }}
        </span>
      </label>
    </AppAccordion>
  </ProductFilterCard>
</template>
