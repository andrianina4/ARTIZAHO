"use client";

import Textarea from "@/components/textarea";
import {AddImage, EditFill, Heart} from "@/constants/link/icons";
import {getArtisanDetail} from "@/services/artisan.service";
import {useQuery} from "@tanstack/react-query";
import React from "react";
import Item from "./components/Item";
import Button from "@/components/button";
import LoadingComponent from "@/app/_global/loading";
import ErrorComponent from "@/app/_global/error";
import ProgressBar from "@/components/progress-bar";
import ProfilCratsman from "./components/ProfilCratsman";
import useUpdateCraftman from "@/hook/AdminArtisan/useUpdateCraftman";
import SelectCustom from "@/components/Select";
import {selectExpertiseItem} from "@/constants/data/SelectFormValues";

type TProps = {
	id: string;
};

export default function Page({params}: {params: {id: string}}) {
	const {id} = params;
	const {data, isLoading, isError} = useQuery({
		queryKey: ["Craftman"],
		queryFn: () => getArtisanDetail(id),
	});

	const {register, handleSubmit, onSubmit, handleReset, errors} = useUpdateCraftman(Number(id));

	if (isLoading) {
		return <LoadingComponent />;
	}
	if (isError) {
		return <ErrorComponent />;
	}

	return (
		<form className="flex flex-row w-full h-full px-12" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col w-1/2">
				<div className="flex flex-col gap-5">
					<div>
						<Item
							label="Name"
							name="name"
							defaultValue={data?.name}
							register={register("name")}
							errorMessage={errors.name?.message}
						/>
						<div className="pt-2 flex flex-row">
							<div className="w-1/5 flex pt-4 opacity-60 font-bold">Expertise</div>
							<div className="w-4/5 gap-2">
								<SelectCustom
									options={selectExpertiseItem}
									defaultValue={data?.expertise}
									register={register("expertise")}
									className="input-bordered"
								/>
							</div>
						</div>
						<div className="pt-2 flex flex-row">
							<div className="w-1/5 flex pt-4 opacity-60 font-bold">Description</div>
							<div className="w-4/5 gap-2">
								<Textarea
									className="h-40"
									placeholder="Description"
									name="desc"
									defaultValue={data?.description}
									register={register("description")}
									errorMessage={errors.description?.message}
								/>
							</div>
						</div>
					</div>
					{/* BUTTONS */}
					<div className="flex mb-8 gap-4">
						<Button content="Save" type="submit" />
						<button
							onClick={handleReset}
							type="button"
							className="w-full py-3.5 px-4 text-sm rounded-2xl flex justify-center items-center bg-bronze bg-transparent text-black  hover:bg-bronze hover:bg-opacity-50 transition-all ease-linear duration-100">
							Cancel
						</button>
					</div>
				</div>
				{/* MISY PROGRESS BAR */}
				<div>
					<div className="text-brown text-lg font-bold ">
						<span>Workshop performance</span>
					</div>
					<div>
						<ProgressBar color="blue" leftIcon={<Heart />} text="Bouquet en vase" number={5} />
						<ProgressBar color="green" leftIcon={<Heart />} text="Bouquet en vase" number={5} />
						<ProgressBar color="bronze" leftIcon={<Heart />} text="Bouquet en vase" number={5} />
					</div>
				</div>
			</div>
			<div className="flex justify-center w-14 pt-5 mx-4">
				<EditFill className="w-6 h-6 opacity-50" />
			</div>
			{/* PROFIL */}
			<div>
				<ProfilCratsman data={data!} />
			</div>
		</form>
	);
}
