<template>
    <h1 class="text-xl font-semibold">
        Moje dane
    </h1>
    <form
        @submit.prevent="submitChanges"
        method="post"
        class="grid gap-4 max-w-md"
    >
        <span
            v-show="success"
            class="block text-center mt-4 px-6 py-2 text-sm bg-emerald-100 text-teal-700 rounded-lg shadow-lg shadow-emerald-50 font-semibold"
        >
            Dane zostały zmienione
        </span>
        <InputDefault 
            name="street"
            :required="true"
            placeholder="Przykładowa"
            :modelValue="currentAddress.street"
            @update:modelValue="newValue => currentAddress.street = newValue"
        >
            Ulica
        </InputDefault>
        <div class="flex">
            <InputDefault 
                name="street-number"
                :required="true"
                placeholder="10"
                class="flex-1 mr-4"
                pattern="[0-9]*"
                inputMode="numeric"
                :modelValue="currentAddress.streetNumber"
                @update:modelValue="newValue => currentAddress.streetNumber = newValue"
            >
                Nr domu
            </InputDefault>
            <InputDefault
                name="flat-number"
                :required="false"
                placeholder="72"
                class="flex-1"
                pattern="[0-9]*"
                inputMode="numeric"
                :modelValue="currentAddress.flatNumber"
                @update:modelValue="newValue => currentAddress.flatNumber = newValue"
            >
                Nr mieszkania
            </InputDefault>
        </div>
        <InputDefault
            name="postal-code"
            :required="true"
            placeholder="12-345"
            pattern="[0-9]{2}-[0-9]{3}"
            :modelValue="currentAddress.postalCode"
            @update:modelValue="newValue => currentAddress.postalCode = newValue"
        >
            Kod pocztowy
        </InputDefault>
        <InputDefault
            name="city"
            :required="true"
            :modelValue="currentAddress.city"
            @update:modelValue="newValue => currentAddress.city = newValue"
            placeholder="Ciechocinek"
        >
            Miejscowość
        </InputDefault>
        <button
            :disabled="!gotChanged()"  
            class="bg-gradient-to-br from-gray-200 to-indigo-200 disabled:bg-gray-200 disabled:bg-none text-gray-900 rounded-full shadow-lg px-4 h-8"
        >
            Zmień
        </button>
    </form>
</template>
<script setup lang="ts">
const user = useSupabaseUser();
const success = ref(false);

const currentAddress = reactive({
    street: "",
    streetNumber: "",
    flatNumber: "",
    city: "",
    postalCode: ""
})

const client = await useSupabaseClient();
const { data: address, error } = await client
    .from('Addresses')
    .select(`
        street,
        streetNumber: street_number,
        flatNumber: flat_number,
        city,
        postalCode: postal_code
    `)
    .eq('user_id', user.value.id)
    .single();

if (address) {
    currentAddress.street = address.street;
    currentAddress.streetNumber = address.streetNumber;
    currentAddress.flatNumber = address.flatNumber;
    currentAddress.city = address.city;
    currentAddress.postalCode = address.postalCode;
}
const gotChanged = () => {
    if (!address) return true;
    for(const key in address) {
        if (address[key] !== currentAddress[key]) return true
    }
    return false;
};

async function submitChanges () {
    const values = {
        street: currentAddress.street,
        street_number: currentAddress.streetNumber,
        flat_number: currentAddress.flatNumber,
        city: currentAddress.city,
        postal_code: currentAddress.postalCode,
        user_id: user.value.id
    }
    const { error } = await client
        .from('Addresses')
        .upsert(values, { onConflict: 'user_id' })
        .select()
        .single();
    if (!error) console.log("change");
    else console.warn(error)
}
</script>