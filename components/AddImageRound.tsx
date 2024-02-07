import {AddImage, Business} from "@/constants/link/icons";
import React, {ReactNode} from "react";

export default function AddImageRound({bgIcon}: {bgIcon: ReactNode}) {
	return (
		<div className="flex justify-center pt-5 w-96">
			<div className="flex items-center justify-center p-5 w-40 h-40 rounded-full shadow-2xl relative bg-[#D9D9D9]">
				{bgIcon}
				<div className="flex items-center justify-center p-2 bg-bronze text-white rounded-full absolute bottom-0 right-0">
					<AddImage className="w-6 h-6" />
				</div>
			</div>
		</div>
	);
}
