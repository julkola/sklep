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
            <label for="passwordCopy" class="mb-2">
                Powtórz hasło
            </label>
            <input type="password" name="passwordCopy" id="passwordCopy" v-model="passwordCopy" class="h-10 rounded-full border-gray-900 border-2 pl-4 pr-12 mb-3">
            <Checkbox id="termsAccpet" text="Akceptuję regulamin i politykę prywatności" :model-value="termsAccpet"/>
            <Checkbox id="newsletter" text="Chcę otrzymywać newsletter" :model-value="newsletter"/>
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus assumenda odit, et consectetur sequi numquam. Blanditiis ad illo porro culpa a magni, asperiores repellat ratione eum, iure nobis maxime ducimus.</p>
            <button type="submit" class=" bg-gray-900 text-white rounded-full px-4 h-8">Załóż konto</button>
        </form>
    </div>
</template>