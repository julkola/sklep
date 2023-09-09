<template>
    <h1 class="text-xl font-semibold">
        Ostatnie zamówienie:
    </h1>
    <div class="border-2 border-gary-700">
        <div class="flex justify-between items-center">
            <div class="">
                <span class="inline-block border-r-2 border-gray-700">
                    Numer zamówienia: 
                </span>
                <span>
                    Data złożenia: 
                </span>
            </div>
            <span>
                
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">
const { data: lastOrder } = useFetch('/api/order/last-order/43') as any;
</script>