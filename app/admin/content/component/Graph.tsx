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

// plugin chartJS
const bgWhite = {
	id: "bgWhite",
	beforeDatasetsDraw(chart: any, args: any, plugins: any) {
		const {
			ctx,
			chartArea: {top, bottom, left, right, width, height},
		} = chart;
		ctx.save();
		ctx.fillstyle = "rgb(255,255,255)";
		ctx.fillRect(left, top, width, height);
	},
};

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
	scales: {
		x: {
			beginAtZero: false,
			grid: {
				display: false,
				drawOnChartArea: false,
				drawBorder: false,
			},
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

const labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export const data = {
	labels,
	datasets: [
		{
			label: "Company",
			data: [50, 15, 26, 33, 45, 41, 21, 49, 39, 42, 19, 27],
			backgroundColor: "#917155",
			borderRadius: 14,
		},
		{
			label: "Individuals",
			data: [46, 49, 24, 36, 37, 15, 22, 34, 14, 26, 41, 44],
			backgroundColor: "#D7B697",
			borderRadius: 14,
		},
	],
};

export default function Graph() {
	return <Bar options={options} data={data} />;
}
