import SelectCustom from "@/components/Select";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import { ACCOUNT_TYPE, GENDER } from "@/constants/utils";
import { CreateUserDto } from "@/dto/user";
import { postUser } from "@/services/user.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

type FormValue = CreateUserDto;

type Props = {};
const choiceTypeOfMember = ACCOUNT_TYPE;

function FormRegister({}: Props) {
  const router = useRouter();

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

  const mudationAdd = useMutation({
    mutationFn: (body: FormValue) => {
      return postUser(body);
    },
    onSuccess: (data) => {
      enqueueSnackbar("Account create success", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        onClose: () => router.push("/auth/login"),
      });
    },
    onError: (error) => {
      console.log("error", error);
      enqueueSnackbar("Error", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver<FormValue>(validationSchema as any),
  });

  //   function redirectTerms() {
  //     router.push("");
  //   }

  const onSubmit = (body: FormValue) => {
    mudationAdd.mutate(body);
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

        <div className="w-1/2 mt-4">
          <Button content="Create your account" type="submit" />
        </div>
      </form>
    </>
  );
}

export default FormRegister;
