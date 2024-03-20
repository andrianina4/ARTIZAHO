"use client";

import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {IScheduleToSend} from "@/types/IWorkshop";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postScheduleWorkshop} from "@/services/admin/adminWorkshop.service";
import {ICraftman} from "@/types/ICraftman";
import {enqueueSnackbar} from "notistack";

type Tdata = {
	name: string;
	know_how: string;
	desc: string;
};

export const AddScheduleWorkshop = (id: number, craftsman: ICraftman | undefined, close: () => void) => {
	const queryClient = useQueryClient();

	const {mutate} = useMutation({
		mutationFn: (data: IScheduleToSend) => postScheduleWorkshop(id, data),
		onSuccess: () => {
			enqueueSnackbar("Workshop schedule successfully created", {variant: "success"});
		},
		onError: (err) => {
			enqueueSnackbar("An error has occurred, watch console for details", {variant: "error"});
			console.error(err.message);
		},
		onSettled: async (response) => {
			await queryClient.invalidateQueries({queryKey: ["adminWorkshopSchedule"]});
			reset();
		},
	});

	// * VALIDATION YUP
	const addWorkshopSchema = yup.object().shape({
		location: yup.string().required("This field is required"),
		date: yup.mixed().required("This field required"),
		time: yup.mixed().required("This field is required"),
	});

	// * react hook form
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(addWorkshopSchema)});

	// * SUBMIT
	const onSubmit = async (data: any) => {
		const dataToSend: IScheduleToSend = {
			start_date: data.date,
			end_date: data.date,
			time: data.time,
			duration: 3600,
			location: data.location,
			artisan: {id: Number(craftsman?.id)},
		};

		mutate(dataToSend);
		close();
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
	};
};
