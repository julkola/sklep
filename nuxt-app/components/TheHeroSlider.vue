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
                <a
                    v-for="slide in slides"
                    :href="slide.href"
                    class="block max-h-full max-w-full px-8 py-4"
                >
                    <img
                        :src="slide.src"
                        :alt="slide.alt"
                        width="1600px"
                        height="300px"
                        class="block object-cover shadow-lg rounded-md bg-slate-400"
                    >
                </a>
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
const { data, pending, error } = await useFetch('/api/main/slider');
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