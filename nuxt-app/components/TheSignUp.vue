<template>
    <form
        @submit.prevent="sign"
        class="flex flex-col w-96 px-4 py-2"
    >
        <InputLogin
            name="username"
            v-model="username"
        >
            Login
        </InputLogin>
        <InputPassword
            name="password"
            v-model="password"
        >
            Hasło
        </InputPassword>
        <InputPassword
            name="passwordCopy"
            v-model="passwordCopy"
        >
            Powtórz hasło
        </InputPassword>
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
            class="bg-gradient-to-br from-gray-200 to-indigo-200 disabled:bg-gray-200 disabled:bg-none text-gray-900 rounded-full shadow-lg px-4 h-8"
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
const username = ref(props.username);
const password = ref(props.password);
const passwordCopy = ref("");
const termsAccpet = ref(false);
const newsletter = ref(false);
const sign = async () => {
    if (!termsAccpet.value) return;
    if (passwordCopy.value !== props.password) return;
    const { data:response, error } = await supabase.auth.signUp({
        email: props.username,
        password: props.password,
    });
    // if (response.user) createProfileData(response.user.id);
}
</script>