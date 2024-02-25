"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { TrajetLogin } from "@/constants/link/svg";
import link from "@/constants/utils/path";
import { useRouter } from "next/navigation";
import React from "react";
import { signIn, getCsrfToken } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
type Props = {};

function FormAuth({}: Props) {
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();

    var form = document.getElementById("formRegister") as any;

    // Get form values
    var username = form?.elements["username"].value;
    var password = form?.elements["password"].value;
    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/my-basket",
    });
    // router.push(link.reservationDate)
  }

  return (
    <form onSubmit={handleSubmit} id="formRegister">
      <Input placeholder="Email address" name="username" />
      <Input type="password" placeholder="Password" name="password" />
      <button className="text-black-60% text-sm block w-full text-right hover:text-opacity-70 mb-5">
        Forgot your password?
      </button>

      <div className="mt-20"></div>
      <Button content="Sign in" type="submit" />
    </form>
  );
}

export default FormAuth;
