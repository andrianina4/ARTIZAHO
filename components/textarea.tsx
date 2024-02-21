import React from "react";
import {UseFormRegisterReturn} from "react-hook-form";

type TextareaProps = {
	placeholder: string;
	className?: string;
	register?: UseFormRegisterReturn;
};

function Textarea(props: TextareaProps) {
	const {placeholder, className, register} = props;

	return (
		<textarea
			className={`bg-white-40% w-full mt-2 py-5 px-6 rounded-2xl textarea textarea-bordered resize-none ${className}`}
			placeholder={placeholder}
			{...register}
		/>
	);
}

export default Textarea;
