'use server'
import { createSupabaseServerComponentClient } from "@/utils/supabase/supabase";
import { Type_Auth } from "@/utils/types";


export async function signInWithEmailAndPassword(data: Omit<Type_Auth, "confirm_password">) {
	const supabase = createSupabaseServerComponentClient()
  const result = await supabase.auth.signInWithPassword(data);
	return JSON.stringify(result);
}

export async function registerUser(data: Type_Auth) {
	const supabase = createSupabaseServerComponentClient()
	const result = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
    		options:{
      			emailRedirectTo: '/api/auth/callback'
    		}
		});
	return JSON.stringify(result);
}