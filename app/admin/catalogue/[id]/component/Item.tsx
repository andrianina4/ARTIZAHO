import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {EditFill} from "@/constants/link/icons";
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
	return (
		<div className="flex flex-row">
			<div className="w-1/5 flex items-center opacity-60 font-bold">{label}</div>
			<div className={styleBox}>
				{desc ? (
					<Textarea placeholder={label} />
				) : (
					<Input placeholder={label} value={value} readonly={readonly} register={register} />
				)}
			</div>
			<div className="flex items-center justify-center w-14 opacity-5 hover:opacity-50 cursor-pointer">
				<EditFill className="w-6 h-6 ml-6" />
			</div>
		</div>
	);
}
