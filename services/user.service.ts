import { axiosInstance, axiosInstanceApi } from "@/axios";
import { ICurrentUser } from "@/types/user/ICurrentUser";
import { IRequestToken } from "@/types/user/IRequestToken";

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
