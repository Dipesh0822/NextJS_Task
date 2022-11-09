const ERRORS = {
  EMAIL: {
    required: "Email is required",
    invalid: "Email is invalid",
  },
  PASSWORD: {
    required: "Password is required",
    invalid:
      "Password must include uppercase, lowercase, number and special symbol",
    min: "Min 8 characters required",
    min_chars: 8,
    regex: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
    not_matched: "Passwords does not match",
  },
  COMPANY_NAME: {
    required: "Company Name is required",
  },
  ADDRESS: {
    required: "Address is required",
  },
  STATE: {
    required: "State is required",
  },
  CITY: {
    required: "City is required",
  },
  COUNTRY: {
    required: "Country is required",
  },
  POSTAL_CODE: {
    required: "Postal code is required",
  },
  NAME: {
    required: "Name is required",
    min: "Min 3 characters is required",
    min_chars: 3,
  },
};

export default ERRORS;
