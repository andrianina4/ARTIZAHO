"use client";

import {EyeIcon, EyeOffIcon} from "@/constants/link/icons";
import React, {HTMLInputTypeAttribute, ReactNode, useState} from "react";
import {UseFormRegisterReturn} from "react-hook-form";

type InputProps = {
	placeholder: string;
	id?: string;
	label?: string;
	leftIcon?: ReactNode;
	type?: HTMLInputTypeAttribute;
	className?: string;
	register?: UseFormRegisterReturn;
	value?: string | number;
	readonly?: boolean;
};

function Input(props: InputProps) {
	const {
		label,
		id,
		placeholder,
		leftIcon,
		className,
		type = "text",
		register,
		value,
		readonly = false,
	} = props;
	const [definedType, setDefinedType] = useState<HTMLInputTypeAttribute>(type);
	const [showPassword, setShowPassword] = useState<boolean>(false);

	function toggleShowPassword() {
		const toggleDefinedType = !showPassword ? "text" : "password";
		setShowPassword((currentValue) => !currentValue);
		setDefinedType(toggleDefinedType);
	}

	return (
		<>
			{label && (
				<label htmlFor={id} className="text-black-default text-base">
					{label}
				</label>
			)}
			<div
				className={`bg-white-40% mt-1 mb-2 py-5 px-6 rounded-2xl flex items-center input input-bordered h-14 ${className}`}>
				{leftIcon ? <div className="text-brown text-xl mr-2">{leftIcon}</div> : null}
				<input
					id={id}
					type={definedType}
					placeholder={placeholder}
					// value={value}
					readOnly={readonly}
					{...register}
					className={`font-manrope text-sm outline-none bg-white-40% flex-1 text-black-60% w-full`}
				/>
				{type === "password" ? (
					<button className="text-xl" onClick={toggleShowPassword} type="button">
						{showPassword ? <EyeOffIcon /> : <EyeIcon />}
					</button>
				) : null}
			</div>
		</>
	);
}

export default Input;
