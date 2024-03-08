import { BACKEND_URL } from "@/utils/constants";
import { Type_ChangePassword, Type_UpdateUser, Type_User } from "./types";
import { signOut } from "next-auth/react";

export const registerUser = async (data: Type_User) => {
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
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return await response.json();
};

export const updateUser = async (userId: number, data: Type_UpdateUser, token: string) => {
  const response = await fetch(`${BACKEND_URL}/user/${userId}/update`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return await response.json();
};

export const deleteUser = async (userId: number, token: string) => {
  const response = await fetch(`${BACKEND_URL}/user/${userId}`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  signOut({ redirect: false });
  window.location.href = '/';
  return await response.json();
};