import React, {ReactNode} from "react";

export default function PopupHeader({icon, title}: {icon: ReactNode; title: string}) {
	return (
		<div className="flex flex-row items-center text-bronze gap-6 pb-6">
			<div className="">{icon}</div>
			<div className="text-2xl font-bold">{title}</div>
		</div>
	);
}
