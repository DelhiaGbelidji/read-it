
import { supabase } from "@/supabase";
import { Type_SignUp_FormData } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export async function registerUser(req: NextApiRequest, res: NextApiResponse){
  const { firstname, lastname, email, password } : Type_SignUp_FormData = req.body;
    
  if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }
    
  const { data: {user}, error } = await supabase.auth.signUp(
    {
      email: email,
      password: password,
      options: {
        data: {
          firstname: firstname,
          lastname: lastname,
        },
        emailRedirectTo: `${location.origin}/auth/callback`,
      }
    }
  )

  console.log({ error });
  console.log({ user });
  
  if (error) {
    return res.status(401).json({ error: error.message });
  } else {
    return res.status(200).json({ user });
  }
}