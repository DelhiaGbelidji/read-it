"use client";
import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Types
type Type_data = {
  firstName: string;
  lastName: string;
};

//Validation schema
const Schema_SignUp = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const SignUpForm = () => {
  const { handleSubmit, control } = useForm<Type_data>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    resolver: yupResolver(Schema_SignUp),
  });
  const onSubmit: SubmitHandler<Type_data> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={"row"} spacing={2}>
        <Controller
          control={control}
          name="firstName"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField {...field} label="First name" variant="outlined" />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField {...field} label="Last name" variant="outlined" />
          )}
        />
      </Stack>

      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default SignUpForm;
