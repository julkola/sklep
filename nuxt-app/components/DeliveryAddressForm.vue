<template>
    <InputDefault
        name="street"
        :required="true"
        placeholder="Przykładowa"
        :modelValue="street"
        @update:modelValue="newValue => street = newValue"
        @validate="mapValidity"
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
            :modelValue="streetNumber"
            @update:modelValue="newValue => streetNumber = newValue"
            @validate="mapValidity"
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
            :modelValue="flatNumber"
            @update:modelValue="newValue => flatNumber = newValue"
            @validate="mapValidity"
        >
            Nr mieszkania
        </InputDefault>
    </div>
    <InputDefault
        name="postal-code"
        :required="true"
        placeholder="12-345"
        pattern="[0-9]{2}-[0-9]{3}"
        :modelValue="postalCode"
        @update:modelValue="newValue => postalCode = newValue"
        @validate="mapValidity"
    >
        Kod pocztowy
    </InputDefault>
    <InputDefault
        name="city"
        :required="true"
        :modelValue="city"
        @update:modelValue="newValue => city = newValue"
        placeholder="Ciechocinek"
        @validate="mapValidity"
    >
        Miejscowość
    </InputDefault>
    <InputDefault
        name="courier-phone"
        placeholder="+48 123 456 789"
        :required="false"
        type="tel"
        @validate="mapValidity"
    >
        Nr telefonu dla kuriera
    </InputDefault>
    <p class="m-4 mt-6">
        <span class="text-teal-400">
            *
        </span>
        Pola obowiązkowe
    </p>
</template>
<script setup lang="ts">
const user = useSupabaseUser();

const street = ref("");
const streetNumber = ref("");
const flatNumber = ref("");
const city = ref("");
const postalCode = ref("");
const emits = defineEmits(["isAllValid"]);
if (user.value) {
    const client = await useSupabaseClient();
    const { data: address, error } = await client
        .from('Addresses')
        .select(`
            street,
            street_number,
            flat_number,
            city,
            postal_code
        `)
        .eq('user_id', user.value.id)
        .single();
    if (address) {
        street.value = address.street;
        streetNumber.value = address.street_number;
        flatNumber.value = address.flat_number;
        city.value = address.city;
        postalCode.value = address.postal_code;
    }
}
const validityMap = new Map<string, boolean>();
function mapValidity (name: string, validity: boolean) {
    validityMap.set(name, validity);
    let isAllValid = true;
    validityMap.forEach((value)=>{
    if (value === false) isAllValid = false
    })
    emits("isAllValid", isAllValid)
}
</script>