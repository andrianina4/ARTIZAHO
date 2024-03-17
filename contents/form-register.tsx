import SelectCustom from "@/components/Select";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import { ACCOUNT_TYPE, GENDER } from "@/constants/utils";
import { CreateUserDto } from "@/dto/user";
import {
  getCurrentUserConnectedClient,
  patchUser,
  postUser,
} from "@/services/user.service";
import { ICurrentUser } from "@/types/user/ICurrentUser";
import { IRequestToken } from "@/types/user/IRequestToken";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

type FormValue = CreateUserDto;

type Props = {
  currentUser?: ICurrentUser; //& IRequestToken;
};
const choiceTypeOfMember = ACCOUNT_TYPE;

function FormRegister({ currentUser }: Props) {
  const router = useRouter();

  const editMode = currentUser ? true : false;

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    username: Yup.string().nullable(),
    email: Yup.string().email().required(),
    account_type: Yup.string().required(),
    gender: Yup.string().required(),
    dob: Yup.string().required(),
    nif: Yup.string()
      .nullable()
      .when("account_type", {
        is: "E",
        then(schema) {
          return schema.required();
        },
        otherwise(schema) {
          return schema.notRequired();
        },
      }),
    phone_number: Yup.string().nullable(),
    password: Yup.string().nullable(),
  });

  const { data } = useQuery({
    queryFn: () => getCurrentUserConnectedClient(),
    queryKey: ["currentUser"],
    retryOnMount: false,
    enabled: editMode,
  });

  const mudationAdd = useMutation({
    mutationFn: (body: FormValue) => {
      return postUser(body);
    },
    onSuccess: (data) => {
      enqueueSnackbar("Account create success", {
        variant: "success",
      });

      router.push("/auth/login");
    },
    onError: (error: any) => {
      console.log("error", error);
      enqueueSnackbar(JSON.stringify(error?.response?.data as any), {
        variant: "error",
      });
    },
  });

  const mudationPatch = useMutation({
    mutationFn: (body: FormValue) => patchUser(body),
    onSuccess: (data) => {
      enqueueSnackbar("Update success", { variant: "success" });
    },
    onError: (error) => {
      console.log("error", error);
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver<FormValue>(validationSchema as any),
    // defaultValues: {
    //   account_type: currentUser?.account_type,
    //   dob: currentUser?.dob,
    //   email: currentUser?.email,
    //   first_name: currentUser?.first_name,
    //   gender: currentUser?.gender,
    //   last_name: currentUser?.last_name,
    //   nif: currentUser?.nif,
    //   phone_number: currentUser?.phone_number,
    //   username: currentUser?.username,
    // },
  });

  useEffect(() => {
    if (editMode && data) {
      setValue("account_type", data.account_type);
      setValue("first_name", data.first_name);
      setValue("last_name", data.last_name);
      setValue("username", data.username);
      setValue("phone_number", data.phone_number);
      setValue("email", data.email);
      setValue("dob", data.dob);
      setValue("gender", data.gender);
      setValue("nif", data.nif);
      // setValue("password", currentUser.password);
    }
  }, [editMode, data, setValue]);

  const onSubmit = (body: FormValue) => {
    if (editMode) mudationPatch.mutate(body);
    else mudationAdd.mutate(body);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="w-1/2">
          <SelectCustom
            options={ACCOUNT_TYPE}
            register={register("account_type")}
            errorMessage={errors.account_type}
          />
        </div>
        <div className="flex gap-3">
          <Input
            placeholder="Lastname"
            register={register("last_name")}
            errorMessage={errors.last_name}
          />
          <Input
            placeholder="Firstname"
            register={register("first_name")}
            errorMessage={errors.first_name}
          />
        </div>

        <div className="flex gap-3">
          <Input
            placeholder="Username"
            register={register("username")}
            errorMessage={errors.username}
          />
          <Input
            placeholder="Phone number"
            register={register("phone_number")}
            errorMessage={errors.phone_number}
          />
        </div>

        <div className="flex gap-3">
          <Input
            placeholder="Email"
            type="email"
            register={register("email")}
            errorMessage={errors.email}
            readonly={editMode}
          />
          <Input
            placeholder="Birthday"
            type="date"
            register={register("dob")}
            errorMessage={errors.dob}
          />
        </div>

        <div className="flex gap-3 items-center">
          <SelectCustom
            options={GENDER}
            register={register("gender")}
            errorMessage={errors.gender}
          />
          <Input
            placeholder="NIF"
            register={register("nif")}
            errorMessage={errors.nif}
          />
        </div>

        <div className="w-1/2">
          <Input
            placeholder="Password"
            type="password"
            register={register("password")}
            errorMessage={errors.password}
          />
        </div>

        {!editMode && (
          <div>
            <Checkbox
              content={
                <>
                  <div className="flex gap-x-2">
                    <span className="text-black-60%">I accept</span>
                    <button
                      // onClick={redirectTerms}
                      className="text-sm font-extrabold text-bronze hover:text-opacity-70"
                      type="button"
                    >
                      the terms and conditions
                    </button>
                  </div>
                </>
              }
            />
          </div>
        )}
        <div className="w-1/2 mt-4">
          <Button
            content={editMode ? "Update  account" : "Create your account"}
            type="submit"
          />
        </div>
      </form>
    </>
  );
}

export default FormRegister;
