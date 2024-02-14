export const formatToDMY = (date: Date) => {
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
