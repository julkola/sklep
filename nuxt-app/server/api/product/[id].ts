import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const response = await client
        .from('Product')
        .select(`
            *,
            variantGroups: Product_variants (
                variantGroup: variant_id (
                    *,
                    variants: Product_variants (*)
                )
            ),
        `)
        .eq('id', event.context.params!.id)
        .single();
    return response;
})