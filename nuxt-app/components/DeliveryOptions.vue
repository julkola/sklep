<template>
  <div class="grid gap-4 grid-cols-3">
    <div
      v-for="option in deliveryOptions"
      class="relativie"
    >
      <input
        type="radio"
        name="delivery-method"
        :id="option.id"
        class="absolute -z-10 opacity-0 peer"
      >
      <label
        :for="option.id"
        class="relative flex w-full h-full rounded-lg shadow-lg cursor-pointer peer-checked:bg-gray-50 px-6 py-4 before:inline before:w-4 before:h-4 before:mt-[6px] before:shadow-lg before:bg-white before:border-2 before:border-gray-900 before:rounded-full after:absolute after:top-[25px] after:left-[27px] after:h-2.5 after:w-2.5 after:bg-gray-900 after:rounded-full after:scale-0 after:transition-transform after:duration-150 after:ease-out peer-checked:after:scale-100"
      >
        <div class="flex-1 flex flex-col ml-4">
          <b class="font-semibold">
            {{ option.title }}
          </b>
          <span class="mt-0.5">
            U ciebie zwykle za <b class="text-green-500 font-semibold">{{ option.deliveryEstimate }}</b>
          </span>
          <span class="my-1 text-gray-600 text-sm leading-tight">
            {{ option.description }}
          </span>
          <b class="font-semibold">
            {{ option.price }}
          </b>
        </div>
      </label>
    </div>
  </div>
</template>
<script setup lang="ts">
const deliveryOptions = [
    {
        id: 'inpost-locker',
        title: 'Paczkomat Inpost',
        deliveryEstimate: '1-2 dni',
        description: 'Czas pakowania + dostarczenia do wybranego Paczkomatu.',
        price: 8.99,
        freeDeliveryFrom: 149.99
    },
    {
        id: 'inpost-courier',
        title: 'Kurier Inpost',
        deliveryEstimate: '1-3 dni',
        description: 'Czas pakowania + dostarczenia pod wskazany adres.',
        price: 12.99,
        freeDeliveryFrom: 149.99
    },
    {
        id: 'dpd',
        title: 'Kurier DPD',
        deliveryEstimate: '2-6 dni',
        description: 'Czas pakowania + dostarczenia pod wskazany adres.',
        price: 9.99,
        freeDeliveryFrom: 149.99
    },
]
</script>