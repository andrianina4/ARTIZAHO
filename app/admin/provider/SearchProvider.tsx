"use client";

import React, {Context, createContext, useState} from "react";

type SearchContextType = {
	Value: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchContext: Context<any> = createContext<SearchContextType>({
	Value: "",
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export default function SearchProvider({children}: {children: React.ReactNode}) {
	const [Value, setValue] = useState<string>("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	// value
	const value: SearchContextType = {
		Value: Value,
		handleChange: handleChange,
	};
	return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
