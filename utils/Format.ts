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

export const formatToHMS = (date: Date | string) => {
	if (typeof date === "string") date = new Date(date);
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
	const startTime = new Date(`1970-01-01T${startTimeStr}`);
	const endTime = new Date(startTime.getTime() + durationSeconds * 1000);
	return endTime.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});
}

export function convertTime(timeString: string): string {
	const [hours, minutes, seconds] = timeString.split(":");

	// Convert hours to 12-hour format
	const newHours = Number(hours) % 12 || 12;

	// Set AM/PM indicator
	const amPm = Number(hours) >= 12 ? "PM" : "AM";

	// Format the output string (optional for seconds)
	return `${newHours.toString().padStart(2, "0")}:${minutes}:${seconds ? seconds : "00"} ${amPm}`;
}
