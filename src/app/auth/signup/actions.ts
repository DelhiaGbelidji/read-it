'use server'
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { Type_SignUp_FormData } from "@/utils/types";

export async function registerUser(data: Type_SignUp_FormData) {
	const supabase = await createSupabaseServerClient();
	const result = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
    options:{
      emailRedirectTo: '/auth/callback'
    }
	});
	return JSON.stringify(result);
}