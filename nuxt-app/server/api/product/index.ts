import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    
    const queryParams = getQuery(event);

    const dbQuery = client
        .from('Product')
        .select('*');
    if (queryParams.categoryId)
        dbQuery.in('category_id', [queryParams.categoryId])

    if (queryParams.producerId)
        dbQuery.in('producer_id', [queryParams.producerId])

    const { data: products, error } = await dbQuery;

    if (error) throw createError({
        statusCode: +error.code,
        statusMessage: error.message
    });
    else if (products.length === 0)  throw createError({
        statusCode: 404,
        statusMessage: "Products Not Found"
    });

    return products as unknown as any[]
})