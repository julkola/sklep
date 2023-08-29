<template>
    <div v-if="minDeliveryCost === 0" class="mb-4">
        <span class="">
            {{ freeShippingFrom > cart.sum ? `Brakuje tylko ${(freeShippingFrom - cart.sum).toFixed(2)}&nbsp;zł do darmowej dostawy` : "Darmowa dostawa!" }}
        </span>
        <div class="h-3 mt-2 rounded-full shadow-inner relative bg-gray-200">
            <div class="absolute inset-y-0 left-0 rounded-full bg-gradient-to-br from-blue-200 to-teal-200 max-w-full"
                :style="`width: calc(${cart.sum / freeShippingFrom * 100}%)`"
            >
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';
const cart = useCartStore();
const freeShippingFrom = 140;
const minDeliveryCost = 0;
</script>