import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const user = await serverSupabaseUser(event);
    console.log(client.auth.getSession())
    if (!user) throw createError({
        statusCode: 404,
        statusMessage: "User not logged"
    });

    const { data: profile, error } = await client
        .from('Profiles')
        .select(`
            name,
            surname,
            phone
        `)
        .eq('user_id', user.id)
        .single();
    
    if (error) throw createError({
        statusCode: +error.code,
        statusMessage: error.message
    });

    return { ...profile, email: user.email};
})