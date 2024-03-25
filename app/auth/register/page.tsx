"use client";

import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Footer from "@/components/footer";
import Input from "@/components/input";
import NavBar from "@/components/nav-bar";
import Select from "@/components/Select";
import { TrajetRegister } from "@/constants/link/svg";
import link from "@/constants/utils/path";
import FormRegister from "@/contents/form-register";
import { ISelect } from "@/types/IField";
import { useRouter } from "next/navigation";
import React from "react";

function Register() {
  const router = useRouter();

  function redirectLogin() {
    router.push(link.login);
  }

  return (
    <div className="min-h-screen bg-bg-register bg-cover flex flex-col  max-w-page mx-auto ">
      <header>
        <NavBar />
      </header>

      <main className="flex-1 py-7 sm:px-2 md:px-24 flex justify-between gap-x-5 w-full max-w-page mx-auto mb-32 lg:flex-row sm:flex-col sm:gap-10 lg:gap-0">
        <div className="text-white mt-20 lg:mr-4">
          <h1 className="font-moonGet font-extrabold sm:text-lg md:text-4xl leading-relaxed">
            CREATE YOUR ACCOUNT
            <br />
            AND JOIN US
          </h1>
          <p className="font-normal mt-5">
            Please fill in all fields and confirm your registration.
          </p>
        </div>

        <div className="flex-1 bg-white rounded-3xl pt-12 pb-24 px-11 relative">
          <div className="flex justify-between items-center">
            <h4 className="text-brown text-base font-extrabold mb-6">
              Join us
            </h4>
            <div className="flex gap-x-2">
              <span className="text-black-60%">Already a member?</span>
              <button
                onClick={redirectLogin}
                className="text-sm font-extrabold text-bronze hover:text-opacity-70"
                type="button"
              >
                Sign in
              </button>
            </div>
          </div>
          <FormRegister />

          <TrajetRegister className="absolute right-0 bottom-0" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Register;
