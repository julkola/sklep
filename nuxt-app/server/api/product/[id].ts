import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const { data: product, error: product_error} = await client
        .from('Product')
        .select(`
            *,
            variantGroups: Product_variants (
                variantGroup: variant_id (
                    *,
                    variants: Product_variants (*)
                )
            )
        `)
        .eq('id', event.context.params!.id)
        .single();

    if (product_error) throw createError({
        statusCode: +product_error.code,
        statusMessage: product_error.details+"\n"+product_error.message+"\n"+product_error.hint
    });
    else if (!product)  throw createError({
        statusCode: 404,
        statusMessage: "Product Not Found"
    });

    return {
        ...product as Database["public"]["Tables"]["Product"]["Row"],
    };
})