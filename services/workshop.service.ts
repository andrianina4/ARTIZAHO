import { axiosInstanceApiClient } from "@/app/axiosClient";
import { getCurrentToken } from "@/axios";
import { IBackendResponse } from "@/types";
import { IWorkShop } from "@/types/IWorkshop";
import { getSession } from "next-auth/react";

export const getWorkShop = async () => {
  const {
    data: { results },
  } = await axiosInstanceApiClient.get<IBackendResponse<IWorkShop[]>>(
    `/v1/workshop/`
  );

  return results;
};
