"use Client"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState} from "react"
import { CraftmanSchema, FormCraftmanData } from "@/app/schema/craftmanSchema";
import {useMutation} from "react-query"
import axios from "axios";
import { axiosInstanceApi } from "@/axios";
import { getSession } from "next-auth/react";

export  function useSendCraftman() {

  const [ImagetoShow, setImagetoShow] = useState<string>();
	const [ImageToSend, setImageToSend] = useState<any>();

  const getUploadImageKey = (artisanId: number) => [`artisan`, artisanId, 'upload_image'];

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

//URL encore à changer

    const createCraftmanmutation= useMutation(async(data: FormCraftmanData)=>{
      const session = await getSession();

      if(session){
          const access_token = session.user.access_token

          const response=  await axiosInstanceApi.post("/v1/artisan/", data,
          {
           headers: {
             Authorization: `Bearer ${access_token}`,
           },
         }
          )
           return response.data
      }
    

    })

    const uploadImageMutation = useMutation(async (formdata: FormData, artisanId:number) => {
      const responseImage= await axiosInstanceApi.post(`/v1/artisan/${artisanId }/upload_image`, formdata,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      return responseImage.data
    },
    {
      mutationKey: getUploadImageKey, 
    }
    )

    const onSubmit = async(data: FormCraftmanData) => {
      try {
        //envoyer info artisan
        const createCraftman= await createCraftmanmutation.mutateAsync(data);

        if(ImageToSend){
          const formdata= new FormData();
          formdata.append("image",ImageToSend);
          formdata.append("id", createCraftman.id);
          
          //Envoyer image artisan
          await uploadImageMutation.mutateAsync(formdata);
        }
        
      } catch (error) {
        console.log("Il ya une erreur",error);
      }
    };

    return {register, handleSubmit, onSubmit, errors, ImagetoShow, handleInputFile, handleFileChange};
}

