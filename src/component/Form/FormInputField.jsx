import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function FormInputField(props) {
  const { control } = useFormContext();
  const { name, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...rest}
        />
      )}
    />
  );
}

export default FormInputField;
