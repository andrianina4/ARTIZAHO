import {getAll} from "@/axios/Request";

export const getAllCompany = async (
	setError: React.Dispatch<React.SetStateAction<Error | null>>
) => {
	let response;
	try {
		response = await getAll("qwer");
	} catch (error: any) {
		setError(error.message);
		// console.log("TAFIDITRA ERROR");
	} finally {
		return response;
	}
};
