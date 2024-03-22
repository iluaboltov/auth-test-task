"use client";

import { reset } from "@/actions/actions";
import FormButton from "@/components/ui/form-button/form-button";
import FormCard from "@/components/ui/form-card/form-card";
import { Form } from "@/components/ui/form-field/form-field";
import FormInput from "@/components/ui/form-input/form-input";
import { ForgotSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function ForgotPassword() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ForgotSchema>>({
    defaultValues: {
      email: "",
    },
    mode: "onTouched",
    resolver: zodResolver(ForgotSchema),
  });
  const {
    formState: { errors },
  } = form;

  const onSubmit = (values: z.infer<typeof ForgotSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const res = await reset(values);
      setError(res?.error);
      setSuccess(res?.success);
    });
  };

  return (
    <FormCard>
      <Form {...form}>
        <div className={"w-full min-w-[275px]"}>
          <form className={"flex flex-col gap-[25px]"} onSubmit={form.handleSubmit(onSubmit)}>
            <div className={"text-center text-3xl font-bold"}>Forgot Password?</div>

            <div>
              {!!error && <div className={"text-md text-red-600"}>{error}</div>}
              {!!success && <div className={"text-md"}>{success}</div>}

              <FormInput
                control={form.control}
                disabled={isPending}
                error={errors.email?.message}
                name={"email"}
                placeholder={"Work email"}
                type="text"
              />
            </div>
            <FormButton disabled={isPending} type={"submit"}>
              Send
            </FormButton>

            <div
              className={
                "flex min-h-12 cursor-pointer items-center justify-center rounded-lg border border-grey text-2sm font-medium"
              }
              onClick={() => router.back()}
            >
              Back
            </div>
          </form>
        </div>
      </Form>
    </FormCard>
  );
}
