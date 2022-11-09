import React from "react";
import MuiButton, { ButtonProps } from "@mui/material/Button";

const Button = ({ children, ...rest }) => {
  return (
    <MuiButton {...rest} size="large">
      {children}
    </MuiButton>
  );
};

export default Button;
