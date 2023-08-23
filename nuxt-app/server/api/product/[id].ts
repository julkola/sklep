import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~~/index";
const products = [
    {
        id: "1231",
        name: "Anwen - Spanwen - Kula do Kąpieli o Zapachu Magnolia - 100g",
        desc: "Kula do kąpieli o zapachu Magnolia",
        price: 28.30,
        available: 12,
        poducerId: "123",
        producerName: "SkinTra",
        variants: [
            {
                id: "1231",
                variantName: "Magnolia"
            },
            {
                id: "1232",
                variantName: "Róża"
            },
            {
                id: "1234",
                variantName: "Bez"
            },
        ]
    },
    {
        id: "1232",
        name: "Anwen - Spanwen - Kula do Kąpieli o Zapachu Róża - 100g",
        desc: "Kula do kąpieli o zapachu Róża",
        price: 28.30,
        available: 12,
        poducerId: "123",
        producerName: "SkinTra",
        variants: [
            {
                id: "1231",
                variantName: "Magnolia"
            },
            {
                id: "1232",
                variantName: "Róża"
            },
            {
                id: "1234",
                variantName: "Bez"
            },
        ]
    },
    {
        id: "1234",
        name: "Anwen - Spanwen - Kula do Kąpieli o Zapachu Bez - 100g",
        desc: "Kula do kąpieli o zapachu Bez",
        price: 28.30,
        available: 12,
        poducerId: "123",
        producerName: "SkinTra",
        variants: [
            {
                id: "1231",
                variantName: "Magnolia"
            },
            {
                id: "1232",
                variantName: "Róża"
            },
            {
                id: "1234",
                variantName: "Bez"
            },
        ]
    }
]
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