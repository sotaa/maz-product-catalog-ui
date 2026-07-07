<template>
  <div class="flex min-h-screen flex-col bg-surface">
    <AppHeader />

    <div class="flex-1">
      <main class="app-container px-4 py-8 md:px-0">
        <slot />
      </main>
    </div>

    <AppFooter />
  </div>
</template>
