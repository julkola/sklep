<template>
    <form
        @submit.prevent="sign"
        class="flex flex-col w-96 px-4 py-2"
    >
        <label for="username" class="mb-2">
            Login
        </label>
        <input
            type="text"
            name="username"
            id="username"
            v-model="props.username"
            class="h-10 rounded-full border-gray-900 border-2 pl-4 pr-12 mb-3"
        >
        <label for="password" class="mb-2">
            Hasło
        </label>
        <input
            type="password"
            name="password"
            id="password"
            v-model="props.password"
            class="h-10 rounded-full border-gray-900 border-2 pl-4 pr-12 mb-3"
        >
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
            class=" bg-gradient-to-tr to-teal-500 from-indigo-700 text-white rounded-full shadow-lg px-4 h-8"
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
const sign = async () => {
    const { data:user, error } = await supabase.auth.signInWithPassword({
        email: props.username,
        password: props.password,
    })
}
</script>