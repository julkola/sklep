<template>
    <label
        :for="name"
        class="mb-2"
    >
        <slot/>
    </label>
    <div class="relative mb-3">
        <input
            ref="input"
            :type="(showPassword) ? 'text' : 'password'"
            :id="name"
            :name="name"
            v-model="modelValue"
            @input="(e) => { onInput(e) }"
            required
            minlength="6"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
            class="h-10 w-full rounded-full bg-slate-50 shadow-inner pl-4 pr-12"
        >
        <button
            type="button"
            @click="showPassword=!showPassword"
            class="absolute grid place-items-center right-0 mr-2 inset-y-0 w-10 rounded-full text-gray-700"
        >
            <IconEye />
        </button>
        <div class="absolute inset-y-0 right-12 grid place-items-center ">
            <IconError
                :class="isValid === false ? '' : 'opacity-0' "
                class="absolute grid place-items-center bg-red-100 text-red-700 rounded-full w-6 h-6 p-1"
            />
            <IconCheck
                :class="isValid === true ? '' : 'opacity-0' "
                class="grid place-items-center bg-emerald-100 text-teal-700 rounded-full w-6 h-6 p-1"
            />
        </div>
    </div>
    <span
        v-show="isValid === false"
        class="block mb-2 px-6 py-2 text-sm bg-red-100 text-red-700 rounded-lg shadow-lg shadow-red-50"
    >
        Hasło musi składać się z przynajmniej 6 znaków, 1 litery i 1 cyfry
    </span>
</template>

<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
const props = defineProps<{
    name: string,
}>();
const modelValue = defineModel();
const isValid = ref();
const showPassword = ref(false);

function onInput (e: Event) {
    isValid.value = (<HTMLInputElement>e.currentTarget).validity.valid;
}
</script>