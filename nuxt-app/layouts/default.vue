<template>
    <div class="flex flex-col h-full">
        <TheHeader @openCart="isCartOpen = true"/>
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
            {{ cart.recentlyAdded?.id }} - {{ cart.recentlyAdded?.price }} - {{ cart.recentlyAdded?.quantity }}
          </template>
        </Modal>

    </div>
</template>
<script setup lang="ts">
  import { useCartStore } from '~~/stores/cart';
  const isCartOpen = ref(false);
  const showModal = ref(false);
  const cart = useCartStore();
  watch(
    () => cart.recentlyAdded,
    () => {
      showModal.value = true;
    }
  )
</script>