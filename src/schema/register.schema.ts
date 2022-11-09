import * as yup from "yup";
import ERRORS from "../config/validation.config";

const loginSchema = yup.object({
  company_name: yup.string().required(ERRORS.COMPANY_NAME.required),
  address_line_1: yup.string().required(ERRORS.COMPANY_NAME.required),
  state: yup.string().required(ERRORS.POSTAL_CODE.required),
  city: yup.string().required(ERRORS.CITY.required),
  country: yup.string().required(ERRORS.COUNTRY.required),
  postal_code: yup.string().required(ERRORS.POSTAL_CODE.required),
  email: yup
    .string()
    .email(ERRORS.EMAIL.invalid)
    .required(ERRORS.EMAIL.required),
  user_name: yup
    .string()
    .min(ERRORS.NAME.min_chars, ERRORS.NAME.min)
    .required(ERRORS.NAME.required),
  password: yup
    .string()
    .min(ERRORS.PASSWORD.min_chars, ERRORS.PASSWORD.min)
    .matches(ERRORS.PASSWORD.regex, ERRORS.PASSWORD.invalid)
    .required(ERRORS.PASSWORD.required),
  confirm_password: yup
    .string()
    .min(ERRORS.PASSWORD.min_chars, ERRORS.PASSWORD.min)
    .matches(ERRORS.PASSWORD.regex, ERRORS.PASSWORD.invalid)
    .oneOf([yup.ref("password")], ERRORS.PASSWORD.not_matched)
    .required(ERRORS.PASSWORD.required),
});

export default loginSchema;
