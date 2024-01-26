"use client";

import AdminDashboard from "./content/AdminDashboard";
import EntrepriseDashboard from "./content/EntrepriseDashboard";
import {useState} from "react";

export default function Page() {
	const [isAdminDash, setDash] = useState(false);

	return isAdminDash ? <AdminDashboard /> : <EntrepriseDashboard />;
}
