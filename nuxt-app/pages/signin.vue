<template>
    <div class="relative grid grid-cols-2 w-96 mx-auto rounded-full p-1 my-2 bg-slate-200 border-2 border-slate-900">
        <button @click="login=true" :class="login ? 'text-white' : ''"  class="relative z-10">
            Zaloguj się
        </button>
        <button @click="login=false" :class="!login ? 'text-white' : ''" class="relative z-10">
            Zarejetruj się
        </button>
        <div class="absolute h-full w-1/2 bg-slate-800 rounded-full" :class="!login ? 'translate-x-full' : ''"></div>
    </div>
    <div class="flex justify-center">
        <TheLogin v-if="login" :username="username" :password="password" />
        <TheSignUp v-if="!login" :username="username" :password="password" :rememberme="rememberme" :termsAccept="termsAccept" :newsletter="newsletter"/>
    </div>
</template>
<script setup lang="ts">
    const username = ref();
    const password = ref();
    const rememberme = ref(false);
    const termsAccept = ref(false);
    const newsletter = ref(false);
    const login = ref(true);
</script>