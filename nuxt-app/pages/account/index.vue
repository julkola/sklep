<template>
    <div class="container mx-auto flex">
        <TheAccountNavigation class="w-1/4 mr-4"/>
        <main class="flex-1">
            <h2>
                Ostatnie zamówienie:
            </h2>
            <div class="border-2 border-gary-700">
                <div class="flex justify-between items-center">
                    <div class="">
                        <span class="inline-block border-r-2 border-gray-700">
                            Numer zamówienia: {{ lastOrder.id }}
                        </span>
                        <span>
                            Data złożenia: {{ lastOrder.placementDate }}
                        </span>
                    </div>
                    <span>
                        {{ lastOrder.status }}
                    </span>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup lang="ts">
    interface order {
        id: string,
        placementDate: Date,
        status: string,
        sum: number,
        paymentMethod: string,
    }
    const { data: lastOrder } = useFetch('/api/order/last-order/43');
</script>