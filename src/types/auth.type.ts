import { SetStateAction } from "react"

//Forms
export type Type_SignUp_FormData = {
  firstname: string
  lastname: string
  email: string
  password: string
  confirm_password: string
}

export type Type_Login_FormData = {
  email: string
  password: string
}
