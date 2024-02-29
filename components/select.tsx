import {ISelect} from "@/types/IField";
import React, {ChangeEventHandler} from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type SelectProps = {
	values: Array<ISelect>;
	value?: string;
	className?: String;
	onChange?: ChangeEventHandler;
	register?: UseFormRegisterReturn
};

function Select(props: SelectProps) {
	const {values, value, className, onChange} = props;

	return (
		<select
			value={value}
			onChange={onChange}
			className={`select bg-white-40%  rounded-2xl h-14 font-manrope text-sm text-black-60%  w-full ${className}`}>
			{values.map((item, index) => {
				const {label, value} = item;
				return (
					<option key={index} value={value}>
						{label}
					</option>
				);
			})}
		</select>
	);
}

export default Select;
