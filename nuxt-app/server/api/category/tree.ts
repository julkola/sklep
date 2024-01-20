import { serverSupabaseClient } from "#supabase/server";
import { QueryValue } from "ufo";
interface Category {
    id: string;
    name: string;
}
interface CatTree {
    ancestors?: Category[];
    currentLevel: Category[];
    children?: Category[];
}

export default defineEventHandler(async (event) => {

    const supabase = await serverSupabaseClient(event);
    const queryParams = getQuery(event);
    const catId: QueryValue | QueryValue[] | null = queryParams.categoryId;

    if (typeof catId !== 'string' && typeof catId !== null) throw createError({
        statusCode: 0,
        statusMessage: "Wrong param type",
    });

    async function getCategories(catId: string | null): Promise<CatTree> {
        let query = supabase
            .from('Category')
            .select(`
                parent: parent_id(
                    id,
                    name
                ),
                curr: parent_id(
                    children: Category(id, name)
                )
            `);
        
        let children = null;
            
        if (catId) {
            query = query.eq('id', catId);
                
            const childrenQuery = supabase
                    .from('Category')
                    .select('id, name')
                    .eq('parent_id', catId);

            children = await childrenQuery;
        }

        const queryResult = await query.single();
        
        if (queryResult.error) 
            throw createError({
                statusCode: +queryResult.error.code,
                statusMessage: queryResult.error.message,
            });

        const catTree: CatTree = {
            currentLevel: queryResult.data.curr.children,
            ancestors: [queryResult.data.parent],
        }

        if (children && !children.error) {
            catTree.children = children.data
        }

        console.log(catTree)
        return catTree
    }

    return await getCategories(catId as string | null);
})