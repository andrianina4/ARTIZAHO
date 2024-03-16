export const formatToDMY = (date: Date | string) => {
	if (typeof date === "string") date = new Date(date);
	return new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
		// hour: "numeric",
		// minute: "numeric",
		// second: "numeric",
	}).format(date);
};

export const formatToHMS = (date: Date) => {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	}).format(date);
};

export const formatFull = (date: Date) => {
	return new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	}).format(date);
};

export const formatNumber = (number: number): string => {
	return number.toString().padStart(3, "0");
};

export function getEndTime(startTimeStr: string, durationSeconds: number): string {
	// Parse the start time string into a Date object
	const startTime = new Date(`1970-01-01T${startTimeStr}:00Z`);

	// Create a timespan object representing the duration
	const endTime = new Date(startTime.getTime() + durationSeconds * 1000);

	// Format the end time as "HH:MM:SS"
	return endTime.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});
}
