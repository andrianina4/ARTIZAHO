import Input from "@/components/input";
import {error} from "console";
import React, {ReactNode} from "react";
import {UseFormRegisterReturn} from "react-hook-form";

type ItemProps = {
	label: string;
	name: string;
	defaultValue?: string | number;
	register?: UseFormRegisterReturn;
	errorMessage?: any;
};

export default function Item({label, name, defaultValue, register, errorMessage}: ItemProps) {
	let styleBox = "w-4/5 gap-2";
	// image ? (styleBox = styleBox + " font-bold") : null;
	return (
		<div className="flex flex-row">
			<div className="w-1/5 flex items-center opacity-60 font-bold">{label}</div>
			<div className={styleBox}>
				<Input
					name={name}
					placeholder={label}
					defaultValue={defaultValue}
					register={register}
					errorMessage={errorMessage}
				/>
			</div>
		</div>
	);
}
