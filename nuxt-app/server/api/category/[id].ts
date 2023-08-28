import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event);
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
            .eq('id', event.context.params!.id)
            .single();
    return currentCategory;
})