import { BACKEND_URL } from "@/utils/constants"
import { formatterProjects } from "./formatters";
import { Type_CreateProject, Type_api_project } from "./types";

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
  
  export const createProject = async (data: Type_CreateProject, token: string) => {
    try {
      const res = await fetch(BACKEND_URL + '/projects/create', {
        method: "POST",
        body: JSON.stringify({name: data.name}),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
  
      if (!res.ok) {
        return { error: res.statusText };
      }
  
      const response = await res.json();
      return { response };
    } catch (error) {
      return { error: "An error occurred." };
    }
  };