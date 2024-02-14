import {Duration, Time} from "@/constants/link/icons";
import React from "react";

type Tprops = {
	duration: string | undefined;
	time: string | undefined;
};

export default function NotifItemDuration({duration, time}: Tprops) {
	return (
		<div className="flex gap-16">
			<div className="flex gap-4 items-center">
				<Time className="w-7 h-7 text-brown" />
				<div className="font-bold">Time</div>
				<div>{time}</div>
			</div>
			<div className="flex gap-4 items-center">
				<Duration className="w-7 h-7 text-brown" />
				<div className="font-bold">Duration</div>
				<div>{duration}</div>
			</div>
		</div>
	);
}
