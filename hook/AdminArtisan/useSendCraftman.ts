import {
  CreateArtisanDto,
  CreateImageArtisanDto,
} from "../../dto/artisan/index";
("use Client");
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { CraftmanSchema, FormCraftmanData } from "@/app/schema/craftmanSchema";
import { useMutation } from "react-query";
import axios from "axios";
import { axiosInstanceApi } from "@/axios";
import { getSession } from "next-auth/react";
import { postArtisan, uploadImageArtisan } from "@/services/artisan.service";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";

export function useSendCraftman() {
  const [ImagetoShow, setImagetoShow] = useState<string>();
  const [ImageToSend, setImageToSend] = useState<any>();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(CraftmanSchema) });

  const handleInputFile = () => {
    const inputELement = document.querySelector(
      "#input-file-company"
    ) as HTMLFormElement;
    if (inputELement) {
      inputELement.click();
    }
    setImagetoShow(undefined);
    setImageToSend(undefined);
  };
  // * Lorsqu'on change l'image
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // * Traitement image a afficher
      setImagetoShow(URL.createObjectURL(e.target.files[0]));
      // * Traitement image a envoyer
      setImageToSend(e.target.files[0]);
    }
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: CreateArtisanDto) => postArtisan(data),
    onError: (err) => {
      console.log("error");
    },
    onSettled: async (response) => {
      if (ImageToSend) {
        await uploadImageArtisan(response?.data.id, ImageToSend);
      }
      await queryClient.invalidateQueries({ queryKey: ["Craftman"] });
      setImageToSend(null);
    },
    onSuccess: (data) => {
			enqueueSnackbar("Update success", {variant: "success"});
		},
  });

  const onSubmit = async(data: CreateArtisanDto )=>{
    mutate(data)
  }
  return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		ImagetoShow,
		handleInputFile,
		handleFileChange,
	};
}
