<template>
    <form
        @submit.prevent="sign"
        class="flex flex-col w-96 px-4 py-2"
    >
        <span
            v-if="error"
            class="block mb-4  px-6 py-3 bg-red-50 text-red-900 rounded-lg"
        >
            Podano błędne dane
        </span>
        <label
            for="login-username"
            class="mb-2"
        >
            Login
        </label>
        <input
            type="text"
            name="username"
            id="login-username"
            v-model="username"
            class="h-10 rounded-full bg-slate-50 shadow-inner px-6 mb-3"
        >
        <label for="login-password" class="mb-2">
            Hasło
        </label>
        <div class="relative mb-3 ">
            <input
                :type="(showPassword) ? 'text' : 'password'"
                name="password"
                id="login-password"
                v-model="password"
                class="h-10 rounded-full bg-slate-50 shadow-inner pl-6 pr-12 w-full"
            >
            <button
                type="button"
                @click="showPassword=!showPassword"
                class="absolute grid place-items-center right-0 mr-2 inset-y-0 w-10 rounded-full text-gray-700"
            >
                <EyeIcon />
            </button>
        </div>
        <div class="">
            <Checkbox id="remembreme">
                Zapamiętaj mnie
            </Checkbox>
            <NuxtLink to="/password-rematch">
                Zapomniałem hasła
            </NuxtLink>
        </div>
        <button
            type="submit"
            class="bg-gradient-to-br from-gray-200 to-indigo-200 disabled:bg-gray-200 disabled:bg-none text-gray-900 rounded-full shadow-lg px-4 h-8"
        >
            Zaloguj się
        </button>
    </form>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient();
const props = defineProps<{
    username:string,
    password:string
}>();
const showPassword = ref(false);
const username = ref(props.username);
const password = ref(props.password);
const error = ref();
const sign = async () => {
    const response = await supabase.auth.signInWithPassword({
        email: username.value,
        password: password.value,
    })
    error.value = response.error;
}
</script>