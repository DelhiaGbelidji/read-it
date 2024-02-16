"use server";

import { createSupabaseServerClient } from "../supabase/supabase";
import { unstable_noStore as noStore } from "next/cache";

export async function readUserSession() {
	noStore();
	const supabsae = await createSupabaseServerClient();
	return await supabsae.auth.getSession();
}