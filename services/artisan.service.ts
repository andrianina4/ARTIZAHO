import { getArtisans } from './admin/adminWorkshop.service';
import { CreateArtisanDto, CreateImageArtisanDto } from "./../dto/artisan/index";
import { axiosInstanceApi, getCurrentToken } from "@/axios";
import { ICraftman } from "@/types/ICraftman";
import { IImage } from "@/types/IImage";
import { axiosInstanceApiClient } from '@/app/axiosClient';
import { IBackendResponse } from '@/types';

const access_token = getCurrentToken();
const headers = {
	headers: {
		Authorization: `Bearer ${access_token}`,
	},
};

export const postArtisan = async (data: CreateArtisanDto) => {
 
  const response = await axiosInstanceApi.post("/v1/artisan/", data, headers
  );

  return response.data.id;
};

export const uploadImageArtisan = async (dataImage: CreateImageArtisanDto) => {

  const access_token = getCurrentToken();
  const responseImage = await axiosInstanceApi.post(
    `/v1/artisan/${dataImage.artisan}/upload_image/`,
    dataImage,

    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  return responseImage.data;
};

export const patchArtisan = async(id: number, data:any)=>{
  return await axiosInstanceApi.patch<CreateArtisanDto>(`/v1/artisan/${id}/`, data, headers)
}

export const getArtisan = async()=>{
  const {data:{results}}= await axiosInstanceApiClient.get<IBackendResponse<ICraftman[]>>(`/v1/artisan/`)

  return results
}

export const deleteArtisan = async( id:number)=>{
  return await axiosInstanceApiClient.delete<ICraftman>(`/v1/artisan/${id}/`, headers)
}