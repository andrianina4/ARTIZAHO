"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {ImageAdd, Toolbox} from "@/constants/link/icons";
import Image from "next/image";
import PopupHeader from "@/components/PopupHeader";
import {AddWorkshop} from "@/hook/AdminWorkshop/AddWorkshop";
import SelectCustom from "@/components/Select";
import {selectExpertiseItem} from "@/constants/data/SelectFormValues";

export default function FormWorkshop({onClick}: {onClick: VoidFunction}) {
	const {register, handleSubmit, onSubmit, errors, imagePreview, handleInputFile, handleFileChange} =
		AddWorkshop(onClick);

	return (
		<div className="flex flex-col">
			<PopupHeader icon={<Toolbox className="w-6 h-6" />} title="New Workshop" />
			<form className="flex flex-row w-full gap-2 h-full" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col justify-between w-96 ">
					<div>
						{/* INPUT NAME */}
						<Input name="name" type="text" placeholder="Name" register={register("name")} errorMessage={errors.name} />
						{/* INPUT CATEGORY */}
						<SelectCustom
							options={selectExpertiseItem}
							className="input-bordered mt-2"
							register={register("know_how")}
							errorMessage={errors.know_how}
						/>
						{/* INPUT DESCRIPTION */}
						<Textarea
							className="!mt-2 h-full"
							name="desc"
							placeholder="Workshop description"
							register={register("desc")}
							errorMessage={errors.desc}
						/>
					</div>
					<Button content="Add" type="submit" />
				</div>
				<div className="ml-14 flex flex-col w-96 gap-4">
					<div className="text-base text-bronze font-bold">Galery</div>
					{/* INPUT IMAGES */}
					<div className={`max-h-72 overflow-y-scroll flex flex-row flex-wrap gap-2`}>
						{imagePreview.map((item, index) => (
							<div key={index} className="w-40 h-32 relative rounded-2xl">
								<Image src={item} alt="Image" fill className="rounded-2xl" />
							</div>
						))}
						<div
							className="w-40 h-32 gap-2 bg-white-40% rounded-2xl flex items-center input input-bordered flex-col justify-center cursor-pointer"
							onClick={() => {
								handleInputFile();
							}}>
							<div className="flex flex-col items-center justify-center">
								<ImageAdd className="w-9 h-9 opacity-50" />
								<div className="opacity-50">Add Pictures</div>
							</div>
							<input
								type="file"
								id="input-file-atelier"
								multiple
								hidden
								onChange={(e) => {
									handleFileChange(e);
								}}
							/>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
