"use client";
import Button from "@/components/button";
import { LeftLine, People, RightLine } from "@/constants/link/icons";
import React, { useState } from "react";

type Props = {
  price: number;
  priceChange: (c: "+" | "-") => void;
};

function ChoiceNumberPrice({ priceChange, price }: Props) {
  return (
    <div className="flex gap-x-3 items-center bg-white-40% text-lg w-min py-2 px-4 rounded-lg">
      <Button
        content={<LeftLine />}
        className="bg-white text-lg !text-black-default w-min"
        onClick={() => priceChange("-")}
      />
      <span className="text-black-default text-base">{price}</span>
      <Button
        content={<RightLine />}
        className="bg-white text-lg !text-black-default w-min"
        onClick={() => priceChange("+")}
      />

      <span className="text-brown">€</span>
    </div>
  );
}

export default ChoiceNumberPrice;
