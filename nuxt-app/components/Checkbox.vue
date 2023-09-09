<template>
    <div class="relative">
        <input
            :id="props.id"
            type="checkbox"
            v-model="value"
            class="absolute scale-0 peer"
        />
        <label
            :for="props.id"
            class="relative flex cursor-pointer select-none pl-6 after:absolute after:w-4 after:h-4 after:my-1 after:mr-2 after:top-0 after:left-0 after:rounded-sm after:shadow peer-checked:after:bg-gray-0 peer-checked:[&_.icon]:opacity-100 peer-checked:[&_.icon]:scale-100"
        >
            <IconCheck class="icon absolute z-10 opacity-0 scale-0 w-4 h-4 p-0.5 my-1 mr-2 top-0 left-0 transition-all duration-200"/>
            <span>
                <slot></slot>
            </span>
        </label>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps<{
        id: string,
        modelValue?: any
    }>();
    const emits = defineEmits(['update:modelValue'])
    const value = computed({
        get() {
            return props.modelValue
        },
        set(value) {
            emits('update:modelValue', value)
        }
    })
</script>