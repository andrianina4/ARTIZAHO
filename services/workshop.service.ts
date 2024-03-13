import { axiosInstanceApiClient } from "@/app/axiosClient";
import { getCurrentToken } from "@/axios";
import { CreateCustomWorkshop } from "@/dto/workshop";
import { IBackendResponse } from "@/types";
import { IScheduleWorkshop, IWorkShop } from "@/types/IWorkshop";
import { getSession } from "next-auth/react";

export const getWorkShop = async () => {
  const {
    data: { results },
  } = await axiosInstanceApiClient.get<IBackendResponse<IWorkShop[]>>(
    `/v1/workshop/`
  );

  return results;
};

export const getWorkShopSchedule = async (id: number) => {
  const {
    data: { results },
  } = await axiosInstanceApiClient.get<IBackendResponse<IScheduleWorkshop[]>>(
    `/v1/workshop/${id}/schedule`
  );

  return results;
};

export const postWorkshopCustom = async ({
  id,
  body,
}: {
  id: number;
  body: CreateCustomWorkshop;
}) => {};
