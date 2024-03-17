"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type Props = {
  urlCallback?: string;
};
type FormValue = {
  email: string;
  password: string;
};
function FormAuth({ urlCallback }: Props) {
  const [error, setError] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver<FormValue>(validationSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (body: FormValue) => {
    const res = await signIn("credentials", {
      username: body.email,
      password: body.password,
      callbackUrl: urlCallback ? urlCallback : "/my-basket",
      redirect: false,
    });

    if (!res?.ok) {
      setError(res?.error || "");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="formRegister">
      {error && (
        <div className="pl-2 flex items-center gap-1 text-xs text-red-600 opacity-80 font-bold mt-2">
          {error}
        </div>
      )}
      <Input
        placeholder="Email address"
        name="username"
        register={register("email")}
        errorMessage={errors.email}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        errorMessage={errors.password}
        register={register("password")}
      />
      <button
        className="text-black-60% text-sm block w-full text-right hover:text-opacity-70 mb-5"
        type="submit"
      >
        Forgot your password?
      </button>

      <div className="mt-20"></div>
      <Button content="Sign in" type="submit" />
    </form>
  );
}

export default FormAuth;
