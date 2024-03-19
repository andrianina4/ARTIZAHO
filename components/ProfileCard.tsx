import React from "react";
import Image from "next/image";
import { AddImage, Person } from "@/constants/link/icons";

type ProfileCardProps = {
  adminName?: string;
  className?: string;
  ImagetoShow?: any;
  handleInputFile: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

function ProfileCard(props: ProfileCardProps) {
  const {
    adminName,
    className,
    ImagetoShow,
    handleInputFile,
    handleFileChange,
  } = props;

  return (
    <div
      className={` flex flex-col w-80  bg-white-40% items-center gap-4 rounded-3xl pt-5 pb-14 ${className}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center pt-5 w-96">
          <input
            type="file"
            id="input-file-company"
            hidden
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
          <div className="flex items-center justify-center p-5 w-40 h-40 rounded-full relative bg-[#D9D9D9]">
            {ImagetoShow ? (
              <Image
                src={ImagetoShow}
                alt="image"
                fill
                className="rounded-full"
              />
            ) : (
              <>
                <Person className="w-full h-full text-gray-400" />
              </>
            )}
            <div
              className="flex items-center justify-center p-2 bg-bronze text-white rounded-full absolute bottom-0 right-0 cursor-pointer"
              onClick={handleInputFile}
            >
              <AddImage className="w-6 h-6" />
            </div>
          </div>
        </div>
        <span className="text-lg font-bold">{adminName}</span>
      </div>
    </div>
  );
}

export default ProfileCard;
