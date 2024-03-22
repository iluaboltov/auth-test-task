"use client";

import { newPassword } from "@/actions/actions";
import FormButton from "@/components/ui/form-button/form-button";
import FormCard from "@/components/ui/form-card/form-card";
import { FormError } from "@/components/ui/form-error/form-error";
import { Form } from "@/components/ui/form-field/form-field";
import FormInput from "@/components/ui/form-input/form-input";
import { NewPasswordSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function NewPassword() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    defaultValues: {
      password: "",
    },
    mode: "onTouched",
    resolver: zodResolver(NewPasswordSchema),
  });
  const {
    formState: { errors },
  } = form;

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const res = await newPassword(values);
      setError(res?.error);
      setSuccess(res?.success);
    });
  };
  return (
    <FormCard>
      <Form {...form}>
        <div className={"w-full min-w-[275px]"}>
          <form className={"flex flex-col gap-[25px]"} onSubmit={form.handleSubmit(onSubmit)}>
            <div className={"text-center text-3xl font-medium"}>Create new Password?</div>

            <div>
              {!!error && <FormError errorText={error} />}
              {!!success && <div className={"text-md"}>{success}</div>}
              <FormInput
                control={form.control}
                disabled={isPending}
                error={errors.password?.message}
                label={"Password"}
                name={"password"}
                placeholder={"Password"}
                type="password"
              />
            </div>
            <FormInput
              control={form.control}
              disabled={isPending}
              error={errors.confirmPassword?.message}
              label={"Confirm Password"}
              name="confirmPassword"
              placeholder={"Password"}
              type="password"
            />
            <FormButton disabled={isPending}>Reset Password</FormButton>
          </form>
        </div>
      </Form>
    </FormCard>
  );
}
