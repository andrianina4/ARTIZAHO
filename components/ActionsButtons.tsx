import {CheckMaterial, Close} from "@/constants/link/icons";
import React, {MouseEventHandler} from "react";

export default function ActionsButtons({
	onAccept,
	onDeny,
}: {
	onAccept?: MouseEventHandler<HTMLDivElement>;
	onDeny?: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<>
			<div>
				<div
					className="flex p-1 bg-[#19D67B] bg-opacity-50 text-white rounded-xl cursor-pointer"
					onClick={onDeny}>
					<CheckMaterial className="w-7 h-7" />
				</div>
			</div>
			<div>
				<div
					className="flex p-1 bg-[#E33629] bg-opacity-50 text-white rounded-xl cursor-pointer"
					onClick={onAccept}>
					<Close className="w-7 h-7" />
				</div>
			</div>
		</>
	);
}
