<template>
  <div>
    <PublicNav />
    <!-- <UserNav v-else /> -->
  </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>
