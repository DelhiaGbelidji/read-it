import { Type_Signup } from "@/app/auth/components/SignUpForm";
import { BACKEND_URL } from "@/utils/constants";

export const registerUser = async (data: Omit<Type_Signup, 'confirm_password'>) => {
    try {
      const res = await fetch(BACKEND_URL + '/auth/register', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!res.ok) {
        return { error: res.statusText };
      }
  
      const response = await res.json();
      return { response };
    } catch (error) {
      return { error: "An error occurred during registration." };
    }
  };