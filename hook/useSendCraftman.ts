
import { CreateUserDto } from './../dto/user/index';
"use Client"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState} from "react"
import { CraftmanSchema, FormCraftmanData } from "@/app/schema/craftmanSchema";
import {ICraftman} from "@/types/ICraftman"
import {useMutation} from "react-query"
import axios from "axios";
import { axiosInstanceApi } from "@/axios";
import { getSession } from "next-auth/react";

export  function useSendCraftman() {

  const [ImagetoShow, setImagetoShow] = useState<string>();
	const [ImageToSend, setImageToSend] = useState<any>();

    const {handleSubmit, register, formState:{errors} }= useForm({resolver: yupResolver(CraftmanSchema)});

    const handleInputFile = () => {
      const inputELement = document.querySelector("#input-file-company") as HTMLFormElement;
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

// post info et image artisan
 const submitCraftman = async(data: ICraftman, image: File |null) => {
  const response = await axiosInstanceApi.post('/v1/artisan',data, {

 })

 // obtenir le id de l'artisan créé
 const artisanId= response.data.id

 // si image selctionnée
 if(ImageToSend){
  const formData = new FormData();
  formData.append('file',ImageToSend);

  await axiosInstanceApi.post(`/v1/artisan/${artisanId}/upload_image`, formData,
  {headers: {
    'Content-Type': 'multipart/form-data', // Set content type for image uploads
    }
  })

    
}
const mutationCraftman:any = useMutation(() => submitCraftman(data, ImageToSend));
return { register, handleSubmit, errors, mutationCraftman, ImagetoShow, handleInputFile, handleFileChange};
}
}
