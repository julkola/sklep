import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const ids = getQuery(event).ids as string[] | string;
    const client = await serverSupabaseClient(event);
    const params = (ids.length == 1) ? [ids] : ids;
    const { data: productNames, error: product_error} = await client
        .from('Product')
        .select('id,name')
        .in('id', params as string[])

    if (product_error) throw createError({
        statusCode: +product_error.code,
        statusMessage: 'ids:'+ids?.toString()
    });
    else if (!productNames)  throw createError({
        statusCode: 404,
        statusMessage: "Product Not Found"
    });

    return productNames as unknown as string[]
})