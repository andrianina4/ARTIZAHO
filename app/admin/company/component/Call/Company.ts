import {getAll} from "@/axios/Request";
import {AxiosResponse} from "axios";

export const getAllCompany = (): Promise<AxiosResponse<any>> => {
	return getAll("companies");
};
