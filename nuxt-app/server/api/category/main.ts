import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event);
    const { data: currentCategory, error} =
        await supabase
            .from('Category')
            .select(`
                *,
                children: Category (
                    *,
                    children: Category (*)
                )
            `)
            .is('parent_id', null)
    return currentCategory;
})