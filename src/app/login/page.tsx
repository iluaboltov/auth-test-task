"use client";

import { login } from "@/actions/actions";
import RedirectLink from "@/components/redirect-link/redirect-link";
import FormButton from "@/components/ui/form-button/form-button";
import FormCard from "@/components/ui/form-card/form-card";
import { FormError } from "@/components/ui/form-error/form-error";
import { Form } from "@/components/ui/form-field/form-field";
import FormInput from "@/components/ui/form-input/form-input";
import SocialLogin from "@/components/ui/form-social-login/social-login";
import HorizontalLine from "@/components/ui/horizontal-line/hr";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Login() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: zodResolver(LoginSchema),
  });

  const {
    formState: { errors, touchedFields },
  } = form;
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      const res = await login(values);
      setError(res?.error);
      setSuccess(res?.success);
    });
  };

  return (
    <FormCard>
      <Form {...form}>
        <div className={"w-full min-w-[275px]"}>
          <form className={"flex flex-col gap-[25px]"} onSubmit={form.handleSubmit(onSubmit)}>
            <div className={"text-center text-3xl font-bold"}>Log in to your account</div>

            <SocialLogin loginProviders={["google", "github"]} />

            <HorizontalLine label={"OR"} />

            <div>
              {!!error && <FormError errorText={error} />}
              {!!success && <div className={"text-md"}>{success}</div>}

              <FormInput
                control={form.control}
                disabled={isPending}
                error={errors.email?.message}
                name="email"
                placeholder={"Work email"}
                type="text"
              />
            </div>

            {touchedFields.email && !errors.email && (
              <div className={`flex flex-col gap-4 ${!!errors.email ? "animate-fadein" : "animate-fadeout"}`}>
                <FormInput
                  control={form.control}
                  disabled={isPending}
                  error={errors.password?.message}
                  name="password"
                  placeholder={"Password"}
                  type="password"
                />

                <div className={"flex justify-end"}>
                  <RedirectLink href={"/forgot-password"} size={"medium"}>
                    Forgot your password?
                  </RedirectLink>
                </div>
              </div>
            )}

            <FormButton disabled={isPending} type={"submit"}>
              Log in to Qencode
            </FormButton>

            <div className={"flex items-center justify-center gap-1 text-sm font-normal"}>
              Is your company new to Qencode?
              <RedirectLink href={"/"} size={"normal"}>
                Sign up
              </RedirectLink>
            </div>
          </form>
        </div>
      </Form>
    </FormCard>
  );
}
