"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

type ButtonProps = {
  content?: string | ReactNode;
  leftIcon?: ReactNode;
  type?: "submit" | "button";
  className?: string;
  isBackButton?: boolean;
  onClick?: VoidFunction;
  disabled?: boolean;
};

function Button(props: ButtonProps) {
  const router = useRouter();
  const {
    content,
    leftIcon,
    isBackButton,
    onClick,
    className,
    type = "button",
    disabled = false,
  } = props;

  function back() {
    router.back();
  }

  return (
    <button
      onClick={isBackButton ? back : onClick}
      type={type}
      disabled={disabled}
      className={`w-full py-3.5 px-4 text-sm text-whiteGray rounded-2xl flex justify-center items-center gap-x-2 bg-bronze hover:bg-opacity-80 transition-opacity ease-linear duration-100 ${className}`}
    >
      {leftIcon ? <div className="text-xl">{leftIcon}</div> : null}
      {content}
    </button>
  );
}

export default Button;
