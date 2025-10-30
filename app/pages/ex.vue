<template>
  <div>
    <LazyMyComponent hydrate-on-visible @hydrated="onHydrate" />
    <h2>count :{{ count }}</h2>
    <button @click="incrementCount">Increment Count</button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0);
function onHydrate() {
  console.log("Component has been hydrated!");
}
function incrementCount() {
  count.value++;
}
</script>
