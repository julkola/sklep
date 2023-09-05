<template>
    <Input 
        name="first-name"
        :required="true"
        placeholder="Jan"
        :modelValue="name"
        @update:modelValue="newValue => name = newValue"
    >
        Imię
    </Input>
    <Input
        name="surname"
        :required="true"
        placeholder="Kowalski"
        :modelValue="surname"
        @update:modelValue="newValue => surname = newValue"
    >
        Nazwisko
    </Input>
    <Input 
        name="email"
        type="email"
        :required="true"
        placeholder="przyklad@gmail.com"
        :modelValue="email"
        @update:modelValue="newValue => email = newValue"
    >
        E-mail
    </Input>
    <Input
        name="tel"
        type="tel"
        :required="true"
        placeholder="12-345"
        :modelValue="phone"
        @update:modelValue="newValue => phone = newValue"
    >
        Nr telefonu
    </Input>
    <Input
        name="comment"
        placeholder="Wpisz swoją prośbę"
        :required="false"
    >
        Uwagi do zamówienia
    </Input>
    <p class="m-4 mt-6">
        <span class="text-teal-400">
            *
        </span>
        Pola obowiązkowe
    </p>
</template>
<script setup lang="ts">
const user = useSupabaseUser();

const name = ref("");
const surname = ref("");
const phone = ref("");
const email = ref( user && user.value ? user.value.email : "");

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
    }
}
</script>