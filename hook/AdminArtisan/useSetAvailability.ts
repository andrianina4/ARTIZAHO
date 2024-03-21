"use Client";

import {CreateArtisanDto} from "../../dto/artisan/index";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {enqueueSnackbar} from "notistack";
import {addDays, format} from "date-fns";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

interface Range {
	startDate: Date;
	endDate: Date;
	key: string;
}

export function useSetAvailability(id: number) {
	// * VALIDATION YUP
	const availabitySchema = yup.object().shape({
		start: yup.mixed(),
		end: yup.mixed(),
	});

	// * react hook form
	const {
		handleSubmit,
		register,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(availabitySchema)});

	// * Calendrier
	const [state, setState] = useState<Range[]>([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 1),
			key: "selection",
		},
	]);
	const handleChange = (item: any) => {
		setState([item.selection as Range]);
	};

	const queryClient = useQueryClient();

	const {mutate} = useMutation({
		// mutationFn: (data: CreateArtisanDto) => (data),
		onSuccess: () => {
			enqueueSnackbar("Availabity set", {variant: "success"});
		},
		onError: (err) => {
			enqueueSnackbar("An error has occurred, watch console for details", {variant: "error"});
			console.error(err.message);
		},
		onSettled: async (response) => {
			await queryClient.invalidateQueries({queryKey: ["Craftman"]});
		},
	});

	const onSubmit = (data: any) => {
		console.log(data);
		console.log(state);
		// mutate(data);
	};

	const handleReset = () => {
		reset();
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		handleReset,
		state,
		handleChange,
	};
}
