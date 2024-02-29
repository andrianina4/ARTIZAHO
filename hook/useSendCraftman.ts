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

    const mutation= useMutation(async(data: FormCraftmanData)=>{
      await axios.post("baseUrl", data)
    })

    const onSubmit = (data: FormCraftmanData) => {
      mutation.mutate(data);
    };

    return {register, handleSubmit, onSubmit, errors, ImagetoShow, handleInputFile, handleFileChange};
}

