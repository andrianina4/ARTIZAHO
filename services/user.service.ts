import { axiosInstanceApiClient } from "@/app/axiosClient";
import { axiosInstance, axiosInstanceApi, getCurrentToken } from "@/axios";
import { CreateUserDto } from "@/dto/user";
import { ICurrentUser } from "@/types/user/ICurrentUser";
import { IRequestToken } from "@/types/user/IRequestToken";
import { getSession } from "next-auth/react";

export const requestUserToken = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const { data } = await axiosInstance.post<IRequestToken>("/token/auth/", {
    email: username,
    password,
  });

  return data;
};

export const getCurrentUserConnected = async (
  access_token: IRequestToken["access_token"]
) => {
  const { data } = await axiosInstanceApi.get<ICurrentUser>(
    "/v1/user/current-user/",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return data;
};

export const uploadImage = async () => {
  const access_token = await getCurrentToken();

  const { data } = await axiosInstanceApiClient.get<ICurrentUser>(
    "/v1/user/current-user/",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return null;
};

export const patchUser = async (body: CreateUserDto) => {
  const access_token = await getCurrentToken();
  return axiosInstanceApiClient.patch(`/v1/user/update_info/`, body, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const postUser = async (body: CreateUserDto) => {
  const { data } = await axiosInstanceApiClient.post<ICurrentUser>(
    `/v1/user/`,
    body
  );

  return data;
};
