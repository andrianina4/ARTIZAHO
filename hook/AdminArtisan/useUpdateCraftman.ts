import {patchArtisan} from "@/services/artisan.service";
import React from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {enqueueSnackbar} from "notistack";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ICraftmanUpdate} from "@/types/ICraftman";

function useUpdateCraftman(id: number) {
	const queryClient = useQueryClient();

	const {mutate} = useMutation({
		mutationFn: (data: any) => patchArtisan(id, data),
		onError: (e) => {
			console.log("error");
		},
		onSuccess: (data) => {
			enqueueSnackbar("Update success", {variant: "success"});
		},
		onSettled: async (response) => {
			await queryClient.invalidateQueries({queryKey: ["Craftman"]});
		},
	});

	const required = "This field is required";

	const updateArtisanSchema = yup.object().shape({
		name: yup.string().required(required),
		expertise: yup.string().required(required),
		description: yup.string().required(required),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(updateArtisanSchema)});

	const onSubmit = (data: ICraftmanUpdate) => {
		mutate(data);
	};

	const handleReset = () => {
		reset();
	};

	return {register, handleSubmit, onSubmit, handleReset, errors};
}

export default useUpdateCraftman;
