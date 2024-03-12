import { Type_User } from "../users/types"

export type Type_api_project= {
    id: number,
    name: string,
    image: string | null,
    createdAt:string,
    userId: number,
    user: Type_User
}

export type Type_Project = {
    id: number, 
    name: string, 
    image: string | null,
    author: string
}

export type Type_CreateProject = {
    name: string,
    image_url?: string 
}

export type Type_UpdateProject = {
    name?: string,
    image_url?: string 
}