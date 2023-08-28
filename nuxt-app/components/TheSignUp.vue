<template>
    <form
        @submit.prevent="sign"
        class="flex flex-col w-96 px-4 py-2"
    >
        <label
            for="username"
            class="mb-2"
        >
            Login
        </label>
        <input
            type="text"
            name="username"
            id="username"
            v-model="props.username"
            class="h-10 rounded-full border-gray-900 border-2 pl-4 pr-12 mb-3"
        >
        <label
            for="password"
            class="mb-2"
        >
            Hasło
        </label>
        <input
            type="password"
            name="password"
            id="password"
            v-model="props.password"
            class="h-10 rounded-full border-gray-900 border-2 pl-4 pr-12 mb-3"
        >
        <label
            for="passwordCopy"
            class="mb-2"
        >
            Powtórz hasło
        </label>
        <input
            type="password"
            name="passwordCopy"
            id="passwordCopy"
            v-model="passwordCopy"
            class="h-10 rounded-full border-gray-900 border-2 pl-4 pr-12 mb-3"
        >
        <Checkbox
            id="termsAccpet"
            :model-value="termsAccpet"
        >
            Akceptuję regulamin i politykę prywatności
        </Checkbox>
        <Checkbox
            id="newsletter"
            :model-value="newsletter"
        >
            Chcę otrzymywać newsletter
        </Checkbox>
        <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus assumenda odit, et consectetur sequi numquam. Blanditiis ad illo porro culpa a magni, asperiores repellat ratione eum, iure nobis maxime ducimus.
        </p>
        <button
            type="submit"
            class="bg-gradient-to-tr to-teal-500 from-indigo-700 text-white rounded-full shadow-lg px-4 h-8"
        >
            Załóż konto
        </button>
    </form>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient();
const props = defineProps<{
    username:string,
    password:string
}>();
const passwordCopy = ref("");
const termsAccpet = ref(false);
const newsletter = ref(false);
const sign = async () => {
    if (passwordCopy.value !== props.password) return;
    const { data:user, error } = await supabase.auth.signUp({
        email: props.username,
        password: props.password,
    })
}
</script>