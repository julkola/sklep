<template>
    <Transition appear name="modal">
        <div v-if="show" class="modal">
            <div @click="emits('close')" class="bg-black bg-opacity-60 inset-0 fixed"></div>
            <div class="relative grid grid-cols-2 w-96 mx-auto rounded-full my-2 bg-slate-200 shadow-inner">
                <button
                    @click="signin=true"
                    :class="signin ? 'text-white' : ''" 
                    class="relative z-10 p-1"
                >
                    Zaloguj się
                </button>
                <button
                    @click="signin=false"
                    :class="!signin ? 'text-white' : ''"
                    class="relative z-10 p-1"
                >
                    Zarejetruj się
                </button>
                <div class="absolute h-full w-1/2 bg-gradient-to-tr to-teal-500 from-indigo-700 rounded-full shadow-lg transition-transform duration-200  ease-out" :class="!signin ? 'translate-x-full' : ''"></div>
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
        </div>
    </Transition>
</template>
<script setup lang="ts">
    const { show } = defineProps(["show"]);
    const emits = defineEmits(["close"]);
    const signin = ref(true);
    const username = ref("");
    const password = ref("");
</script>