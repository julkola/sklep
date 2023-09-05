<template>
  <h1 class="text-2xl mb-6 font-semibold text-gray-900">
    Wybierz sposób dostawy
  </h1>
  <form
    action="/order/payment"
    method="post"
    @submit.prevent="(e) => { checkData(e as SubmitEvent) }"
  >
    <DeliveryOptions class="mb-8"/>
    <h2 class="text-2xl mb-6 font-semibold text-gray-900">
      Uzupełnij dane
    </h2>
    <div class="grid gap-8 grid-cols-2">
      <fieldset class="px-6 py-4 shadow-lg rounded-lg">
        <h3 class="text-lg font-semibold text-gray-900">
          Adres dostawy
        </h3>
        <DeliveryAddressForm/>
      </fieldset>
      <fieldset class="px-6 py-4 shadow-lg rounded-lg">
        <h3 class="text-lg font-semibold text-gray-900">
          Dane kontaktowe
        </h3>
        <DeliveryContactForm/>
      </fieldset>
    </div>
    <div class="flex justify-between items-center mt-6">
      <NuxtLink
        to="/cart"
        class="bg-gray-100 text-gray-900 rounded-full my-4 py-1 px-6 shadow-lg"
      >
        Wróć do koszyka
      </NuxtLink>
      <button
        type="submit"
        class="bg-gray-900 disabled:bg-gray-400 :text-gray-900 text-white rounded-full my-4 py-1 px-6 shadow-lg"
        :disabled="!dataIsValid"
      >
        Przejdź do wyboru płatności
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "order",
});
const dataIsValid = ref(false);
function checkData (e: SubmitEvent) {
  const data = new FormData(<HTMLFormElement>e.currentTarget);
  data.forEach((x, k)=>{
    console.log(k, x);
  })
  const inputs = (<HTMLFormElement>e.currentTarget).querySelectorAll("input");
  inputs.forEach((input) => {
    console.log(input, input.validity.valid)
  })
}
</script>