import {AddImage} from "@/constants/link/icons";
import Image from "next/image";
import React, {ReactNode} from "react";

export default function AddImageRound({
	bgIcon,
	ImagetoShow,
	handleInputFile,
	handleFileChange,
}: {
	bgIcon: ReactNode;
	ImagetoShow: any;
	handleInputFile: () => void;
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<div className="flex justify-center pt-5 w-96">
			<input
				type="file"
				id="input-file-company"
				hidden
				onChange={(e) => {
					handleFileChange(e);
				}}
			/>
			<div className="flex items-center justify-center p-5 w-40 h-40 rounded-full shadow-2xl relative bg-[#D9D9D9]">
				{ImagetoShow ? (
					<Image src={ImagetoShow} alt="image" fill className="rounded-full" />
				) : (
					<>{bgIcon}</>
				)}
				<div
					className="flex items-center justify-center p-2 bg-bronze text-white rounded-full absolute bottom-0 right-0 cursor-pointer"
					onClick={handleInputFile}>
					<AddImage className="w-6 h-6" />
				</div>
			</div>
		</div>
	);
}
