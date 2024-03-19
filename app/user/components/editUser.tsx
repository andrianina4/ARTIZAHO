"use client";
import SelectCustom from "@/components/Select";
import Button from "@/components/button";
import Input from "@/components/input";
import { Madagascar } from "@/constants/link/icons";
import { ACCOUNT_TYPE, GENDER } from "@/constants/utils";
import { CreateUserDto } from "@/dto/user";
import {
  patchUser,
  uploadImage,
  uploadImageProfileClient,
} from "@/services/user.service";
import { ICurrentUser } from "@/types/user/ICurrentUser";
import { IRequestToken } from "@/types/user/IRequestToken";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { SnackbarProvider, useSnackbar } from "notistack";
import FormRegister from "@/contents/form-register";
import { DefaultProfile } from "@/constants/link/svg";
import { getImgUrl } from "@/services/index.service";
type PropsEditUser = {
  isModal?: boolean;
  currentUser?: ICurrentUser; //  & IRequestToken;
};

type FormValue = CreateUserDto;

export default function EditUser(props: PropsEditUser) {
  const { enqueueSnackbar } = useSnackbar();
  const { currentUser } = props;
  const editMode = currentUser ? true : false;
  const [file, setFile] = useState("");
  const queryClient = useQueryClient();

  return (
    <div>
      <h4 className="font-manrope font-bold text-2xl text-bronze leading-[32.78px]">
        {editMode ? "Edit your profile" : "Add profile"}
      </h4>

      <div className="mt-10 flex gap-4">
        <div className="flex flex-col justify-center items-center w-[162px]  ">
          <label className="cursor-pointer block" htmlFor="uploadImage">
            {file || (currentUser && currentUser.images.length > 0) ? (
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-brown ring-offset-base-100 ring-offset-2">
                  <Image
                    src={
                      currentUser && currentUser.images.length > 0
                        ? getImgUrl(currentUser.images)
                        : file
                    }
                    alt="profile"
                    width={153}
                    height={153}
                  />
                </div>
              </div>
            ) : (
              <DefaultProfile />
            )}

            <input
              className="hidden w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-gray-50  focus:outline-0  "
              id="uploadImage"
              type="file"
              accept="image/*"
              onChange={async (e) => {
                if (e.target.files && currentUser) {
                  await uploadImageProfileClient(
                    currentUser.id,
                    e.target.files
                  );

                  enqueueSnackbar("Image uploaded successfully", {
                    variant: "success",
                  });

                  queryClient.invalidateQueries({
                    queryKey: ["currentUser"],
                  });

                  setFile(
                    URL.createObjectURL(
                      e.target.files[e.target.files.length - 1]
                    )
                  );
                }
              }}
            />
          </label>
          {editMode && (
            <>
              <h6 className="font-bold text-base text-center">
                {currentUser?.first_name} {currentUser?.last_name}
              </h6>
              <span className="text-sm text-grey-60%">{currentUser?.id}</span>
            </>
          )}
        </div>
        <div className=" w-full">
          <FormRegister currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}
