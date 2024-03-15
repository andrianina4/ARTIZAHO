"use client";

import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {patchWorkShop} from "@/services/admin/adminWorkshop.service";

export const UpdateWorkshop = (id: number) => {
	const {mutate} = useMutation({
		mutationFn: (data: any) => patchWorkShop(id, data),
		onError: (e) => {
			console.error(e.message);
		},
	});

	// * VALIDATION YUP
	const updateWorkshopSchema = yup.object().shape({
		name: yup.string().required("This field is required"),
		category: yup.string().required("This field required"),
		desc: yup.string().required("This field is required"),
	});

	// * react hook form
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(updateWorkshopSchema)});

	const handleInputFile = () => {
		const inputELement = document.querySelector(".input-file-atelier") as HTMLFormElement;
		if (inputELement) {
			inputELement.click();
		}
	};

	const onSubmit = (data: any) => {
		const dataToSend = {
			title: data.name,
			description: data.desc,
			category: data.category,
		};
		console.log(data);
		mutate(dataToSend);
	};

	const handleReset = () => {
		reset();
	};

	return {register, handleSubmit, onSubmit, handleReset, errors, handleInputFile};
};
