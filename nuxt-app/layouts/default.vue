<template>
    <div class="flex flex-col h-full">
        <TheHeader @openCart="openCart()"/>
        <div class="flex-1">
          <slot/>
        </div>
        <TheFooter/>
        <TheCart v-if="isCartOpen" @closeCart="closeCart()"/>
    </div>
</template>
<script setup lang="ts">
  const isCartOpen = ref(false);
  function openCart () {
    isCartOpen.value = true;
  }
  function closeCart () {
    isCartOpen.value = false;
  }
</script>