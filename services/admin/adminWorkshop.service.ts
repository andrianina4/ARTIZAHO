import {axiosInstanceApiClient} from "@/app/axiosClient";
import {getCurrentToken} from "@/axios";
import {IBackendResponse} from "@/types";
import {IWorkShop, WorkshopDataToSend} from "@/types/IWorkshop";
import {getSession} from "next-auth/react";

// const access_token =
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwMzM3MDk4LCJpYXQiOjE3MTAyNTA2OTgsImp0aSI6ImEyOThhMjE2MGZjMDQwOGRiOTJhN2Q4MzVmMzk5OTBmIiwidXNlcl9pZCI6MX0.c6fHtuDB5w18aqPeyge2OveazjZsYRrOJUc7-RdarGY";

export const postWorkShop = async (data: WorkshopDataToSend) => {
	const access_token = await getCurrentToken();
	console.log("🚀 ~ postWorkShop ~ access_token:", access_token);

	return await axiosInstanceApiClient.post<IWorkShop>(`/v1/workshop/`, data, {
		headers: {
			Authorization: `${access_token}`,
		},
	});
};
