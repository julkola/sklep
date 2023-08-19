<template>
    <div class="flex flex-col h-full">
        <TheHeader @openCart="openCart()"/>
        <div class="flex-1">
          <slot/>
        </div>
        <TheFooter @click.self="showModal = true"/>
        <TheCart :open="isCartOpen" @close="isCartOpen = false"/>
        <Modal :show="showModal" @close="showModal = false">
          <template #header>
            Dodano do koszyka
          </template>
          <template #default>
            YAY!
          </template>
        </Modal>

    </div>
</template>
<script setup lang="ts">
  const isCartOpen = ref(false);
  const showModal = ref(false);
  function openCart () {
    isCartOpen.value = true;
  }
</script>