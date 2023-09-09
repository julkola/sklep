import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const { data:products, error} = await client
        .from('Product')
        .select(`
            *,
            variantGroups: Product_variants (
                variantGroup: variant_id (
                    *,
                    variants: Product_variants (*)
                )
            ),
            rating: Opinions (rating)
        `)
        .eq('id', event.context.params!.id)
    
    if (error) throw createError({
        statusCode: +error.code,
        statusMessage: error.message
    });
    else if (products.length === 0)  throw createError({
        statusCode: 404,
        statusMessage: "Product Not Found"
    });

    const product = products[0];

    if (product && product.rating.length > 0) product.rating = product.rating.reduce((acc:number, val: { rating:number } ) => acc += val.rating, 0) / product.rating.length;
    else product.rating = null;

    return product;
})