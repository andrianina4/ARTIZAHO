import {PermissionIcon} from "@/constants/link/icons";
import React from "react";

export default function TeamForm() {
	return (
		<div className="flex flex-col w-full">
			<div className="flex flex-row items-center text-bronze gap-6 pb-8">
				<div className="">
					<PermissionIcon className="w-6 h-6" />
				</div>
				<div className="text-2xl">Permissions</div>
				<div className="text-2xl">You can quickly add or remove authorisations to your role.</div>
			</div>
			<div></div>
		</div>
	);
}
