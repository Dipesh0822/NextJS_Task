import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function FormCheckbox({ name, label, ...rest }) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox {...field} checked={field.value} {...rest} />
          )}
        />
      }
      {...rest}
    />
  );
}

export default FormCheckbox;
