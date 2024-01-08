<template>
    <h1 class="text-2xl mb-6 font-semibold text-gray-900">
        Wybierz sposób spłatności
    </h1>
    <div class="grid gap-4 grid-cols-4">
        <div
            v-for="option in paymentOptions"
            class="relativie"
        >
            <input
                type="radio"
                name="payment-method"
                :id="option.id"
                class="absolute -z-10 opacity-0 peer"
            >
            <label
                :for="option.id"
                class="relative flex w-full h-full px-6 py-4 text-center rounded-lg shadow-lg cursor-pointer peer-checked:[&_.check]:scale-100"
            >
                <div class="flex-1 flex flex-col">
                    <b class="font-semibold">
                        {{ option.title }}
                    </b>
                    <span
                        v-if="option.price"
                        class="text-sm"
                    >
                        Opłata: <b class="font-semibold">{{ option.price }}</b>
                    </span>
                </div>
                <div class="check scale-0 absolute bottom-3 right-3 grid place-items-center bg-emerald-100 text-teal-700 rounded-full w-6 h-6 transition-transform duration-300 ease-out">
                    <IconCheck  />
                </div>
            </label>
        </div>
    </div>
</template>
<script setup lang="ts">
const paymentOptions = [
    {
        id: 'blik',
        title: 'Blik',
        price: 0,
    },
    {
        id: 'payu',
        title: 'PayU',
        price: 0,
    },
    {
        id: 'cash-on-delivery',
        title: 'Gotówka przy odbiorze',
        price: 4.99,
    },
    {
        id: 'bank-payment',
        title: 'Przedpłata na konto',
        price: 0,
    },
    {
        id: 'pay-po',
        title: 'PayPo Płacę później',
        price: 0,
    },
]
definePageMeta({
  layout: "order",
});
const route = useRoute();
console.log(route.query)
</script>