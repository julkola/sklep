<template>
    <form
        v-if="user"
        @submit.prevent="onSubmit"
        class="bg-white shadow-xl rounded-md p-6"
    >
        <div class="flex items-center mb-4">
            <span class="mr-4">
                Ocena:
            </span>
            <label
                v-for="n in 5"
                :for="`${n}`"
                class="relative grid place-items-center w-6 h-6 cursor-pointer"
            >
                <input
                    type="radio"
                    v-model="rating"
                    :id="`${n}`"
                    :value="`${n}`"
                    name="rating"
                    class="absolute opacity-0 peer"
                >
                <StarEmpty class="absolute"/>
                <StarFullIcon
                    class="absolute"
                    :class="n<=rating ? 'opacity-100' : ' opacity-0'"
                />
            </label>
            <span class="ml-2 font-semibold">
                {{ rating }} / 5
            </span>
        </div>
        <textarea
            name="opinion"
            v-model="opinion"
            class="w-full resize-none rounded-lg shadow-inner bg-gray-100 px-4 py-2"
            rows="4"
            placeholder="Napisz opinię"
        ></textarea>
        <span class="block">
            Oceniasz jako: {{ user.email }}
        </span>
        <button class="mt-4 bg-gradient-to-br from-gray-200 to-indigo-200 disabled:bg-gray-200 disabled:bg-none text-gray-900 rounded-full shadow-lg px-6 h-8">
            Prześlij
        </button>
    </form>
    <p v-else class="text-center font-semibold bg-white shadow-xl rounded-md p-6">
        Zaloguj się, aby dodać opinię
    </p>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const userName = ref();
const rating = ref(5);
const opinion = ref("");
const emits = defineEmits(["addOpinion"]);
const { productId } = defineProps<{
    productId: number
}>();
if (user.value) {
    const { data: profile, error } = await supabase
        .from('Profiles')
        .select(`
            name
        `)
        .eq('user_id', user.value.id)
        .single();
    if (profile) userName.value = profile.name;
}
async function onSubmit (e: Event) {
    const data = new FormData(e.currentTarget as HTMLFormElement);
    const response = await supabase
        .from('Opinions')
        .insert({
            user_id:  user.value.id,
            opinion: opinion.value,
            rating: rating.value,
            product_id: productId,
            author: userName.value
        })
        .select()
        .single()
    if (response.data) emits("addOpinion", response.data)
}
</script>