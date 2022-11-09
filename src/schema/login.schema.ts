import * as yup from "yup";
import ERRORS from "../config/validation.config";

const loginSchema = yup.object({
  email: yup
    .string()
    .email(ERRORS.EMAIL.invalid)
    .required(ERRORS.EMAIL.required),
  password: yup
    .string()
    .min(8, ERRORS.PASSWORD.min)
    .matches(ERRORS.PASSWORD.regex, ERRORS.PASSWORD.invalid)
    .required(ERRORS.PASSWORD.required),
});

export default loginSchema;
