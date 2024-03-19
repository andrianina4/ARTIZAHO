"use client";

import Button from "@/components/button";
import SelectCustom from "@/components/Select";
import { ISelect } from "@/types/IField";
import React, { useState } from "react";
import { HomeAdd } from "@/constants/link/icons";
import ModalLayout from "@/components/modal";
import FormEntreprise from "./component/FormEntreprise";
import ListCompany from "./component/ListCompany";
import Proposal from "./component/Proposal";

const selectItem: Array<ISelect> = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "email",
    label: "Email",
  },
  {
    value: "location",
    label: "Location",
  },
  {
    value: "created_at",
    label: "Created at",
  },
];

type props = {};

export default function Page({}: props) {
  // State Popup Add Entreprise
  const [open, setOpen] = useState(false);
  const handleToogle = () => {
    setOpen(!open);
  };

  // State Changer Contenu
  const [Content, setContent] = useState<string>("list");
  const switchContent = () => {
    setContent(Content === "list" ? "proposal" : "list");
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Button
            content="Add Company"
            leftIcon={<HomeAdd />}
            onClick={handleToogle}
          />
        </div>
        <div className="flex flex-row items-center w-60 gap-7">
          <div className="font-bold w-2/3">Filter by</div>
          <SelectCustom
            options={selectItem}
            className="!bg-white !h-10 !rounded-xl"
          />
        </div>
      </div>
      {/* CHOIX CONTENU */}
      <div className="border-b-2 border-bronze flex gap-3 w-full font-semibold opacity-80">
        {Content === "list" && (
          <>
            <div className="px-3 py-3 border-b-4 border-bronze text-brown">
              Company List
            </div>
            <div className="px-3 py-3 cursor-pointer" onClick={switchContent}>
              Proposal Date
            </div>
          </>
        )}
        {Content === "proposal" && (
          <>
            <div className="px-3 py-3 cursor-pointer" onClick={switchContent}>
              Company List
            </div>
            <div className="px-3 py-3 border-b-4 border-bronze text-brown font-semibold">
              Proposal Date
            </div>
          </>
        )}
      </div>
      {/* CONTENU ADAPTATIF */}
      {Content === "list" && <ListCompany />}
      {Content === "proposal" && <Proposal />}
      {/* POPUP ADD ENTREPRISE */}
      <ModalLayout open={open} onClick={handleToogle} className="w-1/2 h-3/4">
        <FormEntreprise closePopup={handleToogle} />
      </ModalLayout>
    </div>
  );
}
