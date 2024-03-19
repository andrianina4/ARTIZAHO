"use client";

import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteWorkShop} from "@/services/admin/adminWorkshop.service";
import {MouseEventHandler} from "react";
import {enqueueSnackbar} from "notistack";

export const DeleteWorkshop = (id: number) => {
	const queryClient = useQueryClient();

	const {mutate} = useMutation({
		mutationFn: (id: number) => deleteWorkShop(id),
		onSuccess: (e) => {
			enqueueSnackbar("Delete success", {variant: "success"});
		},
		onSettled: async (_, error) => {
			if (error) {
				console.error(error.message);
			} else {
				await queryClient.invalidateQueries({queryKey: ["adminWorkshop"]});
			}
		},
	});

	const handleDelete: MouseEventHandler<HTMLButtonElement> = async (e: any) => {
		mutate(id);
	};

	return {handleDelete};
};