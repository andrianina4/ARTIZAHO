import {colorBackground, colorText} from "@/types/IColor";
import { customWidth } from "@/types/IWidth";
import React, {ReactNode} from "react";

type ProgressBarProps = {
	leftIcon?: ReactNode;
	color: string;
	text: string;
	number: number;
};

function ProgressBar(props: ProgressBarProps) {
	const {leftIcon, color, text, number} = props;

	const bg: string = colorBackground[color];
	const txt: string = colorText[color];
	const width: string = customWidth[number];

	const progressBarStyle = `absolute h-full ${width} ${bg} rounded-lg`;

	return (
		<div className="flex w-[400px] gap-2 relative my-6  ">
			<div
				className={`w-[40px] h-[40px] ${txt} ${bg} bg-opacity-30 flex justify-center items-center rounded-lg`}>
				{leftIcon}
			</div>
			<div className="flex flex-col justify-between w-4/5">
				<div className="relative bg-white-10% h-[10px] w-full rounded-lg">
					<div className={progressBarStyle}></div>
				</div>
				<p className="text-sm font-semibold text-gray-60% ">{text} </p>
			</div>
			<div className=" absolute -top-2 right-0 font-bold">{number}</div>
		</div>
	);
}

export default ProgressBar;
