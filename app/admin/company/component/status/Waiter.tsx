import {Refresh} from "@/constants/link/icons";
import React from "react";

export default function Waiter() {
	return (
		<div className="flex flex-col">
			<div className="h-14 pl-4 my-1 bg-white grid grid-cols-custom-3 items-center">
				<div className="flex items-center gap-2">
					<div className="skeleton w-[30px] h-[30px] rounded-full"></div>
					<p className="skeleton w-4/5 h-5"></p>
				</div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="w-4/5 h-5"></div>
			</div>
			<div className="h-14 pl-4 my-1 bg-white grid grid-cols-custom-3 items-center">
				<div className="flex items-center gap-2">
					<div className="skeleton w-[30px] h-[30px] rounded-full"></div>
					<p className="skeleton w-4/5 h-5"></p>
				</div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="w-4/5 h-5"></div>
			</div>
			<div className="h-14 pl-4 my-1 bg-white grid grid-cols-custom-3 items-center">
				<div className="flex items-center gap-2">
					<div className="skeleton w-[30px] h-[30px] rounded-full"></div>
					<p className="skeleton w-4/5 h-5"></p>
				</div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="skeleton w-4/5 h-5"></div>
				<div className="w-4/5 h-5"></div>
			</div>
		</div>
	);
}
