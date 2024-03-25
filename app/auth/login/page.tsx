"use client";

import Button from "@/components/button";
import Footer from "@/components/footer";
import Input from "@/components/input";
import NavBar from "@/components/nav-bar";
import { TrajetLogin } from "@/constants/link/svg";
import link from "@/constants/utils/path";
import FormAuth from "@/contents/form-auth";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type LoginProps = {};

function Login({}: LoginProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;
  function redirectRegister() {
    router.push(link.register);
  }

  if (user) {
    router.push("/my-basket");
    return null;
  }

  return (
    <div className="min-h-screen bg-bg-login bg-cover flex flex-col max-w-screen-large-width mx-auto">
      <header className="w-full max-w-page mx-auto">
        <NavBar />
      </header>

      <main className="flex-1 py-7 sm:px-2 md:px-24 flex justify-between w-full max-w-page mx-auto mb-32 lg:flex-row sm:flex-col sm:gap-10 lg:gap-0">
        <div className="text-white mt-20">
          <h1 className="font-moonGet font-extrabold sm:text-lg md:text-4xl leading-relaxed">
            LOG IN
            <br />
            TO YOUR ACCOUNT
          </h1>
          <p className="font-normal mt-5">
            Please enter your e-mail address and password.
          </p>
        </div>
        <div className="lg:w-1/2 sm:w-full pt-12 bg-white rounded-3xl  pb-24 px-11 relative">
          <h4 className="text-brown text-base font-extrabold mb-6">Sign in</h4>
          <FormAuth />
          <div className="flex gap-x-2 my-6">
            <span className="text-black-60%">
              You don&apos;t have an account?
            </span>
            <button
              onClick={redirectRegister}
              className="text-sm font-extrabold text-bronze hover:text-opacity-70"
              type="button"
            >
              Sign up
            </button>
          </div>
          <TrajetLogin className="absolute left-0 bottom-0" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
