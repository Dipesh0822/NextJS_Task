import { Typography, TypographyProps } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Title(props) {
  return (
    <Stack>
      <Typography variant="h3" {...props}></Typography>
    </Stack>
  );
}

export default Title;
