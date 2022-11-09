import { IconButton, InputAdornment, Stack, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  FormCheckbox,
  FormInputField,
  FormProvider,
} from "../../component";

import {
  IconEmail,
  IconLogin,
  IconPassword,
  IconPasswordHidden,
  IconPasswordVisible,
} from "../../config/icons.config";
import { useAuth } from "../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema";
import Router, { useRouter } from "next/router";

function LoginForm() {
  const theme = useTheme();
  const { login } = useAuth();
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

  const onSubmit = (data) => {
    login(data);
  };

  const redirectToRegisterPage = () => {
    router.push("/auth/register");
  };

  const isError = (fieldname) =>
    errors[fieldname] ? theme.palette.error.light : theme.palette.primary.main;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
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
        <FormCheckbox name="remember_me" label="Remember Me" />
        <Button startIcon={<IconLogin />} variant="contained" type="submit">
          Login
        </Button>
        <Button onClick={redirectToRegisterPage}>Create New Account</Button>
      </Stack>
    </FormProvider>
  );
}

export default LoginForm;
