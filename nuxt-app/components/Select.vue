<template>
    <div class="relative">
        <button
            class="relative"
            @click="isOpen = !isOpen"
            :aria-label="label"
            aria-haspopup="listbox"
        >
            <span class="absolute bottom-full left-3 text-xs leading-none translate-y-1/2 bg-white block p-1">
                {{ label }}
            </span>
            <span
                :style="`min-width:${maxChars+4}ch`"
                class="flex items-center h-10 px-4 shadow-inner rounded-full bg-white text-gray-900 border border-gray-200 select-none"
            >
                {{ options.get(selectValue) }}
            </span>
        </button>
        <div
            v-show="isOpen"
            role="listbox"
            class="absolute px-4 py-2 top-full left-1/2 -translate-x-1/2 grid gap-1 rounded-lg shadow bg-white"
        >
            <div v-for="[key, text] in options" class="realtive">
                <input
                    type="radio"
                    :name="selectName"
                    :id="`${selectName}-${key}`"
                    :value="key"
                    v-model="selectValue"
                    class="absolute opacity-0 peer"
                >
                <label
                    :for="`${selectName}-${key}`"
                    class="relative block px-4 py-1 whitespace-nowrap cursor-pointer before:absolute before:inset-0 before:-z-10 before:opacity-0 before:bg-gray-100 before:rounded-full hover:before:opacity-100 peer-focus-visible:before:opacity-100"
                >
                    {{ text }}
                </label>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const isOpen = ref(false);
const { options, selectName, value } = defineProps<{
    selectName: string,
    label: string,
    value: "",
    options: Map<string, string>
}>();
const emits = defineEmits(["change"]);
let maxChars = 0;
options.forEach((value) => {
    if (value.length > maxChars) maxChars = value.length;
});
const selectValue = ref(value);
watchEffect(
    ()=>{
        emits("change", selectValue)
    }
)
</script>