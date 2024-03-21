"use client";

import React, {useEffect, useState} from "react";
import {EditFill, ImageAdd, More} from "@/constants/link/icons";
import Button from "@/components/button";
import Textarea from "@/components/textarea";
import Image from "next/image";
import Item from "./component/Item";
import {IWorkShop} from "@/types/IWorkshop";
import {UpdateWorkshop} from "@/hook/AdminWorkshop/UpdateWorkshop";
import {getWorkShopAdmin} from "@/services/admin/adminWorkshop.service";
import {IImage} from "@/types/IImage";
import SelectCustom from "@/components/Select";
import {selectExpertiseItem} from "@/constants/data/SelectFormValues";

export default function Page({params}: {params: {id: string}}) {
	const [Element, setElement] = useState<IWorkShop | undefined>();
	const {id} = params;
	useEffect(() => {
		const fn = async () => {
			const results = await getWorkShopAdmin();
			setElement(results.find((item) => item.id === Number(id)));
		};
		fn();
	}, [id]);

	const {register, handleSubmit, onSubmit, handleReset, errors, handleInputFile} = UpdateWorkshop(Number(id));

	return (
		<form className="flex flex-row w-full h-full px-12" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col w-1/2">
				<div className="flex flex-col h-full justify-between">
					<div>
						<Item
							label="Name"
							name="name"
							defaultValue={Element?.title}
							register={register("name")}
							errorMessage={errors.name?.message}
						/>
						<div className="pt-2 flex flex-row">
							<div className="w-1/5 flex pt-4 opacity-60 font-bold">Know-how</div>
							<div className="w-4/5 gap-2">
								<SelectCustom
									options={selectExpertiseItem}
									className="input-bordered"
									defaultValue={Element?.category}
									register={register("category")}
									errorMessage={errors.category?.message}
								/>
							</div>
						</div>
						<div className="pt-2 flex flex-row">
							<div className="w-1/5 flex pt-4 opacity-60 font-bold">Description</div>
							<div className="w-4/5 gap-2">
								<Textarea
									className="h-48"
									placeholder="Description"
									name="desc"
									defaultValue={Element?.description}
									register={register("desc")}
									errorMessage={errors.desc?.message}
								/>
							</div>
						</div>
					</div>
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
			</div>
			<div className="flex justify-center w-14 pt-5 pl-5 ">
				<EditFill className="w-6 h-6 opacity-50" />
			</div>
			<div className="w-1/3 pl-7 flex flex-col gap-4">
				<div className="text-brown font-bold">Gallery</div>
				<div className="max-h-72 flex flex-row flex-wrap gap-4 overflow-y-scroll">
					{Element?.images.map((image: IImage, index) => (
						<div key={index} className="w-40 h-32 relative rounded-2xl">
							<Image src={`/image/api/v1${image.base_url}`} alt="image" fill className="rounded-2xl" />
							<div className="bg-bronze shrink-0 w-auto h-auto rounded-full absolute top-3 right-3 cursor-pointer">
								<More className="w-4 h-4 text-white" />
							</div>
						</div>
					))}
					<div
						className="w-40 h-32 gap-2 bg-white-40% rounded-2xl flex items-center input input-bordered flex-col justify-center cursor-pointer"
						onClick={() => {
							handleInputFile();
						}}>
						<input type="file" className="input-file-atelier" hidden />
						<div className="flex flex-col items-center justify-center">
							<ImageAdd className="w-9 h-9 opacity-50" />
							<div className="opacity-50">Add Pictures</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}
