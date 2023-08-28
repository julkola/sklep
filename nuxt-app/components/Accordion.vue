<template>
    <div class="accordion">
        <button @click.once="setHeight" @click="handleExpand" class="flex justify-between items-center w-full px-4 py-2 border border-gray-100">
            <slot name="header"></slot>
        </button>
        <div ref="accbody" class="overflow-hidden duration-1000 transition-[max-height] ease-out" :class="expanded ? 'max-h-[var(--this-height)]' : 'max-h-0'">
            <div class="bg-gray-100 px-4 py-2">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const expanded = ref(false);
const accbody = ref() as Ref<HTMLElement>;
function handleExpand () {
    expanded.value = !expanded.value
}
function setHeight () {
    const thisHeight = `${accbody.value.firstElementChild!.getBoundingClientRect().height}px`;
    accbody.value.style.setProperty('--this-height', thisHeight)
}

</script>