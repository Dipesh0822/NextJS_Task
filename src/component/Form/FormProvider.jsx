import React from "react";
import { FormProvider as Form } from "react-hook-form";

function FormProvider(props) {
  const { children, methods, onSubmit } = props;
  return (
    <Form {...methods}>
      <form autoComplete="off" noValidate onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
}

export default FormProvider;
