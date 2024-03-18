"use client";

import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {WorkshopDataToSend} from "@/types/IWorkshop";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postWorkShop, uploadImageWorkshop} from "@/services/admin/adminWorkshop.service";

type Tdata = {
	name: string;
	know_how: string;
	desc: string;
};

export const AddWorkshop = (close: () => void) => {
	const [imagePreview, setImagePreview] = useState<string[]>([]);
	const [imagetoSend, setImagetoSend] = useState<FileList | null>(null);

	const queryClient = useQueryClient();

	const {mutate} = useMutation({
		mutationFn: (data: WorkshopDataToSend) => postWorkShop(data),
		onError: (err) => {
			console.error(err.message);
		},
		onSettled: async (response) => {
			if (imagetoSend) await uploadImageWorkshop(response!.data.id, imagetoSend);
			await queryClient.invalidateQueries({queryKey: ["adminWorkshop"]});
			reset();
			setImagePreview([]);
			setImagetoSend(null);
		},
	});

	// * VALIDATION YUP
	const addWorkshopSchema = yup.object().shape({
		name: yup.string().required("This field is required"),
		know_how: yup.string().required("This field required"),
		desc: yup.string().required("This field is required"),
	});

	// * react hook form
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(addWorkshopSchema)});

	// * Traitement des images
	const handleInputFile = () => {
		setImagePreview([]);
		setImagetoSend(null);
		const inputELement = document.querySelector("#input-file-atelier") as HTMLFormElement;
		if (inputELement) {
			inputELement.click();
		}
	};

	// * Lorsqu'on change l'image
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const arrayFile = e.target.files;
		setImagetoSend(arrayFile);
		if (arrayFile) {
			let tempTab: string[] = [];
			for (let i = 0; i < arrayFile.length; i++) {
				const file = arrayFile[i];
				const imageUrl = URL.createObjectURL(file);
				tempTab = [...tempTab, imageUrl];
			}
			setImagePreview(tempTab);
		}
	};

	// * SUBMIT
	const onSubmit = async (data: Tdata) => {
		const dataToSend: WorkshopDataToSend = {
			title: data.name,
			description: data.desc,
			category: data.know_how,
			workshop_info: {
				max_participants: 100,
				base_price: 16,
				discount: 0.0,
				currency: "EUR",
			},
		};
		mutate(dataToSend);
		close();
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		imagePreview,
		handleInputFile,
		handleFileChange,
	};
};
