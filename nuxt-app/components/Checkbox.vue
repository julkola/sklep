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
            class="relative flex cursor-pointer select-none pl-6 after:absolute after:w-4 after:h-4 after:my-1 after:mr-2 after:top-0 after:left-0 after:rounded-sm after:border-gray-900 after:border peer-checked:after:bg-gray-300">
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