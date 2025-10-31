<template>
  <div>
    <PublicNav v-if="!user" />
    <UserNav v-else />
  </div>
</template>

<script setup>
const user = useSupabaseUser();
console.log("user in Header:", user.value);
// const user = false;
</script>
