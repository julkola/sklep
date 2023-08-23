<template>
    <Modal :show="showModal" @close="showModal = false">
        <template #header>
          Dodano do koszyka
        </template>
        <template #default>
          {{ cart.recentlyAdded?.id }} - {{ cart.recentlyAdded?.price }} - {{ cart.recentlyAdded?.quantity }}
        </template>
      </Modal>
</template>
<script setup lang="ts">
  import { useCartStore } from '~~/stores/cart';
  const showModal = ref(false);
  const cart = useCartStore();
  watch(
    () => cart.recentlyAdded,
    () => {
      showModal.value = true;
    }
  )
</script>