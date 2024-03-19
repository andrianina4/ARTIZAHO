import {deleteArtisan} from "@/services/artisan.service";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import React, {MouseEventHandler} from "react";

function useDeleteCraftman(id: number) {
	const queryClient = useQueryClient();

	const {mutate} = useMutation({
		mutationFn: (id: number) => deleteArtisan(id),
		onSuccess: () => {
			console.log("Success");
		},
		onSettled: async (_, error) => {
			if (error) {
				console.log("error");
			} else {
				await queryClient.invalidateQueries({queryKey: ["AdminCraftman"]});
			}
		},
	});

	const handleDelete: MouseEventHandler<HTMLButtonElement> = async (e: any) => {
		mutate(id);
	};
	return {handleDelete};
}

export default useDeleteCraftman;
