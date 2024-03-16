import {axiosInstanceApiClient} from "@/app/axiosClient";
import {IBackendResponse} from "@/types";
import {IWorkShop, WorkshopDataToSend} from "@/types/IWorkshop";

const access_token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNjgxODU3LCJpYXQiOjE3MTA1OTU0NTcsImp0aSI6IjY3MGQxM2VhODQ4MTRmYmNiNmQ1ZTM3ZGZmYzJiOTk4IiwidXNlcl9pZCI6MX0.qo5UXNq9DlgDWIOtANMDDBEtMGCR-HvELE3KtX6yMB8";

// const access_token = await getCurrentToken();

export const getWorkShopAdmin = async () => {
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<IWorkShop[]>>(`/v1/workshop/`);

	return results;
};

export const postWorkShop = async (data: WorkshopDataToSend) => {
	return await axiosInstanceApiClient.post<IWorkShop>(`/v1/workshop/`, data, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const uploadImageWorkshop = async (id: number, data: FileList) => {
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
	return await axiosInstanceApiClient.delete<IWorkShop>(`/v1/workshop/${id}`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const patchWorkShop = async (id: number, data: any) => {
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

export const getArtisans = async () => {
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<any>>(`/v1/artisan/`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	return results;
};
