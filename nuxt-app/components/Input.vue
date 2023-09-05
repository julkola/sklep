<template>
    <div class="relative mt-6">
        <label
            :for="name"
            class="absolute top-0 -translate-y-1/2 mx-5 leading-tight font-semibold"
        >
            <slot/>
            <span v-if="required" class="text-teal-400">
                *
            </span>
        </label>
        <input
            ref="input"
            :type="type ? type : 'text'"
            :id="name"
            :name="name"
            :required="required"
            :placeholder="placeholder"
            class="w-full px-6 pt-3 pb-2 bg-slate-50 shadow-inner rounded-full"
            :value="modelValue"
            :pattern="pattern"
            :minlength="min"
            :maxlength="max"
            @input="(e) => { onInput(e) }"
        >
        <div  class="absolute inset-y-0 right-3 grid place-items-center ">
            <ErrorIcon
                :class="isValid === false ? '' : 'opacity-0' "
                class="absolute grid place-items-center bg-red-100 text-red-700 rounded-full w-6 h-6 p-1"
            />
            <CheckIcon
                :class="isValid === true ? '' : 'opacity-0' "
                class="grid place-items-center bg-emerald-100 text-teal-700 rounded-full w-6 h-6 p-1"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
const { name, required } = defineProps<{
    name: string,
    placeholder: string,
    required: boolean,
    modelValue?: string,
    pattern?: string,
    min?: number,
    max?: number,
    type?: string,
    inputMode?: string
}>();
const input = ref();
const isValid = ref();
onMounted(() => {
    if (input.value.value) isValid.value = input.value.validity.valid
})
function onInput (e: Event) {
    emits('update:modelValue', (<HTMLInputElement>e.currentTarget).value);
    isValid.value = (<HTMLInputElement>e.currentTarget).validity.valid;
}
</script>