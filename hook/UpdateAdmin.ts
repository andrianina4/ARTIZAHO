"use client";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useState} from "react";

export function UpdateAdmin() {
	// * VALIDATION YUP
	const addCompanySchema = yup.object().shape({
		fullname: yup.string().required("The fullname is required"),
		email: yup
			.string()
			.email("The email format seems to be invalid")
			.required("The email is required"),
		phone_number: yup.string().required("The phone number is required"),
		password: yup
			.string()
			.min(8, "The password must be at least 8 characters long")
			.max(20, "The password must be at most 20 characters long")
			.required("The password is required"),
	});

	// * REACT HOOK FORM
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(addCompanySchema)});

	// * IMAGE
	const [ImagetoShow, setImagetoShow] = useState<string>();
	const [ImageToSend, setImageToSend] = useState<any>();
	// * Lorsqu'on clique sur le bouton d'ajout d'image
	const handleInputFile = () => {
		const inputELement = document.querySelector("#input-file-company") as HTMLFormElement;
		if (inputELement) {
			inputELement.click();
		}
		setImagetoShow(undefined);
		setImageToSend(undefined);
	};
	// * Lorsqu'on change l'image
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			// * Traitement image a afficher
			setImagetoShow(URL.createObjectURL(e.target.files[0]));
			// * Traitement image a envoyer
			setImageToSend(e.target.files[0]);
		}
	};

	// * WHEN SUBMIT
	const onSubmit = (data: any) => {
		try {
			const formData = new FormData();
			// * Image
			formData.append("company_image", ImageToSend);
			// * les infos du formulaire sont dans data
		} catch (error: any) {
			console.error(error);
		} finally {
			reset();
			setImagetoShow(undefined);
			setImageToSend(undefined);
		}
	};

	return {register, handleSubmit, onSubmit, errors, ImagetoShow, handleInputFile, handleFileChange};
}
