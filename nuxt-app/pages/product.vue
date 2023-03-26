<template>
    <main class="text-gray-900">
        <div class="flex">
            <ProductGallery/>
            <div class="ml-4">
                <h1 class="text-lg font-bold">{{ product.name }}</h1>
                <p>{{ product.desc }}</p>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
const product = {
    id: "1234",
    name: "Anwen - Spanwen - Kula do Kąpieli o Zapachu Bzu - 100g",
    desc: "Kula do kąpieli o zapachu bzu",
    price: 28.30,
    available: 12,
    poducerId: "123",
    producerName: "SkinTra",
}
</script>