import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import {Bar} from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.defaults.elements.bar.borderWidth = 2;

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Number of bookings",
		},
	},
};

const labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export const data = {
	labels,
	datasets: [
		{
			label: "Company",
			data: [65, 59, 80, 81, 56, 55, 40, 54, 26, 84, 21, 62],
			backgroundColor: "#ECA853",
			borderRadius: 14,
		},
		{
			label: "Individuals",
			data: [65, 59, 80, 81, 56, 55, 40, 54, 26, 84, 21, 62],
			backgroundColor: "#70A6E8",
			borderRadius: 14,
		},
	],
};

export default function Graph() {
	return <Bar options={options} data={data} />;
}
