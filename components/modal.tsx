"use client";
import React, { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  open: boolean;
  onClick: VoidFunction;
  className?: string;
};

function ModalLayout(props: ModalProps) {
  const { children, open, onClick, className } = props;
  const modalclass = ` modal modal-middle  sm:modal-middle ${
    open ? "modal-open" : ""
  }`;
  return (
    <div className={modalclass}>
      <div
        className={`bg-white rounded-3xl px-10 py-12 flex gap-6 relative ${className}`}
      >
        <button
          className=" w-10 h-10 rounded-xl bg-bronze text-white absolute right-4 top-4 hover:bg-opacity-80 "
          onClick={onClick}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
