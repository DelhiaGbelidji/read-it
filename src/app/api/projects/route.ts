import { BACKEND_URL } from "@/utils/constants"
import { formatterProjects } from "./formatters";
import { Type_CreateProject, Type_UpdateProject, Type_api_project } from "./types";

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
  
  export const getProjectById = async (id: number, token: string) =>{ 
    await fetch(`${BACKEND_URL}/projects/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });}


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

  export const updateProject = async (data: Type_UpdateProject, id: number, token: string) => {
    try {
      const res = await fetch(`${BACKEND_URL}/projects/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
      return { error: res.statusText };
    }

    const response = await res.json();
    return response;
    
  } catch (error) {
    return { error: "An error occurred." };
  }
  };
  
  export const deleteProject = async (id: number, token: string) => {
    const response = await fetch(`${BACKEND_URL}/projects/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }}