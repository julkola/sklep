import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event);
    const queryParams = getQuery(event);
    const { data: currentCategory, error} =
        await supabase
            .from('Category')
            .select(`
                *,
                filters: Attributes (
                    id,
                    name,
                    options: Attr_values (
                        *
                    )
                ),
                parent:parent_id(*)
            `)
            .eq('id', queryParams.categoryId!)
            .single();
    return currentCategory;
})