<template>
    <Modal :show="showLogin" @close="emits('close')">
        <div class=" px-4 pt-2 pb-4 w-96 mx-auto my-2">
            <div class="relative grid grid-cols-2 rounded-full bg-slate-50 text-gray-900 shadow-inner">
                <button
                    @click="signin=true"
                    class="relative z-10 p-1"
                >
                    Zaloguj się
                </button>
                <button
                    @click="signin=false"
                    class="relative z-10 p-1"
                >
                    Zarejetruj się
                </button>
                <div class="absolute h-full w-1/2 bg-gradient-to-br from-gray-200 to-indigo-200 rounded-full shadow-lg transition-transform duration-200  ease-out" :class="!signin ? 'translate-x-full' : ''"></div>
            </div>
        </div>
        <div class="flex w-96 mx-auto overflow-hidden">
            <TheLogin 
                :username="username"
                :password="password"
                class="flex-none w-96 transition-transform duration-200 ease-out"
                :class="signin ? '' : '-translate-x-full' "
            />
            <TheSignUp
                :username="username"
                :password="password"
                class="flex-none w-96 transition-transform duration-200 ease-out"
                :class="!signin ? '-translate-x-full' : '' "
            />
        </div>
    </Modal>
</template>
<script setup lang="ts">
    const { showLogin } = defineProps(["showLogin"]);
    const emits = defineEmits(["close"]);
    const signin = ref(true);
    const username = ref("");
    const password = ref("");
</script>