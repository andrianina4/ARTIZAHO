import {ISuggestWorkshop} from "@/types/IWorkshop";
import {useState} from "react";

export function useAutocompletionNameWorkshop(ListWorkshop: ISuggestWorkshop[]) {
	// liste de base
	const [BaseValues, setBaseValues] = useState<ISuggestWorkshop[]>(ListWorkshop);
	// liste des suggestions
	const [SuggestedValues, setSuggestedValues] = useState<ISuggestWorkshop[] | undefined>();
	// control input artisan et gerer suggestions
	const [InputValue, setInput] = useState<string | undefined>("");
	// lorsqu'un element est selected
	const [SelectedValue, setSelectedValue] = useState<ISuggestWorkshop | undefined>();
	const handleSelectValue = (value: ISuggestWorkshop) => {
		setSelectedValue(value);
		setSuggestedValues(undefined);
		setInput(value.workshop_name);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
		setSelectedValue(undefined);
		if (e.target.value != "") {
			const filteredValues = BaseValues.filter((value) =>
				value.workshop_name?.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
			);
			setSuggestedValues(filteredValues);
		} else {
			setSuggestedValues(undefined);
		}
	};

	return {
		setBaseValues,
		SelectedValue,
		InputValue,
		handleChange,
		SuggestedValues,
		handleSelectValue,
	};
}
