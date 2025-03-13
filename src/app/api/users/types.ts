export type Type_User = {
  id?: number;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
};

export type Type_ChangePassword = {
  old_password: string;
  new_password: string;
};

export type Type_UpdateUser = {
  email?: string;
  firstname?: string;
  lastname?: string;
};
