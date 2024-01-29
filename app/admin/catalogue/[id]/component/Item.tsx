import Input from "@/components/input";
import {EditFill} from "@/constants/link/icons";
import {register} from "module";
import React, {ReactNode} from "react";
import {UseFormRegisterReturn} from "react-hook-form";

type ItemProps = {
	label: string;
	value: string | number;
	rightIcon?: ReactNode;
	image?: string;
	desc?: boolean;
	readonly?: boolean;
	register?: UseFormRegisterReturn;
};

export default function Item({
	label,
	value,
	rightIcon,
	image,
	desc = false,
	readonly,
	register,
}: ItemProps) {
	let styleBox = "w-4/5 gap-2";
	image ? (styleBox = styleBox + " font-bold") : null;
	desc ? (styleBox = styleBox + " h-auto p-5") : (styleBox = styleBox + " h-16");
	return (
		<div className="flex flex-row">
			<div className="w-1/5 flex items-center opacity-60 font-bold">{label}</div>
			<div className={styleBox}>
				<Input placeholder={label} value={value} readonly={readonly} register={register} />
			</div>
			<div className="flex items-center justify-center w-14 opacity-5 hover:opacity-50 cursor-pointer">
				<EditFill className="w-6 h-6 ml-6" />
			</div>
		</div>
	);
}
