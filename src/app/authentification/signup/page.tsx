"useClient";
import { Button, Input, Stack } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const SignUp = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit = () => console.log("Submitting");

  return (
    <>
      <Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />

          <Button type="submit"> Sign up</Button>
        </form>
      </Stack>
    </>
  );
};

export default SignUp;
