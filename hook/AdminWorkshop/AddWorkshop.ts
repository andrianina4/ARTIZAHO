"use client";

import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {WorkshopDataToSend} from "@/types/IWorkshop";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postWorkShop} from "@/services/admin/adminWorkshop.service";

type Tdata = {
	name: string;
	know_how: string;
	desc: string;
};

export const AddWorkshop = (close: () => void) => {
	const queryClient = useQueryClient();

	const {mutate} = useMutation({
		mutationFn: (data: WorkshopDataToSend) => postWorkShop(data),
		onSuccess: (e) => {
			reset();
			setImagePreview([]);
			setImagetoSend([]);
		},
		onSettled: async (_, error) => {
			if (error) {
				console.error(error.message);
			} else {
				await queryClient.invalidateQueries({queryKey: ["adminWorkshop"]});
			}
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

	const [imagePreview, setImagePreview] = useState<string[]>([]);
	const [imagetoSend, setImagetoSend] = useState<File[]>([]);
	// * Traitement des images
	const handleInputFile = () => {
		setImagePreview([]);
		setImagetoSend([]);
		const inputELement = document.querySelector("#input-file-atelier") as HTMLFormElement;
		if (inputELement) {
			inputELement.click();
		}
	};

	// * Lorsqu'on change l'image
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const arrayFile = e.target.files;
		if (arrayFile) {
			let tempTab: string[] = [];
			let images: File[] = [];
			for (let i = 0; i < arrayFile.length; i++) {
				const file = arrayFile[i];
				images = [...images, file];
				const imageUrl = URL.createObjectURL(file);
				tempTab = [...tempTab, imageUrl];
			}
			setImagePreview(tempTab);
			setImagetoSend(images);
		}
	};

	// * SUBMIT
	const onSubmit = (data: Tdata) => {
		const dataToSend: WorkshopDataToSend = {
			title: data.name,
			description: data.desc,
			category: data.know_how,
			workshop_info: {
				max_participants: 100,
				base_price: 0,
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
