const supabase = useSupabaseClient();

export default async (userId: string, name = "", surname = "", phone = "") => {
    const { error } = await supabase
        .from('Profiles')
        .insert({ 
            name: name,
            surname: surname,
            phone: phone,
        })
        .eq('user_id',  userId)
    if (error) return error;
}