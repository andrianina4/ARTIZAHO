import Button from "@/components/button";
import Input from "@/components/input";
import {Date} from "@/constants/link/icons";
import React from "react";

export default function AddAtelierPopup({item}: {item: any}) {
	const formattedDate: string = new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
		// hour: "numeric",
		// minute: "numeric",
		// second: "numeric",
	}).format(item.date);

	// const {register, handleSubmit, reset} = useForm<FormAtelierData>();

	// const onSubmit: SubmitHandler<FormAtelierData> = (data) => {
	// 	console.log(data);
	// };

	return (
		<form /*onSubmit={handleSubmit(onSubmit)}*/ className="flex flex-col w-full">
			<div className="flex flex-row items-center opacity-60 gap-6 pb-8">
				<Date className="w-6 h-6" />
				<div className="text-2xl">{formattedDate}</div>
			</div>
			<div className="flex gap-10">
				<Input placeholder="Workshop name" className="grow" />
				<div className="flex flex-row items-center gap-8">
					<div className="opacity-75">Starting time</div>
					<div className="w-32 bg-white-40% justify-center rounded-2xl flex input input-bordered h-14">
						<input className="bg-white-40% text-sm w-auto opacity-50" type="time" />
					</div>
				</div>
			</div>
			<div className="flex gap-10 mt-8">
				<Button className="!w-[536px]" content="Add" type="submit" />
			</div>
		</form>
	);
}