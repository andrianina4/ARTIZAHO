"use client";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export function AddAdmin(close: () => void) {
	// * VALIDATION YUP
	const addCompanySchema = yup.object().shape({
		admin_name: yup.string().required("The name is required"),
		admin_mail: yup
			.string()
			.email("The email format seems to be invalid")
			.required("The email is required"),
	});

	// * REACT HOOK FORM
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(addCompanySchema)});

	// * WHEN SUBMIT
	const onSubmit = (data: any) => {
		try {
			console.log(data);
			// * les infos du formulaire sont dans data
		} catch (error: any) {
			console.error(error);
		} finally {
			close();
			reset();
		}
	};

	return {register, handleSubmit, onSubmit, errors};
}
