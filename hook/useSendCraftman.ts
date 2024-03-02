"use Client"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState} from "react"
import { CraftmanSchema, FormCraftmanData } from "@/app/schema/craftmanSchema";
import {useMutation} from "react-query"
import axios from "axios";

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

//URL encore à changer

    const createCraftmanmutation= useMutation(async(data: FormCraftmanData)=>{
     const response=  await axios.post("http://localhost:9237/api/v1/artisan/", data)
      return response.data

    })

    const uploadImageMutation = useMutation(async (formdata: FormData) => {
      const responseImage= await axios.post("http://localhost:9237/api/v1/artisan/{id}/upload_image", formdata,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      return responseImage.data
    })

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

