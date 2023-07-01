<template>
    <div class="">
        <h2>Zaloguj się</h2>
        <form class="">
            <input type="text" name="username" id="username" v-model="username">
            <input type="password" name="password" id="password" v-model="password">
            <div class="">
                <input type="checkbox" name="rememberme" id="rememberme" v-model="rememberme">
                <NuxtLink to="/password-rematch">Zapomniałem hasła</NuxtLink>
            </div>
            <button type="submit">Zaloguj się</button>
        </form>
    </div>
    <div class="">
        <h2>Zarejestruj się</h2>
        <form class="">
            <input type="text" name="username" id="username" v-model="username">
            <input type="password" name="password" id="password" v-model="password">
            <input type="checkbox" name="termsAccept" id="termsAccept" v-model="termsAccept">
            <input type="checkbox" name="newsletter" id="newsletter" v-model="newsletter">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus assumenda odit, et consectetur sequi numquam. Blanditiis ad illo porro culpa a magni, asperiores repellat ratione eum, iure nobis maxime ducimus.</p>
            <button type="submit">Załóż konto</button>
        </form>
    </div>
</template>
<script setup lang="ts">
    const username = ref();
    const password = ref();
    const rememberme = ref(false);
    const termsAccept = ref(false);
    const newsletter = ref(false);
</script>