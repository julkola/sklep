<template>
    <div class="flex flex-col h-full">
        <TheHeader @openCart="isCartOpen = true" @showLogin="showLogin=true"/>
        <div class="flex-1 container mx-auto">
          <slot/>
        </div>
        <TheFooter />
        <TheCart :open="isCartOpen" @close="isCartOpen = false"/>
        <RecentlyAddedModal/>
        <TheCookieManagementModal/>
        <TheLoginModal/>
    </div>
</template>
<script setup lang="ts">
  const isCartOpen = ref(false);
  const showLogin = ref(false);
</script>