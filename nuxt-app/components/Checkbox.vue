<template>
    <label :for="props.id" class="flex">
        <div class="bg-yellow-700 w-4 h-4">
            a
        </div>
        <input
            :id="props.id"
            type="checkbox"
            v-model="value"
        />
        <span>{{ props.text }}</span>
    </label>
</template>
<script setup lang="ts">
    const props = defineProps(["id", "text", 'modelValue']);
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