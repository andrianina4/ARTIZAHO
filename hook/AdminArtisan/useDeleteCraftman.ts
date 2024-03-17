
import { deleteArtisan } from '@/services/artisan.service'
import { useQueryClient } from '@tanstack/react-query'
import React, { MouseEventHandler } from 'react'
import { useMutation } from 'react-query'

function useDeleteCraftman(id:number) {
  const queryClient= useQueryClient()

  const{mutate} =useMutation({
    mutationFn:(id:number)=>deleteArtisan(id),
    onSuccess:()=>{
        console.log("Success")
    },
    onSettled: async(_, error )=>{
        if (error) {
            console.log("error");
        } else {
            await queryClient.invalidateQueries({queryKey: ["Craftman"]});
        }
    }
  })

  const handleDelete: MouseEventHandler<HTMLButtonElement> = async (e: any) => {
    mutate(id);
};
return{handleDelete}
}

export default useDeleteCraftman