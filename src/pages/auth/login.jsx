import { Alert, Container, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { Page, Title } from "../../component";
import PublicLayout from "../../layout/PublicLayout";
import { LoginForm } from "../../sections/auth";

const Login = () => {
  return (
    <PublicLayout>
    <Page title="Login">
      <Stack justifyContent="center" spacing={3} width="30rem" padding="1rem">
        <Title>Admin Panel Login</Title>
        <Alert severity="info" icon={false}>
          Use your email and password to login
        </Alert>
        <LoginForm />
      </Stack>
    </Page>
    </PublicLayout>
  );
};

export default Login;
