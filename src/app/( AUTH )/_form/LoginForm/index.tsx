"use client";
import { Alert } from "@/components/Alert";
import { TextInput } from "@/components/TextInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormHTMLAttributes, useState } from "react";
import { Button } from "react-daisyui";
import { SubmitHandler, useForm } from "react-hook-form";

export interface ILoginFomProps {
  action?: FormHTMLAttributes<any>["action"];
  loading?: boolean;
}

const LoginForm = (props: ILoginFomProps) => {
  const [message, setMessage] = useState<string>();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const router = useRouter();

  const loginCredentials: SubmitHandler<{
    email: string;
    password: string;
  }> = async (data) => {
    setLoading(true);
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    }).finally(() => {
      setLoading(false);
    });
    if (res?.error) {
      setMessage(res.error);
    }

    if (res?.ok) {
      router.push("/home");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(loginCredentials)}
      action={props.action}
      className="px-3 py-7 grid grid-cols-1 gap-5"
    >
      {message && <Alert onClose={() => setMessage("")}>{message}</Alert>}
      <TextInput label="E-mail" {...register("email")} />

      <TextInput label="Password" type="password" {...register("password")} />

      <Button fullWidth color="primary" type="submit" loading={loading}>
        <span className="inline-block mr-2">Login</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Button>
    </form>
  );
};

export { LoginForm };
