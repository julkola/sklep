<template>
    <div class="">
        <form class="flex flex-col w-96">
            <label for="username" class="mb-2">
                Login
            </label>
            <input type="text" name="username" id="username" v-model="username" class="h-10 rounded-full border-gray-900 border-2 pl-4 pr-12 mb-3">
            <label for="password" class="mb-2">
                Hasło
            </label>
            <input type="password" name="password" id="password" v-model="password" class="h-10 rounded-full border-gray-900 border-2 pl-4 pr-12 mb-3">
            <div class="">
                <Checkbox id="rememberme" text="Zapamiętaj mnie" :model-value="rememberme"/>
                <NuxtLink to="/password-rematch">Zapomniałem hasła</NuxtLink>
            </div>
            <button type="submit" class=" bg-gray-900 text-white rounded-full px-4 h-8">Zaloguj się</button>
        </form>
    </div>
</template>