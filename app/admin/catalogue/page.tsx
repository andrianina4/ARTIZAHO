"use client";

import React from "react";
import Calendar from "@/app/admin/catalogue/component/Calendar";
import Button from "@/components/button";

export default function Page() {
	return (
		<div className="flex flex-row">
			<div className="">
				<Button content="AJOUTER" className="absolute top-1 w-min right-1" />
			</div>
			<Calendar />
		</div>
	);
}
