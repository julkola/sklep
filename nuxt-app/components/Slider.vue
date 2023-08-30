<template>
    <div class="relative w-full">
        <button
            @click="prev"
            class="absolute left-12 top-1/2 z-30 -translate-y-1/2 w-8 h-8 m-2 shadow-lg bg-white bg-opacity-40 rounded-full"
        >
            &laquo;
        </button>
        <div class="w-full overflow-hidden">
            <div
                class="flex duration-300 transition-transform ease-out"
                :style="`transform: translateX(-${currentSlide * 100}%);`"
                @mousedown="isActive = true"
                @mouseleave="isActive = false"
                @mouseup="isActive = false"
                @mousemove="move"
            >
                <div
                    v-for="slide in slides"
                    class="w-1/4 p-4 text-center"
                >
                    <div class="h-full flex flex-col px-6 py-4 shadow-lg rounded-md">
                        <a
                            :href="`/products/${slide.id}`"
                            class="block mb-4"
                        >
                            <div class="relative">
                                <img
                                    :src="`/img/product/${slide.id}`"
                                    :alt="slide.name"
                                    width="200px"
                                    height="200px"
                                    class="block mx-auto mb-4 object-contain bg-slate-50"
                                >
                                <button class="absolute bottom-2 right-0 flex items-center justify-center bg-gray-900 text-white shadow-md w-8 h-8 rounded-full m-2">
                                    <BasketIcon/>
                                </button>
                            </div>
                            <span class="font-semibold">
                                {{ slide.name }}
                            </span>
                        </a>
                        <div class="flex-1 flex flex-col justify-end items-end">
                            <span>
                                {{ slide.price.toFixed(2) }}&nbsp;zł
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <button
            @click="next"
            class="absolute right-12 top-1/2 z-30 -translate-y-1/2 w-8 h-8 m-2 shadow-lg bg-white bg-opacity-40 rounded-full"
        >
            &raquo;
        </button>
    </div>
</template>
<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/main/promoted-products');
const slides = data;
const currentSlide = ref(0);
const isActive = ref(false);
function next () {
    if (currentSlide.value < slides.value!.length - 1) currentSlide.value++;
    else currentSlide.value = 0;
}
function prev () {
    if (currentSlide.value > 0) currentSlide.value--;
    else currentSlide.value = slides.value!.length - 1 ;
}
function move (event: MouseEvent) {
    const movementX = event.movementX;
    if (!isActive.value) return
    if (movementX > 40) prev();
    else if (movementX < -40) next();
}
</script>