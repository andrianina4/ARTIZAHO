import {axiosInstanceApiClient} from "@/app/axiosClient";
import {IBackendResponse} from "@/types";
import {IScheduleToSend, IWorkShop, WorkshopDataToSend} from "@/types/IWorkshop";

const access_token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNzgyMjA0LCJpYXQiOjE3MTA2OTU4MDQsImp0aSI6ImM0ZjAwMDYxMzZiMTQ1NWU5YjJiOGVmMTE5NzAzNjQ3IiwidXNlcl9pZCI6MX0.TauLeFFXfwk_LoIHH-UcTWMyNxKe9LCie7aVFWFcViQ";

// const access_token = await getCurrentToken();

const headers = {
	headers: {
		Authorization: `Bearer ${access_token}`,
	},
};

export const getWorkShopAdmin = async () => {
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<IWorkShop[]>>(`/v1/workshop/`);

	return results;
};

export const postWorkShop = async (data: WorkshopDataToSend) => {
	return await axiosInstanceApiClient.post<IWorkShop>(`/v1/workshop/`, data, headers);
};

export const uploadImageWorkshop = async (id: number, data: FileList) => {
	const formData = new FormData();
	for (let i = 0; i < data.length; i++) {
		const item = data[i];
		formData.append("images", item);
	}
	return await axiosInstanceApiClient.post(`/v1/workshop/${id}/upload_image/`, formData, headers);
};

export const deleteWorkShop = async (id: number) => {
	return await axiosInstanceApiClient.delete<IWorkShop>(`/v1/workshop/${id}`, headers);
};

export const patchWorkShop = async (id: number, data: any) => {
	return await axiosInstanceApiClient.patch<IWorkShop>(`/v1/workshop/${id}/`, data, headers);
};

export const getScheduleWorkshop = async (id: number) => {
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<any>>(`/v1/workshop/${id}/schedule`);

	return results;
};

export const postScheduleWorkshop = async (id: number, data: IScheduleToSend) => {
	return await axiosInstanceApiClient.post(`/v1/workshop/${id}/schedule/`, data, headers);
};

export const getArtisans = async () => {
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<any>>(`/v1/artisan/`, headers);

	return results;
};
