import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export function AddCompany() {
	const addCompanySchema = yup.object().shape({
		name: yup.string().required("The company name is required"),
		email: yup
			.string()
			.email("The email format seems to be invalid")
			.required("The company email is required"),
		phone_number: yup.string().required("The company phone number is required"),
		nif: yup
			.number()
			.required("The company email is required")
			.positive("The nif stat seems to be invalid")
			.integer("The nif stat seems to be invalid"),
		location: yup.string().required("The company location is required"),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(addCompanySchema)});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return {register, handleSubmit, onSubmit, errors};
}
