'use server'
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { Type_Login_FormData } from "@/utils/types";


export async function signInWithEmailAndPassword(data: Type_Login_FormData) {
	const supabase = await createSupabaseServerClient();
	const result = await supabase.auth.signInWithPassword(data);
	return JSON.stringify(result);
}
