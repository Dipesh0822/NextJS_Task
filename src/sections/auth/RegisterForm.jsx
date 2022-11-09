import { IconButton, InputAdornment, Stack, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, FormInputField, FormProvider } from "../../component";

import {
  IconEmail,
  IconLogin,
  IconPassword,
  IconPasswordHidden,
  IconPasswordVisible,
  IconUser,
} from "../../config/icons.config";
import { useAuth } from "../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema";
import { useRouter } from "next/router";

function RegisterForm({ onSubmit }) {
  const theme = useTheme();
  const { register } = useAuth();
  const router = useRouter();

  const defaultValues = {
    email: "",
    password: "",
    remember_me: false,
  };

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const changePasswordState = () => setPasswordVisible((prev) => !prev);

  const redirectToLoginPage = () => {
    router.push("/auth/login");
  };

  const isError = (fieldname) =>
    errors[fieldname] ? theme.palette.error.light : theme.palette.primary.main;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(register)}>
      <Stack spacing={3}>
        <FormInputField
          name="name"
          label="Name"
          type="text"
          placeholder="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconUser color={isError("name")} />
              </InputAdornment>
            ),
          }}
        />
        <FormInputField
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconEmail color={isError("email")} />
              </InputAdornment>
            ),
          }}
        />

        <FormInputField
          name="password"
          label="Password"
          placeholder="Password"
          type={isPasswordVisible ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconPassword color={isError("password")} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <IconButton size="small" onClick={changePasswordState}>
                  {isPasswordVisible ? (
                    <IconPasswordVisible color={isError("password")} />
                  ) : (
                    <IconPasswordHidden color={isError("password")} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button startIcon={<IconLogin />} variant="contained" type="submit">
          Register
        </Button>
        <Button onClick={redirectToLoginPage}>Go back to login</Button>
      </Stack>
    </FormProvider>
  );
}

export default RegisterForm;
