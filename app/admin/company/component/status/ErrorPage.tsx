import {Refresh} from "@/constants/link/icons";
import React from "react";

export default function ErrorPage({refresh}: {refresh: () => void}) {
	return (
		<div className="w-full h-full grow flex justify-center items-center gap-1 opacity-60">
			<div>An error seems to have occurred</div>
			<Refresh className="cursor-pointer" onClick={refresh} />
		</div>
	);
}
