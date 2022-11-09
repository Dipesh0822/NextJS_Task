import React from "react";
import { Page, Title } from "../../component";
import { LoginForm, RegisterForm } from "../../sections/auth";
import PublicLayout from "../../layout/PublicLayout";
import { Alert, Stack } from "@mui/material";
import { toast } from "react-toastify";
import { useCreateUserMutation } from "../../store/query/auth.query";

export default function Register() {
  return (
    <PublicLayout>
      <Page title="Register">
        <Stack justifyContent="center" spacing={3} width="30rem" padding="1rem">
          <Title>Create new account</Title>
          <Alert severity="info" icon={false}>
            Use your name, email and password to register
          </Alert>
          <RegisterForm />
        </Stack>
      </Page>
    </PublicLayout>
  );
}
