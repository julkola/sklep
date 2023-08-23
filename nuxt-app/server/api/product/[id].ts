import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~~/index";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const { data: product, error: product_error} = await client
        .from('Product')
        .select()
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
    
    const { data: variantGroup, error: variant_error } = await client.
        from('Variants')
        .select(`
            *,
            Product_variants (
                *
            )
        `)

    return {
        ...product as Database["public"]["Tables"]["Product"]["Row"],
        variantGroup: variantGroup as any,
    };
})