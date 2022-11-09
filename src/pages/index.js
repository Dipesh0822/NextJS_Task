import { CircularProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Page } from "../component";
import { useAuth } from "../hooks/useAuth";
import PublicLayout from "../layout/PublicLayout";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        router.replace("/auth/login");
      } else {
        router.replace("/dashbaord");
      }
    }, 2000);
  }, []);

  return (
    <PublicLayout>
      <Page>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <CircularProgress />
          <Typography variant="h3">Verifying your identity</Typography>
        </Stack>
      </Page>
    </PublicLayout>
  );
}
