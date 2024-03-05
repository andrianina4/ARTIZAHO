import { axiosInstanceApiClient } from "@/app/axiosClient";
import { getCurrentToken } from "@/axios";
import { IWorkShop } from "@/types/IWorkshop";
import { getSession } from "next-auth/react";

export const getWorkShop = async () => {
  // const session = await getSession();

  return axiosInstanceApiClient.get<IWorkShop[]>(`/v1/workshop/`, {
    // headers: {
    //   Authorization: `Bearer ${session?.user.access_token}`,
    // },
  });

  return null;
};
