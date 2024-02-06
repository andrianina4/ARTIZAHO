import {colorBackground, colorText} from "@/types/IColor";
import { customWidth } from "@/types/IWidth";
import React, {ReactNode} from "react";

type ProgressBarProps = {
	leftIcon?: ReactNode;
	color: string;
	text: string;
	number?: number;
};

// NE PAS ENLEVER CE CODE SINON IL Y A BUG COLOR TAILWIND SUR TOUT LE SITE
//  const colorBackground: TColor = {
// 	bronze: "bg-bronze",
// 	blue: "bg-blue",
// 	green: "bg-green",
// };
//  const colorText: TColor = {
// 	bronze: "text-bronze",
// 	blue: "text-blue",
// 	green: "text-green",
// };
//  const customWidth: TWidth = {
// 	0: "w-[0%]",
// 	0.5: "w-[10%]",
// 	1: "w-[20%]",
// 	1.5: "w-[20%]",
// 	2: "w-[40%]",
// 	2.5: "w-[50%]",
// 	3: "w-[60%]",
// 	3.5: "w-[70%]",
// 	4: "w-[80%]",
// 	4.5: "w-[90%]",
// 	5: "w-[100%]",
// };

function ProgressBar(props: ProgressBarProps) {
	const {leftIcon, color, text, number} = props;

	const bg: string = colorBackground[color];
	const txt: string = colorText[color];
	const width: string = customWidth[number];

	const progressBarStyle = `absolute h-full ${width} ${bg} rounded-lg`;

	return (
		<div className="flex w-[400px] gap-2 relative my-6">
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
			<div className=" absolute -top-2 right-0  font-bold">5</div>
		</div>
	);
}

export default ProgressBar;
