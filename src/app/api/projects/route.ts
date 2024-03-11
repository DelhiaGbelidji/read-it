import { BACKEND_URL } from "@/utils/constants"
import { formatterProjects } from "./formatters";
import { Type_api_project } from "./types";

export const getProjects = async (token: string) => {
    try {
      const res = await fetch(`${BACKEND_URL}/projects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
  
      if (!res.ok) {
        throw new Error(`Error fetching projects: ${res.statusText}`);
      }
  
      const projects: Type_api_project[] = await res.json();
      return { data: formatterProjects(projects), error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error: (error as Error).message };
    }
  };
  