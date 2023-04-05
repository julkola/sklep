<template>
    <div class="flex flex-col h-full">
        <TheHeader/>
        <div class="flex-1">
          <slot/>
        </div>
        <TheFooter/>
        <TheCart v-if="isCartOpen"/>
    </div>
</template>
<script setup lang="ts">
  const isCartOpen = ref(false);
</script>