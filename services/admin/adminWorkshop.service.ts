import {axiosInstanceApiClient} from "@/app/axiosClient";
import {getCurrentToken} from "@/axios";
import {IBackendResponse} from "@/types";
import {IScheduleToSend, IWorkShop, WorkshopDataToSend} from "@/types/IWorkshop";

export const getWorkShopAdmin = async () => {
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<IWorkShop[]>>(`/v1/workshop/`);

	return results;
};

export const postWorkShop = async (data: WorkshopDataToSend) => {
	const access_token = await getCurrentToken();

	return await axiosInstanceApiClient.post<IWorkShop>(`/v1/workshop/`, data, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const uploadImageWorkshop = async (id: number, data: FileList) => {
	const access_token = await getCurrentToken();

	const formData = new FormData();
	for (let i = 0; i < data.length; i++) {
		const item = data[i];
		formData.append("images", item);
	}
	return await axiosInstanceApiClient.post(`/v1/workshop/${id}/upload_image/`, formData, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const deleteWorkShop = async (id: number) => {
	const access_token = await getCurrentToken();

	return await axiosInstanceApiClient.delete<IWorkShop>(`/v1/workshop/${id}`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const patchWorkShop = async (id: number, data: any) => {
	const access_token = await getCurrentToken();

	return await axiosInstanceApiClient.patch<IWorkShop>(`/v1/workshop/${id}/`, data, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const getScheduleWorkshop = async (id: number) => {
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<any>>(`/v1/workshop/${id}/schedule`);

	return results;
};

export const postScheduleWorkshop = async (id: number, data: IScheduleToSend) => {
	const access_token = await getCurrentToken();

	return await axiosInstanceApiClient.post(`/v1/workshop/${id}/schedule/`, data, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const getArtisans = async () => {
	const access_token = await getCurrentToken();

	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<any>>(`/v1/artisan/`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	return results;
};
