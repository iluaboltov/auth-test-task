import { ForgotSchema, LoginSchema, NewPasswordSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const { email, password } = values;

  const res = await fetch("https://auth-qa.qencode.com/v1/auth/login", {
    body: JSON.stringify({ email, password }),
    headers: {
      Accept: "application/form-field-data",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  if (res.status === 401) {
    return { error: "Wrong username or password" };
  } else if (res.status === 422) {
    return { error: "Something went wrong" };
  } else if (res.status === 200) {
    return { success: "Logged in!" };
  }
};

export const reset = async (values: z.infer<typeof ForgotSchema>) => {
  const { email } = values;

  const res = await fetch("https://auth-qa.qencode.com/v1/auth/password-reset", {
    body: JSON.stringify({ email }),
    headers: {
      Accept: "application/form-field-data",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  if (res.status === 401) {
    return { error: "Wrong email" };
  } else if (res.status === 422) {
    return { error: "Something went wrong" };
  } else if (res.status === 200) {
    return { success: "Email sent!" };
  }
};

export const newPassword = async (values: z.infer<typeof NewPasswordSchema>, token?: null | string) => {
  const { password } = values;

  const secret = "secret";

  const res = await fetch("https://auth-qa.qencode.com/v1/auth/password-set", {
    body: JSON.stringify({ password, secret, token }),
    headers: {
      Accept: "application/form-field-data",
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (res.status === 401) {
    return { error: "Wrong username or password" };
  } else if (res.status === 422) {
    return { error: "Something went wrong" };
  } else if (res.status === 200) {
    return { success: "Password updated!" };
  }
};
