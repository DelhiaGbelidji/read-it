import { SetStateAction } from "react"

//Props
export type Type_Props_SignUpForm ={
  email: string,
  setEmail: React.Dispatch<SetStateAction<string>>,
  setEmailSent: React.Dispatch<SetStateAction<boolean>>
}
export type Type_Props_ConfirmEmail = {
  email: string
}

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
