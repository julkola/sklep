<template>
    <div class="flex flex-col h-full container max-w-[1060px] mx-auto px-6">
        <header class="">
            <NuxtLogo/>
        </header>
        <CartSteps />
        <div class="flex-1 container mx-auto">
          <slot/>
        </div>
        <footer class="flex justify-between items-center mt-12 px-6 pb-10">
            <div class="flex gap-2">
                <NuxtLink>Dostawa</NuxtLink>
                <NuxtLink>Płatność</NuxtLink>
                <NuxtLink>Zwroty i reklamacje</NuxtLink>
                <NuxtLink>Pomoc</NuxtLink>
                <NuxtLink>Faq</NuxtLink>
            </div>
            <span class="">
                Copyright 2021-{{ (new Date()).getFullYear() }} &copy; CompanyName Sp. z o.o.
            </span>
        </footer>
    </div>

</template>
<script setup lang="ts">
const formData = ref();
provide("formData", {
    formData,
    updateFormData
});
function updateFormData (data: FormData) {
    formData.value = data;
}
</script>