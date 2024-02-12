'use server'
import { createSupabaseServerComponentClient } from "@/utils/supabase/supabase";
import { Type_Login_FormData } from "@/utils/types";


export async function signInWithEmailAndPassword(data: Type_Login_FormData) {
	const supabase = createSupabaseServerComponentClient()
  const result = await supabase.auth.signInWithPassword(data);
	return JSON.stringify(result);
}
