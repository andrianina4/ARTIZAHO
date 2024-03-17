import { axiosInstanceApiClient } from "@/app/axiosClient";
import { axiosInstanceApi, getCurrentToken } from "@/axios";
import { CreateBookWorkShop, CreateCustomWorkshop } from "@/dto/workshop";
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

export const getWorkShopScheduleServer = async (id: number) => {
  const {
    data: { results },
  } = await axiosInstanceApi.get<IBackendResponse<IScheduleWorkshop[]>>(
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

export const postBookWorkshop = async ({
  idSCheduleWorkshop,
  body,
}: {
  idSCheduleWorkshop: number;
  body: CreateBookWorkShop;
}) => {
  const access_token = await getCurrentToken();

  const { data } = await axiosInstanceApiClient.post<IBackendResponse<unknown>>(
    `/v1/workshop/scheduled_workshop/${idSCheduleWorkshop}/booking/`,
    body,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return data;
};
