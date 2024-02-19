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
import Divider from "@/components/divider";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.defaults.elements.bar.borderWidth = 2;

// Data for graph
const labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const data = {
	labels,
	datasets: [
		{
			label: "Individual",
			data: [46, 49, 24, 36, 37, 15, 22, 34, 14, 26, 41, 44],
			backgroundColor: "#A4886ECC",
			borderWidth: 3,
			borderColor: "#fff",
			borderRadius: 14,
			barThickness: 18,
		},
		{
			label: "Company",
			data: [50, 15, 26, 33, 45, 41, 21, 49, 39, 42, 19, 27],
			backgroundColor: "#FBAA45CC",
			borderWidth: 3,
			borderColor: "#fff",
			borderRadius: 14,
			barThickness: 18,
		},
	],
};
const options = {
	responsive: true,
	aspectRatio: 3,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
	scales: {
		x: {
			beginAtZero: false,
			grid: {
				display: false,
				drawOnChartArea: false,
				drawBorder: false,
			},
			ticks: {padding: 0},
		},
		y: {
			beginAtZero: false,
			grid: {
				display: false,
				drawOnChartArea: false,
				drawBorder: false,
			},
		},
	},
};
const legend = [
	{
		titre: "Individual",
		color: "bg-[#A4886ECC]",
	},
	{
		titre: "Company",
		color: "bg-[#FBAA45CC]",
	},
];

export default function Graph() {
	return (
		<div className="w-full flex flex-col ">
			<div className="flex justify-between items-center px-3">
				<div className="font-bold">Annual change in bookings</div>
				<div className="flex gap-8">
					{legend.map((item, index) => (
						<div key={index} className="flex items-center gap-2">
							<div className={`${item.color} w-2 h-2 rounded-full`}></div>
							{item.titre}
						</div>
					))}
				</div>
			</div>
			<Divider />
			<Bar options={options} data={data} />
		</div>
	);
}
