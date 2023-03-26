
import HeartIcon from './HeartIcon.vue';


import UserIcon from './UserIcon.vue';


import UserIcon from './UserIcon.vue';

<template>
    <header class="justify-between">
        <svg class="logo"></svg>
        <div class="flex">
            <div class="flex">
                <input type="text">
                <searchIcon></searchIcon>
            </div>
            <button>
                <UserIcon></UserIcon>
            </button>
            <button>
                <HeartIcon></HeartIcon>
            </button>
            <button>
                <BasketIcon></BasketIcon>
                <span>
                    {{ cart.sum }}&nbsp;zł
                </span>
            </button>
        </div>

    </header>
</template>
<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
const cart = useCartStore();
</script>