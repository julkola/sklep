import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event);
    const { data: products, error} =
        await supabase
            .from('Product')
            .select(`
                *
            `)
    return products;
})