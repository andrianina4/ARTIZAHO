import {CreateArtisanDto} from "./../dto/artisan/index";
import {axiosInstanceApi, getCurrentToken} from "@/axios";
import {ICraftman} from "@/types/ICraftman";
import {axiosInstanceApiClient} from "@/app/axiosClient";
import {IBackendResponse} from "@/types";

export const getArtisan = async () => {
	const access_token = await getCurrentToken();
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<ICraftman[]>>(`/v1/artisan/`, {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${access_token}`,
		},
	});

	return results;
};

export const getArtisanDetail = async (id: string) => {
	const access_token = await getCurrentToken();
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<ICraftman>>(`/v1/artisan/${id}/`, {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${access_token}`,
		},
	});

	return results;
};

export const postArtisan = async (data: CreateArtisanDto) => {
	const access_token = await getCurrentToken();
	const response = await axiosInstanceApi.post("/v1/artisan/", data, {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${access_token}`,
		},
	});

	return response.data.id;
};

export const uploadImageArtisan = async (id: number, file: File) => {
	const access_token = await getCurrentToken();
	const formData = new FormData();
	formData.append("images", file);
	const responseImage = await axiosInstanceApi.post(`/v1/artisan/${id}/upload_image/`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${access_token}`,
		},
	});
	return responseImage.data;
};

export const patchArtisan = async (id: string, data: any) => {
	const access_token = await getCurrentToken();
	return await axiosInstanceApi.patch<CreateArtisanDto>(`/v1/artisan/${id}/`, data, {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const deleteArtisan = async (id: number) => {
	const access_token = await getCurrentToken();
	return await axiosInstanceApiClient.delete<ICraftman>(`/v1/artisan/${id}/`, {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${access_token}`,
		},
	});
};
