import { Type_Project, Type_api_project } from "./types";

export const formatterProject = (project: Type_api_project): Type_Project => {
    return {
        id: project.id,
        name: project.name,
        image: project.image,
        author: project.user.firstname + ' ' + project.user.lastname
    }
}

export const formatterProjects = (projects: Type_api_project[]): Type_Project[] =>{
    if(!projects) return []
    return projects.map((project: Type_api_project )=> formatterProject(project))
}