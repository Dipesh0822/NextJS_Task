import { Card, CardContent, Grid, styled } from "@mui/material";
import React from "react";
import Logo from "../component/Logo";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";

const RootStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(0, 0),
}));

export const PublicLayout = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    return router.push("/dashboard");
  }

  return (
    <RootStyle>
      <Card>
        <CardContent>
          <Logo />
          {children}
        </CardContent>
      </Card>
    </RootStyle>
  );
};

export default PublicLayout;
