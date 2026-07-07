<script setup lang="ts">
interface AppliedBadge {
  id: string;
  text: string;
  icon?: string;
  remove: () => void;
}

const {
  searchQuery,
  sortKey,
  sortLabel,
  selectedCategories,
  removeSearch,
  removeSort,
  removeCategory,
} = useProductFilters();

const badges = computed<AppliedBadge[]>(() => {
  const list: AppliedBadge[] = [];

  if (searchQuery.value) {
    list.push({
      id: "search",
      text: searchQuery.value,
      icon: "search",
      remove: removeSearch,
    });
  }

  if (sortKey.value) {
    list.push({
      id: "sort",
      text: sortLabel.value,
      icon: "u_sort-amount-down",
      remove: removeSort,
    });
  }

  for (const category of selectedCategories.value) {
    list.push({
      id: `category-${category}`,
      text: category,
      remove: () => removeCategory(category),
    });
  }

  return list;
});
</script>

<template>
  <div
    class="flex min-h-16 w-full items-center justify-between gap-4 rounded-3xl bg-white px-4 py-3 shadow-[0px_2px_3px_0px_#00000008]"
  >
    <h2 class="shrink-0 text-sm font-medium leading-4 text-[#253343]">
      فیلترهای اعمال‌شده
    </h2>

    <div class="flex flex-wrap items-center justify-end gap-2">
      <span
        v-for="badge in badges"
        :key="badge.id"
        class="inline-flex h-8 items-center gap-2 rounded-2xl bg-[#FCE5EE] px-2"
      >
        <AppIcon
          v-if="badge.icon"
          :name="badge.icon"
          size="size-4"
          class="text-[#0A2A51]"
        />
        <span class="text-xs text-[#0A2A51]">{{ badge.text }}</span>
        <button
          type="button"
          aria-label="حذف فیلتر"
          @click="badge.remove"
          class="flex items-center justify-center"
        >
          <AppIcon name="close" size="size-4" class="text-[#0A2A51]" />
        </button>
      </span>

      <span v-if="!badges.length" class="text-xs text-[#647E9A]">
        فیلتری اعمال نشده است
      </span>
    </div>
  </div>
</template>
