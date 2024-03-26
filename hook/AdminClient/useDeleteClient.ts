import {deleteClient} from "@/services/admin/adminClient.service";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {enqueueSnackbar} from "notistack";
import React, {MouseEventHandler} from "react";

export default function useDeleteClient(id: number) {
	const queryClient = useQueryClient();

	const {mutate} = useMutation({
		mutationFn: (id: number) => deleteClient(id),
		onSuccess: () => {
			enqueueSnackbar("Delete success", {variant: "success"});
		},
		onError: (err) => {
			enqueueSnackbar("An error has occurred, watch console for details", {variant: "error"});
			console.error(err.message);
		},
		onSettled: async (_, error) => {
			await queryClient.invalidateQueries({queryKey: ["adminClient"]});
		},
	});

	const handleDelete: MouseEventHandler<HTMLElement> = async (e: any) => {
		mutate(id);
	};
	return {handleDelete};
}
