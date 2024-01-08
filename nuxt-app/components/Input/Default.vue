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
            :id="name"
            :name="name"
            :required="required"
            v-model="modelValue"
            v-bind="$attrs"
            @input="(e) => { onInput(e) }"
            class="w-full px-6 pt-3 pb-2 bg-slate-50 shadow-inner rounded-full"
        >
        <div  class="absolute inset-y-0 right-3 grid place-items-center ">
            <IconError
                :class="isValid === false ? '' : 'opacity-0' "
                class="absolute grid place-items-center bg-red-100 text-red-700 rounded-full w-6 h-6 p-1"
            />
            <IconCheck
                :class="isValid === true && !(!props.required && input.value === '') ? '' : 'opacity-0' "
                class="grid place-items-center bg-emerald-100 text-teal-700 rounded-full w-6 h-6 p-1"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['validate'])
const props = defineProps<{
    name: string,
    required: boolean,
}>();
const modelValue = defineModel<any>();
const input = ref();
const isValid = ref();

onMounted(() => {
    if (input.value.value) isValid.value = input.value.validity.valid;
    else if (!props.required) isValid.value = true;
    emits('validate', input.value.name, isValid.value);
})
function onInput (e: Event) {
    isValid.value = (<HTMLInputElement>e.currentTarget).validity.valid;
    emits('validate', input.value.name, isValid.value);
}
</script>