<template>
    <InputDefault 
        name="first-name"
        :required="true"
        placeholder="Jan"
        :modelValue="name"
        @update:modelValue="newValue => name = newValue"
        @validate="mapValidity" 
    >
        Imię
    </InputDefault>
    <InputDefault
        name="surname"
        :required="true"
        placeholder="Kowalski"
        :modelValue="surname"
        @update:modelValue="newValue => surname = newValue"
        @validate="mapValidity" 
    >
        Nazwisko
    </InputDefault>
    <InputDefault 
        name="email"
        type="email"
        :required="true"
        placeholder="przyklad@gmail.com"
        :modelValue="email"
        @update:modelValue="newValue => email = newValue"
        @validate="mapValidity" 
    >
        E-mail
    </InputDefault>
    <InputDefault
        name="tel"
        type="tel"
        :required="true"
        placeholder="12-345"
        :modelValue="phone"
        @update:modelValue="newValue => phone = newValue"
        @validate="mapValidity" 
    >
        Nr telefonu
    </InputDefault>
    <InputDefault
        name="comment"
        placeholder="Wpisz swoją prośbę"
        :required="false"
        @validate="mapValidity" 
    >
        Uwagi do zamówienia
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
const form = ref();
const name = ref("");
const surname = ref("");
const phone = ref("");
const email = ref("");
const emits = defineEmits(["isAllValid"]);

const validityMap = new Map<string, boolean>();
function mapValidity (name: string, validity: boolean) {
    validityMap.set(name, validity);
    let isAllValid = true;
    validityMap.forEach((value)=>{
    if (value === false) isAllValid = false
    })
    emits("isAllValid", isAllValid)
}
if (user.value) {
    const client = await useSupabaseClient();
    const { data: profile, error } = await client
        .from('Profiles')
        .select(`
            name,
            surname,
            phone
        `)
        .eq('user_id', user.value.id)
        .single();

    if (profile) {
        name.value = profile.name;
        surname.value = profile.surname;
        phone.value = profile.phone;
        email.value = user.value.email;
    }
}
</script>