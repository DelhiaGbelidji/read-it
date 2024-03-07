import { BACKEND_URL } from "@/utils/constants";
import { Type_ChangePassword, Type_CreateUser } from "./types";

export const registerUser = async (data: Type_CreateUser) => {
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

  export const changeUserPassword = async (data: Type_ChangePassword) => {
    const response = await fetch('/api/user/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXTAUTH_SECRET}`, 
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }
  
    return await response.json();
  };