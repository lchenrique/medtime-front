"use client";
import { IUser } from "@/app/api/auth/sign-up/route";
import { signUp } from "@/app/controller/signUp";
import { Alert } from "@/components/Alert";
import { TextInput } from "@/components/TextInput";
import { FormHTMLAttributes, useState } from "react";
import { Button } from "react-daisyui";
import { SubmitHandler, useForm } from "react-hook-form";

export interface ISignUpFormProps {
  action?: FormHTMLAttributes<IUser>["action"];
  loading?: boolean;
}

const SignUpForm = (props: ISignUpFormProps) => {
  const [message, setMessage] = useState<string>();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<IUser & { "verify-password": string }>();

  const handleSignUp: SubmitHandler<IUser> = async (data) => {
    setLoading(true);

    const res = await signUp(data);
    console.log(res?.message);
    if (res?.message) {
      if (res.status === 422) {
        if (Array.isArray(res?.message)) {
          res?.message.forEach((err: any) => {
            console.log("err.validation", err);
            setError(err.path[0], { message: err.message });
          });
        }
      } else {
        setMessage(res.message);
      }
      setLoading(false);
    }
  };

  const passMatch = () => {
    if (
      watch("password")?.length >= 1 &&
      watch("verify-password")?.length >= 1
    ) {
      return watch("password") !== watch("verify-password");
    }
    return false;
  };

  console.log("errors.email?.message", errors.email?.message);

  const passLength =
    watch("verify-password")?.length >= 6 && watch("password")?.length >= 6;

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="px-3 py-7 grid grid-cols-1 gap-5"
      >
        {message && <Alert onClose={() => setMessage("")}>{message}</Alert>}
        <TextInput
          label="Nome"
          {...register("name")}
          invalid={errors.name?.message}
          required
        />
        <TextInput
          label="E-mail"
          {...register("email")}
          invalid={errors.email?.message}
          required
        />

        <TextInput
          invalid={passMatch()}
          label="Senha"
          type="password"
          {...register("password")}
          required
        />
        <TextInput
          label="Confirme a senha"
          type="password"
          {...register("verify-password")}
          invalid={passMatch()}
          required
        />
        {passMatch() && (
          <span className="inline-block mr-2 label-text-alt text-status-error">
            As senhas devem ser iguais
          </span>
        )}

        <Button
          disabled={!passLength}
          fullWidth
          color="primary"
          type="submit"
          loading={loading}
        >
          <span className="inline-block mr-2">Cadastrar</span>
        </Button>
      </form>
    </>
  );
};

export { SignUpForm };
