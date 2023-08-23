<template>
    <Transition name="cart">
        <div v-if="open" class="cart z-50" >
            <div
                @click="emits('close')"
                class="bg-black bg-opacity-60 inset-0 fixed cart-bg"
            >
            </div>
            <div class="cart-body w-full sm:w-auto fixed top-0 bottom-0 right-0 p-4">
                <div class="flex flex-col h-full py-4 px-6 sm:w-96 bg-white shadow-lg rounded-lg ">
                    <div class="flex items-center justify-between mb-4">
                        <span class="font-semibold">
                            Koszyk
                        </span>
                        <button @click="emits('close')" class="rounded-full w-8 h-8 shadow-lg">
                            &times
                        </button>
                    </div>
                    <div
                        v-if="cart.productsQuantity > 0"
                        class="flex-1 flex flex-col"
                    >
                        <div v-if="freeShippingFrom !== false" class="mb-4">
                            <span class="text-sm">
                                {{ freeShippingFrom > cart.sum ? `Brakuje tylko ${(freeShippingFrom - cart.sum).toFixed(2)}&nbsp;zł do darmowej dostawy` : "Darmowa dostawa!" }}
                            </span>
                            <div class="h-3 mt-2 rounded-full shadow-inner relative">
                                <div class="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gray-900 to-emerald-800 max-w-full"
                                    :style="`width: calc(${cart.sum / freeShippingFrom * 100}%)`"
                                >
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto">
                            <ProductInCart v-for="product in cart.products" :product="product"/>
                        </div>
                        <div class="text-right text-lg">
                            <p>Suma:</p>
                            <p class="font-bold">{{cart.sum.toFixed(2)}}</p>
                        </div>
                        <button
                            class="bg-gray-900 disabled:bg-gray-200 disabled:text-gray-900 text-white rounded-full block my-4 py-1 px-6 shadow-lg"
                        >
                            Przejdź do koszyka
                        </button>
                    </div>
                    <p
                        v-else
                        class="flex-1 flex justify-center items-center text-center text-xl font-semibold "
                    >
                        Brak produktów w koszyku
                    </p>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';
const cart = useCartStore();

interface ProductInCart {
    id: string,
    quantity: number,
    price: number,
    availability: number,
}

const { open } = defineProps(["open"]);
const emits = defineEmits(["close"]);

const freeShippingFrom: (number | false) = 140;
</script>
