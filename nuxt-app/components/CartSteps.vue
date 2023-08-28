<template>
    <div
        class="relative grid grid-cols-3 place-items-center after:absolute after:-z-10 after:left-1/2 after:w-1/3 after:h-[2px] after:bg-gray-700 after:top-5 after:-translate-y-1/2 before:absolute before:-z-10 before:right-1/2 before:w-1/3 before:h-[2px]  before:top-5 before:-translate-y-1/2"
        :class="(useRoute().name === 'order-delivery' ? ' before:bg-gray-400' : ' before:bg-gray-700')+(useRoute().name === 'order-summary' ? ' after:bg-gray-700' : ' after:bg-gray-400')"
    >
        <div
            :class="useRoute().name === 'order-delivery' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900' "
            class="rounded-full shadow-lg w-10 h-10 flex items-center justify-center mb-2"
        >
            1
        </div>
        <div
            :class="useRoute().name === 'order-payment' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900' "
            class="rounded-full shadow-lg w-10 h-10 flex items-center justify-center mb-2"
        >
            2
        </div>

        <div
            :class="useRoute().name === 'order-summary' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900' "
            class="rounded-full shadow-lg w-10 h-10 flex items-center justify-center mb-2"
        >
            3
        </div>
        <span :class="useRoute().name === 'order-delivery' ? 'font-semibold' : '' ">
            Sposób dostawy
        </span>
        <span :class="useRoute().name === 'order-payment' ? 'font-semibold' : '' ">
            Matoda płatności
        </span>
        <span :class="useRoute().name === 'order-summary' ? 'font-semibold' : '' ">
            Podsumowanie
        </span>
    </div>
</template>