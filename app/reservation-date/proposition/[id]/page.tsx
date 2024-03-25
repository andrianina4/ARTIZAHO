"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import NavBar from "@/components/nav-bar";
import PresentationTrainer from "@/components/presentation-trainer";
import Textarea from "@/components/textarea";
import {
  ArrowLeft,
  DateRange,
  Place,
  Send,
  Time,
} from "@/constants/link/icons";
import link from "@/constants/utils/path";
import { trainers } from "@/data/temp/trainers";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { CreateCustomWorkshop } from "@/dto/workshop";
import ChoiceNumberPersonne from "../../contents/choice-number-personne";
import ChoiceNumberPrice from "../../contents/choice-number-price";
import { useMutation } from "@tanstack/react-query";
import { postWorkshopCustom } from "@/services/workshop.service";
import { enqueueSnackbar } from "notistack";

type Props = {};

type FormValue = CreateCustomWorkshop;

function PropositionDate({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;

  const validationSchema = Yup.object().shape({
    date: Yup.string().required(),
    time: Yup.string().required(),
    number_of_participants: Yup.number().required(),
    location: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValue>({
    resolver: yupResolver<FormValue>(validationSchema),
    defaultValues: {
      number_of_participants: 0,
    },
  });

  const number_of_participants = watch("number_of_participants");

  // Temp trainer
  // const trainer = trainers[0];
  const router = useRouter();

  const [price, setPrice] = useState(0);

  const handleChangeCount = (c: "+" | "-") => {
    if (c === "-") {
      const res = number_of_participants - 1;
      setValue("number_of_participants", res < 0 ? 0 : res);
    } else {
      const res = number_of_participants + 1;
      setValue("number_of_participants", res);
    }
  };

  const handleChangePrice = (c: "+" | "-") => {
    setPrice((state) => {
      if (c === "-") {
        let c = state - 1;
        return c < 0 ? 0 : c;
      }
      return state + 1;
    });
  };

  function handleClickSendButton() {
    router.push(link.feedback);
  }

  const mutationPost = useMutation({
    mutationFn: (body: FormValue) =>
      postWorkshopCustom({
        id: Number(id),
        body,
      }),
    onSuccess: (data) => {
      enqueueSnackbar("Save success");
      router.back();
    },
    onError: (err) => {
      enqueueSnackbar("An error occurred", {
        variant: "error",
      });
    },
  });

  const onSubmit = (body: FormValue) => {
    mutationPost.mutate(body);
  };

  return (
    <div className="min-h-screen">
      <header className="w-full max-w-page mx-auto">
        <NavBar isWhite />
      </header>

      <main className="py-7 lg:px-24  sm:px-5 flex justify-between items-center lg:gap-x-20 w-full max-w-page mx-auto">
        <section className="lg:w-1/2 sm:w-full">
          <div className="text-2xl font-bold text-brown flex items-center gap-x-3">
            <Button
              isBackButton
              content={<ArrowLeft />}
              className="!bg-transparent w-min !text-brown !text-2xl !p-0"
            />
            <span>Offer slots to the craftsman</span>
          </div>
          <p className="ml-9  text-brown text-sm mt-2 mb-10">
            You will receive an email automatically if the craftsman adds a slot
            <br />
            that matches your request.
          </p>
          <form
            className="flex flex-col gap-y-2 ml-9"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              leftIcon={<DateRange />}
              placeholder="Calendar"
              type="date"
              register={register("date")}
              errorMessage={errors.date}
            />
            <Input
              leftIcon={<Time />}
              placeholder="Hour"
              type="time"
              register={register("time")}
              errorMessage={errors.time}
            />
            <label>
              Choose the number of people taking part in the workshop
            </label>
            <ChoiceNumberPersonne
              countChange={handleChangeCount}
              count={number_of_participants}
            />
            <label>Budgets</label>
            <ChoiceNumberPrice price={price} priceChange={handleChangePrice} />

            <Input
              leftIcon={<Place />}
              placeholder="Location"
              register={register("location")}
              errorMessage={errors.location}
            />

            <Textarea placeholder="Description" />
            <div className="w-min">
              <Button
                // onClick={handleClickSendButton}
                type="submit"
                content="Request"
                leftIcon={<Send />}
                disabled={mutationPost.isPending}
              />
            </div>
          </form>
        </section>

        <section className="flex-1">
          {/* <PresentationTrainer trainer={trainer} /> ### */}
        </section>
      </main>
    </div>
  );
}

export default PropositionDate;
