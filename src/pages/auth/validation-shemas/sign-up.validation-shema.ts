import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  isFullYearOld: yup
    .boolean()
    .oneOf([true], "You must be 18 or older")
    .required(),
  nickname: yup
    .string()
    .required("Nickname is required")
    .min(3, "Must be at least 3 characters")
    .max(20, "Must be at most 20 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Nickname can only contain letters and numbers"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
