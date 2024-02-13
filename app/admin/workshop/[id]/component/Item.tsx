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
	readonly?: boolean;
	register?: UseFormRegisterReturn;
};

export default function Item({label, value, rightIcon, image, readonly, register}: ItemProps) {
	let styleBox = "w-4/5 gap-2";
	image ? (styleBox = styleBox + " font-bold") : null;
	return (
		<div className="flex flex-row">
			<div className="w-1/5 flex items-center opacity-60 font-bold">{label}</div>
			<div className={styleBox}>
				<Input placeholder={label} value={value} readonly={readonly} register={register} />
			</div>
		</div>
	);
}
