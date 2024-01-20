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
    const catId: QueryValue | QueryValue[] = queryParams.categoryId ?? "";

    if (typeof catId !== 'string' && typeof catId !== null) throw createError({
        statusCode: 0,
        statusMessage: "Wrong param type"+typeof catId,
    });

    async function getCategories(catId: string): Promise<CatTree> {
        let parentQuery;
        let children = null;
        let curr;
        let ancestor;

        if (catId) {
            parentQuery = supabase
                .from('Category')
                .select(`
                    parent: parent_id(
                        id,
                        name
                    ),
                    curr: parent_id(
                        children: Category(id, name)
                    )
                `)
                .eq('id', catId);
            
            const childrenQuery = supabase
                    .from('Category')
                    .select('id, name')
                    .eq('parent_id', catId);

            children = await childrenQuery;
    
            const queryResult = await parentQuery.single();
                
            if (queryResult.error) 
                throw createError({
                    statusCode: +queryResult.error.code,
                    statusMessage: queryResult.error.message,
                });
                
            curr = queryResult.data.curr?.children;
            ancestor = queryResult.data.parent;
        }
        

        if (!curr) {
            const { data, currError } = await supabase
                .from('Category')
                .select(`
                    id,
                    name
                `)
                .is('parent_id', null);
            
            curr = data;
        }

        const catTree: CatTree = {
            currentLevel: curr,
        }

        if (ancestor) {
            catTree.ancestors = [ancestor];
        }
        if (children && !children.error) {
            catTree.children = children.data
        }

        return catTree
    }

    return await getCategories(catId as string);
})