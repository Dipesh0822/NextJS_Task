import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <Box padding={2}>
      <Image
        src="/images/logo.svg"
        width={150}
        height={50}
        alt="SocioSquares Logo"
      />
    </Box>
  );
}

export default Logo;
