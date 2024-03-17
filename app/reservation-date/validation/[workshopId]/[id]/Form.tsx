"use client";
import Input from "@/components/input";
import ShoppingCart from "@/components/shopping-cart-item";
import { Location, People, Phone } from "@/constants/link/icons";
import { ReservationButton } from "../../../contents/modal";
import { IScheduleWorkshop } from "@/types/IWorkshop";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { CreateBookWorkShop } from "@/dto/workshop";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import { getSession, useSession } from "next-auth/react";
import Button from "@/components/button";
import FormRegister from "@/contents/form-register";
import { postBookWorkshop } from "@/services/workshop.service";

type PropsForm = {
  currentWorkshopSchedule: IScheduleWorkshop;
};

type FormValue = CreateBookWorkShop;

export default function Form({ currentWorkshopSchedule }: PropsForm) {
  const { data: session } = useSession();
  const userSession = session?.user;

  const router = useRouter();
  const validationSchema = Yup.object().shape({
    number_of_participants: Yup.number().required(),
    reservation_name: Yup.string().required(),
    phone_number: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver<FormValue>(validationSchema),
    defaultValues: {
      number_of_participants: 0,
    },
  });

  const mudationAdd = useMutation({
    mutationFn: (body: FormValue) => {
      return postBookWorkshop({
        idSCheduleWorkshop: currentWorkshopSchedule.id,
        body,
      });
    },
    onSuccess: (data) => {
      console.log("data", data);

      enqueueSnackbar("Workshop bookend success", {
        variant: "success",
      });

      router.push("/my-basket");
    },
    onError: (error: any) => {
      console.log("error", error);
      enqueueSnackbar(JSON.stringify(error?.response?.data as any), {
        variant: "error",
      });
    },
  });

  const onSubmit = (body: FormValue) => {
    mudationAdd.mutate(body);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="h-10"></div>
        <div className="my-5">
          <Input
            label="Your telephone number"
            id="phone"
            leftIcon={<Phone />}
            placeholder="Tel"
            register={register("phone_number")}
            errorMessage={errors.phone_number}
          />
        </div>
        <div className=" my-5">
          <Input
            label="Réservation name"
            id="reservationName"
            leftIcon={<People />}
            placeholder="Réservation name"
            register={register("reservation_name")}
            errorMessage={errors.reservation_name}
          />
        </div>

        <div className=" my-5">
          <Input
            label="Number of participants"
            // id="reservationName"
            leftIcon={<People />}
            placeholder="Number of participants"
            register={register("number_of_participants")}
            errorMessage={errors.number_of_participants}
            type="number"
            otherAttributes={{
              min: 0,
              max: currentWorkshopSchedule.available_places,
            }}
          />
        </div>

        <div className=" my-5">
          Workshop location
          <div className="flex gap-2 items-center text-grey-60% mt-3">
            <Location /> {currentWorkshopSchedule.location} Madagascar
          </div>
        </div>

        {userSession && <Button content={"RESERVE"} type="submit" />}
      </form>

      {!userSession && (
        <ReservationButton urlCallback={window.location.pathname} />
      )}
    </>
  );
}
