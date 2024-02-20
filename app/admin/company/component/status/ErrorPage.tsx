import {Refresh} from "@/constants/link/icons";
import React from "react";

export default function ErrorPage({refresh}: {refresh: () => void}) {
	return (
		<div className="w-full h-full grow flex justify-center items-center gap-1 opacity-60" onClick={refresh}>
			<div>An error has occurred</div>
			<Refresh />
		</div>
	);
}
