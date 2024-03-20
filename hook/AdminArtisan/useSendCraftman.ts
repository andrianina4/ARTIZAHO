import {CreateArtisanDto} from "../../dto/artisan/index";
("use Client");
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useState} from "react";
import {CraftmanSchema} from "@/app/schema/craftmanSchema";
import {postArtisan, uploadImageArtisan} from "@/services/artisan.service";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {enqueueSnackbar} from "notistack";

export function useSendCraftman() {
	const [ImagetoShow, setImagetoShow] = useState<string>();
	const [ImageToSend, setImageToSend] = useState<FileList | null>();

	const {
		handleSubmit,
		register,
		reset,
		formState: {errors},
	} = useForm({resolver: yupResolver(CraftmanSchema)});

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
			setImageToSend(e.target.files);
		}
	};

	const queryClient = useQueryClient();

	const {mutate} = useMutation({
		mutationFn: (data: CreateArtisanDto) => postArtisan(data),
		onSuccess: () => {
			enqueueSnackbar("Craftsman created with success", {variant: "success"});
		},
		onError: (err) => {
			enqueueSnackbar("An error has occurred, watch console for details", {variant: "error"});
			console.error(err.message);
		},
		onSettled: async (response) => {
			if (ImageToSend) await uploadImageArtisan(response, ImageToSend);
			await queryClient.invalidateQueries({queryKey: ["AdminCraftman"]});
			setImagetoShow("");
			setImageToSend(null);
			reset();
		},
	});

	const onSubmit = async (data: CreateArtisanDto) => {
		mutate(data);
	};

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
