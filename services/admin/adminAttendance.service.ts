import {axiosInstanceApiClient} from "@/app/axiosClient";
import {getCurrentToken} from "@/axios";
import {IBackendResponse} from "@/types";
import {IAttendance} from "@/types/IAttendance";

export const getAttendanceAdmin = async () => {
	const access_token = await getCurrentToken();
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<IAttendance[]>>(`v1/user/reservation/`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	return results;
};
