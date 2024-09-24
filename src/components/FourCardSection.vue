<template>
  <!-- Main layout of the website -->
  <main
    class="flex size-full min-h-screen justify-center bg-white/95 py-20 xl:items-center xl:pb-10 xl:pt-0"
  >
    <div
      class="flex w-10/12 flex-col items-center gap-y-5 2xl:w-9/12 2xl:max-w-screen-xl"
    >
      <h1
        class="text-center font-poppins text-2xl font-extralight text-secondary-dark-blue lg:text-3xl xl:text-5xl"
      >
        Reliable, efficient delivery<br />
        <span class="font-semibold">Powered by Technology</span>
      </h1>
      <p
        class="max-w-md text-center font-poppins text-card text-secondary-gray-blue lg:text-base xl:max-w-screen-sm xl:text-lg"
      >
        Our Artificial Intelligence powered tools use millions of project data points to
        ensure that your project is successful
      </p>
      <div class="mt-10 flex w-full flex-col gap-y-8 xl:mt-16 xl:flex-row xl:gap-x-8">
        <div
          v-for="(item, index) in data.card"
          :key="index"
          class="flex w-full flex-col items-center justify-center"
        >
          <!-- Card layout, single card for index 0 and 2, double cards for index 1 -->
          <div
            class="relative flex min-h-card max-w-card flex-col gap-y-2 rounded-md border-t-4 bg-white px-8 py-5 drop-shadow-2xl"
            :class="{
              'border-primary-cyan': item.type === 'supervisor',
              'border-primary-blue': item.type === 'calculator',
            }"
            v-if="isOneCard(item)"
          >
            <h1
              class="font-poppins text-xl font-semibold capitalize tracking-wide lg:text-2xl"
            >
              {{ item.type }}
            </h1>
            <span class="font-poppins text-card text-secondary-gray-blue lg:text-base">
              {{ item.details }}
            </span>
            <img
              class="absolute bottom-8 right-8 size-16"
              :src="`/images/icon-${item.type}.svg`"
              :alt="`icon-${item.type}`"
            />
          </div>
          <div
            class="flex flex-col items-center justify-center gap-y-8"
            v-if="isTwoCard(item)"
          >
            <div
              class="relative flex min-h-card max-w-card flex-col gap-y-2 rounded-md border-t-4 border-primary-red bg-white px-8 py-5 drop-shadow-2xl"
            >
              <h1
                class="font-poppins text-xl font-semibold capitalize tracking-wide lg:text-2xl"
              >
                {{ item.type1 }}
              </h1>
              <span class="font-poppins text-card text-secondary-gray-blue lg:text-base">
                {{ item.details1 }}
              </span>
              <img
                class="absolute bottom-8 right-8 size-16"
                :src="`/images/icon-${item.type1.replace(' ', '-')}.svg`"
                :alt="`icon-${item.type1}`"
              />
            </div>
            <div
              class="relative flex min-h-card max-w-card flex-col gap-y-2 rounded-md border-t-4 border-primary-orange bg-white px-8 py-5 drop-shadow-2xl"
            >
              <h1
                class="font-poppins text-xl font-semibold capitalize tracking-wide lg:text-2xl"
              >
                {{ item.type2 }}
              </h1>
              <span class="font-poppins text-card text-secondary-gray-blue lg:text-base">
                {{ item.details2 }}
              </span>
              <img
                class="absolute bottom-8 right-8 size-16"
                :src="`/images/icon-${item.type2}.svg`"
                :alt="`icon-${item.type2}`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Importing card data from pinia store defined in fourCardStore.ts
import { useCardStore } from "@/stores/fourCardStore";
import type { OneCard, TwoCard } from "@/stores/interface";

const data = useCardStore(); // accessing card data

// Type guard to check and prevent errors
function isOneCard(item: OneCard | TwoCard): item is OneCard {
  return (item as OneCard).type !== undefined; // Checks for actual value
}

function isTwoCard(item: OneCard | TwoCard): item is TwoCard {
  return (item as TwoCard).type1 !== undefined;
}
</script>
