import React from "react";
import {UseFormRegisterReturn} from "react-hook-form";
import {Danger} from "@/constants/link/icons";

type TextareaProps = {
	name?: string;
	placeholder: string;
	className?: string;
	register?: UseFormRegisterReturn;
	errorMessage?: any;
};

function Textarea(props: TextareaProps) {
	const {placeholder, className, name, register, errorMessage} = props;

	return (
		<div className="w-full flex flex-col">
			<textarea
				className={`bg-white-40% w-full mb-2 py-5 px-6 rounded-2xl textarea textarea-bordered textarea-md resize-none ${className}`}
				placeholder={placeholder}
				name={name}
				id={name}
				{...register}></textarea>
			{errorMessage?.message && (
				<div className="pl-2 flex items-center gap-1 text-xs text-red-600 opacity-80 font-bold">
					<Danger className="w-3 h-3" /> <div>{errorMessage?.message}</div>
				</div>
			)}
		</div>
	);
}

export default Textarea;
