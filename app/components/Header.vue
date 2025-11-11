<template>
  <div>
    <UserNav v-if="user?.id" />
    <PublicNav v-else />
  </div>
</template>

<script setup>
const user = useSupabaseUser();
// const isUser = ref(false);
// watch(user, () => {
//   if (user) isUser == true;
// });
console.log("user in Header:", user.value);
// watch();
// const user = false;
</script>
