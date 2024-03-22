import { z } from "zod";

export const NewPasswordSchema = z
  .object({
    confirmPassword: z.string(),
    password: z.string().min(8, {
      message: "Minimum of 8 characters required",
    }),
  })
  .refine(
    data => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"], // path of error
    },
  );
export const ForgotSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email",
    })
    .min(1, {
      message: "Email is required",
    }),
});
export const LoginSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email",
    })
    .min(1, {
      message: "Email is required",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
