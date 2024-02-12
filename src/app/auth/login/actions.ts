'use server'
import { createClient } from "@/utils/supabase/server";
import { Type_Login_FormData } from "@/utils/types";
import { cookies } from "next/headers";


export async function signInWithEmailAndPassword(data: Type_Login_FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const result = await supabase.auth.signInWithPassword(data);
	return JSON.stringify(result);
}
