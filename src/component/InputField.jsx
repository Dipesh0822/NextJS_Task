import { TextField, TextFieldProps } from "@mui/material";
import React, { forwardRef } from "react";

const InputField = forwardRef((props) => {
  return <TextField variant="outlined" {...props} />;
});

export default InputField;
