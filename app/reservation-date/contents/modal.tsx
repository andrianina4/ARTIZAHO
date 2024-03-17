"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { FacebookColor, GoogleColor } from "@/constants/link/icons";
import FormAuth from "@/contents/form-auth";
import FormRegister from "@/contents/form-register";
import { ISelect } from "@/types/IField";
import React, { useRef, forwardRef, useState, ChangeEvent } from "react";

type ModalProps = {
  urlCallback?: string;
};

function ReservationButton({ urlCallback }: { urlCallback?: string }) {
  const modal = useRef<HTMLDialogElement | null>(null);

  function toggleModal() {
    console.log(modal);
    if (modal.current) {
      modal.current.showModal();
    }
  }

  return (
    <>
      <Button onClick={toggleModal} content="RESERVE" className="w-min" />
      <Modal ref={modal} urlCallback={urlCallback} />
    </>
  );
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>((props, ref) => {
  const { urlCallback } = props;
  const [tabActive, setTabActive] = useState<number>(0);

  function handleClickTabItem(e: ChangeEvent<HTMLInputElement>) {
    setTabActive(parseInt(e.target.value));
  }

  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box bg-white w-11/12 max-w-3xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-bronze">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-2xl text-bronze">Login</h3>
        <div role="tablist" className="tabs tabs-bordered mt-5">
          <input
            type="radio"
            name="tabs"
            role="tab"
            className={`tab text-base ${
              tabActive === 0 ? "text-black-default  !border-bronze" : ""
            }`}
            aria-label="Connection"
            value={0}
            onChange={handleClickTabItem}
            checked={tabActive === 0}
          />
          <div role="tabpanel" className="tab-content mt-3">
            <FormAuth urlCallback={urlCallback} />
            <Button
              leftIcon={<GoogleColor />}
              content="Connect with Google"
              className="bg-transparent !text-black-default my-2"
            />
            <Button
              leftIcon={<FacebookColor />}
              content="Connect with Facebook"
              className="bg-transparent !text-black-default my-2"
            />
          </div>

          <input
            type="radio"
            name="tabs"
            role="tab"
            className={`tab text-base ${
              tabActive === 1 ? "text-black-default  !border-bronze" : ""
            }`}
            aria-label="Create your account"
            value={1}
            onChange={handleClickTabItem}
            checked={tabActive === 1}
          />
          <div role="tabpanel" className="tab-content mt-3">
            <FormRegister />
          </div>
        </div>
      </div>
      <div className="modal-backdrop bg-white bg-opacity-20"></div>
    </dialog>
  );
});

Modal.displayName = "Modal";
export { Modal, ReservationButton };
