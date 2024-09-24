<script setup lang="ts">
import FourCardSection from "./components/FourCardSection.vue";
import { useCardStore } from "./stores/fourCardStore";
import { onMounted } from "vue";

const data = useCardStore();

onMounted(() => {
  data.fill();
});
</script>

<template>
  <FourCardSection />
</template>
