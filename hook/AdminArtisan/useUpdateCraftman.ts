import { patchArtisan } from "@/services/artisan.service";
import React from "react";
import { useMutation } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";

function useUpdateCraftman(id: string) {
  const { mutate } = useMutation({
    mutationFn: (data: any) => patchArtisan(id, data),
    onError: (e) => {
			console.log("error");
		},
		onSuccess: (data) => {
			enqueueSnackbar("Update success", {variant: "success"});
		},
  });

  const required = "This field is required";

  const updateArtisanSchema = yup.object().shape({
    name: yup.string().required(required),
    knowhow: yup.string().required(required),
    description: yup.string().required(required),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(updateArtisanSchema) });

  const onSubmit = (data: any) => {
    const updateArtisan = {
      name: data.name,
      expertise: data.expertise,
      description: data.description,
    };
    mutate(updateArtisan);
  };

  return{register, handleSubmit, onSubmit, errors}
}

export default useUpdateCraftman;
