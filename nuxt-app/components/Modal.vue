<template>
    <Transition appear name="modal">
        <div v-if="show" class="modal">
            <div @click="emits('close')" class="bg-black bg-opacity-60 inset-0 fixed"></div>
            <div class="bg-white shadow-lg p-4 fixed inset-1/4 modal-body">
                <div class="flex justify-between">
                    <span>
                        <slot name="header"></slot>
                    </span>
                    <button @click="emits('close')" class="bg-gray-700 rounded-full h-8 w-8">&times;</button>
                </div>
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">
    const { show } = defineProps(["show"]);
    const emits = defineEmits(["close"]);
</script>