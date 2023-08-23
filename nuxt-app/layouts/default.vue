<template>
    <div class="flex flex-col h-full">
        <TheHeader @openCart="isCartOpen = true"/>
        <div class="flex-1 container mx-auto">
          <slot/>
        </div>
        <TheFooter />
        <TheCart :open="isCartOpen" @close="isCartOpen = false"/>
        <RecentlyAddedModal/>
        <CookieManagementModal/>
    </div>
</template>
<script setup lang="ts">
  const isCartOpen = ref(false);
</script>