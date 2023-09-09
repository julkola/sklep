<template>
    <div class="container mx-auto flex items-start">
        <TheAccountNavigation class="sticky top-28 w-60 mr-4 px-6 py-4 rounded shadow-lg" />
        <main class="flex-1">
            <Transition name="slide-out">
                <component :is="currentComponent" />
            </Transition>
        </main>
    </div>
</template>
<script setup lang="ts">
import { TheUserLastOrder, TheUserData, TheUserOpinions, TheUserAddress } from '#components';
const usedComponents = new Map<string, Component>([
    ["", TheUserLastOrder],
    ["data", TheUserData], // ok
    ["orders", TheUserData],
    ["address", TheUserAddress], // ok
    ["opinions", TheUserOpinions], // ok // dorobić alerty na puste opinie
])
const route = useRouter().currentRoute.value.params.route as string;
const currentComponent = computed( () => usedComponents.get(route) )
</script>