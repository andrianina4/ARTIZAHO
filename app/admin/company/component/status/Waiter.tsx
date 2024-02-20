import {Refresh} from "@/constants/link/icons";
import React from "react";

export default function Waiter() {
	return (
		<div className="w-full h-full grow flex justify-center items-center opacity-60">
			<div>An error has occurred</div>
			<Refresh />
		</div>
	);
}
