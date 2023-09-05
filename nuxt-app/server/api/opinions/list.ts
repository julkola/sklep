import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event);
    const queryParams = getQuery(event);
    const { data: opinions, error } =
        await supabase
            .from('Opinions')
            .select()
            .eq('product_id', queryParams.productId!);
    return opinions;
})