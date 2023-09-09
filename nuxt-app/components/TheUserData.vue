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
            name="first-name"
            :required="true"
            placeholder=""
            :modelValue="userData.name"
            @update:modelValue="newValue => userData.name = newValue"
        >
            Imię
        </InputDefault>
        <InputDefault
            name="surname"
            :required="true"
            placeholder=""
            :modelValue="userData.surname"
            @update:modelValue="newValue => userData.surname = newValue"
        >
            Nazwisko
        </InputDefault>
        <InputDefault
            name="email"
            type="email"
            :required="true"
            placeholder=""
            :modelValue="userData.email"
            @update:modelValue="newValue => userData.email = newValue"
        >
            E-mail
        </InputDefault>
        <InputDefault
            name="tel"
            type="tel"
            :required="true"
            placeholder=""
            :modelValue="userData.phone"
            @update:modelValue="newValue => userData.phone = newValue"
        >
            Nr telefonu
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
const client = await useSupabaseClient();
const success = ref(false);
const userData = reactive({
    email: user && user.value ? user.value.email : "",
    name: "",
    surname: "",
    phone: ""
})

let startData = { ...userData };
console.log(startData);
async function fetchUserData () {
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
            userData.name = profile.name;
            userData.surname = profile.surname;
            userData.phone = profile.phone;
            startData = { ...profile, email: user.value.email};
        }
}

fetchUserData();

const gotChanged = () => {
    for(const key in startData) {
        if (startData[key] !== userData[key]) return true
    }
    return false;
};

async function submitChanges () {
    const values = { 
            name: userData.name,
            surname: userData.surname,
            phone: userData.phone,
            user_id: user.value.id
        };
    const query = client.from('Profiles');
    
    const { data, error } = await client
        .from('Profiles')
        .upsert(values, { onConflict: 'user_id' })
        .select()
        .single()
    console.log(data, error)
    if (!error) {
        startData = { ...data }
        success.value = true;
        setTimeout(() => success.value = false, 1000)
    }
    else console.warn(error)
}
</script>