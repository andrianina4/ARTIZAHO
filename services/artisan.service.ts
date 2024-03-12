import { CreateArtisanDto, CreateImageArtisanDto } from "./../dto/artisan/index";
import { axiosInstanceApi, getCurrentToken } from "@/axios";
import { ICraftman } from "@/types/ICraftman";
import { IImage } from "@/types/IImage";

export const postArtisan = async (data: CreateArtisanDto) => {
  const access_token = getCurrentToken();
  const response = await axiosInstanceApi.post("/v1/artisan/", data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.data.id;
};

export const uploadImageArtisan = async (dataImage: CreateImageArtisanDto) => {
  const responseImage = await axiosInstanceApi.post(
    `/v1/artisan/${dataImage.artisan}/upload_image`,
    dataImage,

    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return responseImage.data;
};
