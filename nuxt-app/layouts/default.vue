<template>
    <NuxtLoadingIndicator />
    <div class="flex flex-col h-full">
        <TheHeader @openCart="isCartOpen = true" @showLogin="showLogin=true"/>
        <div class="flex-1 container mx-auto mt-8 mb-16">
          <slot/>
        </div>
        <TheFooter />
        <TheCart :open="isCartOpen" @close="isCartOpen = false"/>
        <RecentlyAddedModal/>
        <TheCookieManagementModal/>
        <TheLoginModal :showLogin="showLogin && !user" @close="showLogin=false"/>
        <Transition name="alert">
          <div
            v-if="user && false"
            class="fixed top-1/4 right-1/2 translate-x-1/2 bg-emerald-100 text-emerald-950 rounded-md px-6 py-4"
          >
            Cześć, {{ user.email }}
          </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
const user = useSupabaseUser();
const isCartOpen = ref(false);
const showLogin = ref(false);

</script>