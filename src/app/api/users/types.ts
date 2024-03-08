export type Type_CreateUser = {
    email: string
    firstname: string
    lastname: string
    password: string
}

export type Type_ChangePassword = {
        old_password: string;
        new_password: string;
}
