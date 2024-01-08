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
            type="email"
            :id="name"
            :name="name"
            required
            v-model="modelValue"
            @input="(e) => { onInput(e) }"
            class="h-10 w-full rounded-full bg-slate-50 shadow-inner pl-4 pr-12"
        >
        <div class="absolute inset-y-0 right-3 grid place-items-center ">
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
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string,
}>();
const modelValue = defineModel();
const isValid = ref();

function onInput (e: Event) {
    isValid.value = (<HTMLInputElement>e.currentTarget).validity.valid;
}
</script>