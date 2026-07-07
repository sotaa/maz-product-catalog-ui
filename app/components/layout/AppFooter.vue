<script setup lang="ts">
import enamadImg from "~/assets/icons/enamad.png";
import sabtImg from "~/assets/icons/sabt.png";
import {
  FOOTER_COPYRIGHT,
  FOOTER_GUIDE_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_SUPPORT_TEXT,
  FOOTER_TOP_SOCIAL_LINKS,
} from "~/constants/footer";
</script>

<template>
  <footer
    class="overflow-hidden rounded-t-2xl bg-white shadow-[0px_-2px_2px_0px_#0000000A]"
  >
    <!-- Top part -->
    <div class="px-5 py-[30px] pb-[40px] md:px-0">
      <div
        class="app-container flex flex-col gap-14 bg-white pt-5 md:flex-row lg:gap-10 xl:gap-32"
      >
        <div class="flex items-end md:pb-5">
          <p class="text-[13px] font-normal leading-6 text-navy/80">
            {{ FOOTER_SUPPORT_TEXT }}
          </p>
        </div>
        <div
          class="grid grid-cols-2 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:gap-16 lg:gap-8 xl:gap-32"
        >
          <AppFooterLinkColumn
            title="دسترسی سریع"
            :links="FOOTER_QUICK_LINKS"
            highlight-first
          />

          <AppFooterLinkColumn
            title="راهنمای سایت"
            :links="FOOTER_GUIDE_LINKS"
          />

          <AppFooterSocialColumn
            title="شبکه‌های اجتماعی"
            :links="FOOTER_TOP_SOCIAL_LINKS"
          />
        </div>
      </div>
    </div>

    <!-- Bottom part — full width -->
    <div
      class="w-full rounded-2xl bg-footer-muted shadow-[0px_2px_2px_0px_#00000014]"
    >
      <div class="app-container relative px-5 py-6 md:px-0 md:py-8">
        <div
          class="mx-auto flex max-w-[320px] flex-col items-center text-center"
        >
          <p class="text-[13px] font-normal leading-6 text-navy">
            {{ FOOTER_COPYRIGHT }}
          </p>

          <div class="mt-4 flex items-center gap-4">
            <AppFooterSocialLink
              v-for="link in FOOTER_SOCIAL_LINKS"
              :key="link.icon"
              :icon="link.icon"
              :href="link.href"
              :label="link.label"
            />
          </div>
        </div>

        <div
          class="mt-4 flex items-center justify-center gap-4 md:absolute md:left-0 md:top-1/2 md:mt-0 md:-translate-y-1/2"
        >
          <img
            :src="sabtImg"
            alt="نماد ثبت"
            width="72"
            height="72"
            class="size-[72px] object-contain"
          />
          <img
            :src="enamadImg"
            alt="نماد اعتماد الکترونیک"
            width="72"
            height="72"
            class="size-[72px] object-contain"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
