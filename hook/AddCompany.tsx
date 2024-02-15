"use client";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useState} from "react";

export function AddCompany() {
	// * VALIDATION YUP
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
			reset();
			setImagetoShow(undefined);
			setImageToSend(undefined);
		} catch (error: any) {
			console.error(error);
		}
	};

	return {register, handleSubmit, onSubmit, errors, ImagetoShow, handleInputFile, handleFileChange};
}
