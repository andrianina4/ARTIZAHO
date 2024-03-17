"use client";

import { Danger, EyeIcon, EyeOffIcon } from "@/constants/link/icons";
import React, { HTMLInputTypeAttribute, ReactNode, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  placeholder: string;
  id?: string;
  label?: string;
  name?: string;
  leftIcon?: ReactNode;
  type?: HTMLInputTypeAttribute;
  className?: string;
  register?: UseFormRegisterReturn;
  defaultValue?: string | number;
  readonly?: boolean;
  errorMessage?: any;
  otherAttributes?: any;
};

function Input(props: InputProps) {
  const {
    label,
    id,
    placeholder,
    leftIcon,
    name,
    className,
    type = "text",
    register,
    defaultValue,
    errorMessage,
    otherAttributes,
  } = props;
  const [definedType, setDefinedType] = useState<HTMLInputTypeAttribute>(type);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function toggleShowPassword() {
    const toggleDefinedType = !showPassword ? "text" : "password";
    setShowPassword((currentValue) => !currentValue);
    setDefinedType(toggleDefinedType);
  }

  return (
    <>
      {label && (
        <label htmlFor={id} className="text-black-default text-base">
          {label}
        </label>
      )}
      <div className="w-full flex flex-col">
        <div
          className={`bg-white-40% mt-2 py-5 px-6 rounded-2xl flex items-center input input-bordered h-14 ${className}`}
        >
          {leftIcon ? (
            <div className="text-brown text-xl mr-2">{leftIcon}</div>
          ) : null}
          <input
            id={id}
            name={name}
            type={definedType}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...register}
            className={`font-manrope text-sm outline-none bg-white-40% flex-1 text-black-60% w-full`}
            {...otherAttributes}
          />
          {type === "password" ? (
            <button
              className="text-xl"
              onClick={toggleShowPassword}
              type="button"
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          ) : null}
        </div>
        {errorMessage?.message && (
          <div className="pl-2 flex items-center gap-1 text-xs text-red-600 opacity-80 font-bold mt-2">
            <Danger className="w-3 h-3" /> <div>{errorMessage?.message}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Input;
