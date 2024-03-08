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

export const changeUserPassword = async (userId: number, data: Type_ChangePassword, token: string) => {
  const response = await fetch(`${BACKEND_URL}/user/${userId}/change-password`, {
    method: 'PATCH', // Utilisation de PATCH comme défini dans votre route NestJS
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Inclure le token JWT pour l'authentification
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return await response.json();
};