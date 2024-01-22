"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import ClipLoader from "react-spinners/ClipLoader";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form/form-error";
import { FormSuccess } from "@/components/form/form-success";
import { login } from "@/actions/login";
import { TextInput } from "@/components/form/text-input";
import { authenticateFingerprint } from "@/actions/finger-print/authenticate-finger-print";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Fingerprint } from "lucide-react";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [showBiometric, setBiometric] = useState("");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    getBiometric();
  }, []);

  async function getBiometric() {
    const existBiometric = JSON.parse(
      localStorage.getItem("credential-med-time")!
    );
    if (existBiometric?.credentialId) {
      setBiometric(existBiometric?.credentialId);
    }
  }

  const onSubmitBiometric = () => {
    startTransition(async () => {
      const res = await authenticateFingerprint(showBiometric);

      if (res.email) {
        onSubmit({
          email: res.email,
          password: res.data.rawId,
        });
      }
      console.log({ res });
    });
  };

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values, callbackUrl || "/home")
        .then((data) => {
          if (data?.error) {
            // form.reset();
            setError(data.error);
          }

          if (data?.success) {
            setSuccess(data.success);
          }

          //   if (data?.twoFactor) {
          //     setShowTwoFactor(true);
          //   }
        })
        .catch((e) => {
          console.log(e);
          setError("Something went wrong");
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="Bem vindo"
      backButtonLabel="Nao tem uma conta?"
      backButtonHref="/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <>
              <TextInput
                label="Email"
                type="email"
                control={form.control}
                name="email"
                disabled={isPending}
              />
              <TextInput
                label="Password"
                control={form.control}
                name="password"
                type="password"
                disabled={isPending}
              />
              <FormItem>
                <Button
                  size="sm"
                  variant="link"
                  asChild
                  className="px-0 font-normal"
                >
                  <Link href="/reset">Esqueceu a senha?</Link>
                </Button>
              </FormItem>
            </>
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <div className="flex gap-3 flex-col">
            <Button
              disabled={isPending}
              loading={isPending}
              type="submit"
              className="w-full gap-2"
            >
              {showTwoFactor ? "Confirm" : "Login"}
            </Button>
            {showBiometric && (
              <Button
                disabled={isPending}
                loading={isPending}
                type="button"
                onClick={onSubmitBiometric}
                variant="secondary"
                className="w-full gap-2"
              >
               <Fingerprint />  Logar com biometria
              </Button>
            )}
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
