"use client";

import Textarea from "@/components/textarea";
import {EditFill, Heart, ImageAdd, More, Users} from "@/constants/link/icons";
import {getArtisanDetail} from "@/services/artisan.service";
import {useQuery} from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import Item from "./components/Item";
import Button from "@/components/button";
import {IImage} from "@/types/IImage";
import LoadingComponent from "@/app/_global/loading";
import ErrorComponent from "@/app/_global/error";
import ProgressBar from "@/components/progress-bar";
import StarScore from "@/components/star-score";

type TProps = {
	id: string;
};

export default function Page({params}: {params: {id: string}}) {
	const {id} = params;
	const {data, isLoading, isError} = useQuery({
		queryKey: ["Craftman"],
		queryFn: () => getArtisanDetail(id),
	});

	// const {register, handleSubmit, onSubmit, handleReset, errors, handleInputFile} = useUpdateCraftman(Number(id));

	if (isLoading) {
		return <LoadingComponent />;
	}
	if (isError) {
		return <ErrorComponent />;
	}

	return (
		<form className="flex flex-row w-full h-full px-12">
			<div className="flex flex-col w-1/2">
				<div className="flex flex-col h-full justify-between">
					<div>
						<Item
							label="Name"
							name="name"
							defaultValue={data?.name}
							// register={register("name")}
							// errorMessage={errors.name?.message}
						/>
						<Item
							label="Know-how"
							name="category"
							defaultValue={data?.expertise}
							// register={register("expertise")}
							// errorMessage={errors.expertise?.message}
						/>
						<div className="pt-2 flex flex-row">
							<div className="w-1/5 flex pt-4 opacity-60 font-bold">Description</div>
							<div className="w-4/5 gap-2">
								<Textarea
									className="h-48"
									placeholder="Description"
									name="desc"
									defaultValue={data?.description}
									// register={register("description")}
									// errorMessage={errors.description?.message}
								/>
							</div>
						</div>
					</div>
					<div className="flex mb-8 gap-4">
						<Button content="Save" type="submit" />
						<button
							// onClick={handleReset}
							type="button"
							className="w-full py-3.5 px-4 text-sm rounded-2xl flex justify-center items-center bg-bronze bg-transparent text-black  hover:bg-bronze hover:bg-opacity-50 transition-all ease-linear duration-100">
							Cancel
						</button>
					</div>
				</div>
			</div>
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
			<div className="flex justify-center w-14 pt-5 pl-5 ">
				<EditFill className="w-6 h-6 opacity-50" />
			</div>
			{/* PROFIL */}
			{/* <div className=" left-1/2 transform -translate-x-1/2">
				<div className="flex justify-center bg-white  rounded-3xl w-48 h-10 ">
					<StarScore />
				</div>
				<div className="flex justify-center items-center gap-2 bg-white  rounded-3xl w-48 h-10  ">
					<span>
						<Users />
					</span>
					<span>Total Client</span>
					<span>20</span>
				</div>
			</div> */}
		</form>
	);
}
