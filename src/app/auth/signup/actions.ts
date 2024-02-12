'use server'
import { createClient } from "@/utils/supabase/server";
import { Type_SignUp_FormData } from "@/utils/types";
import { cookies } from "next/headers";

export async function registerUser(data: Type_SignUp_FormData) {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)
	const result = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
    		options:{
      			emailRedirectTo: '/auth/callback'
    		}
		});
	return JSON.stringify(result);
}