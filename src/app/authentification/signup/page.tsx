"use client";
import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
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
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
});

const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Type_data>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    resolver: yupResolver(Schema_SignUp),
  });

  const onSubmit: SubmitHandler<Type_data> = (data) => {
    try {
      console.log(data);
    } catch {
      console.error("error");
    }
  };

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={"row"} spacing={2}>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: true }}
            render={({ field, formState }) => (
              <TextField
                {...field}
                label="First name"
                variant="outlined"
                error={!!formState.errors?.firstName}
                helperText={errors.firstName?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            rules={{ required: true }}
            render={({ field, formState }) => (
              <TextField
                {...field}
                label="Last name"
                variant="outlined"
                error={!!formState.errors?.lastName}
                helperText={errors.lastName?.message}
              />
            )}
          />
        </Stack>

        <Button type="submit">Sign up</Button>
      </form>
    </Stack>
  );
};

export default SignUpForm;
