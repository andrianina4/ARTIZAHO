import {ISuggestCraftman} from "@/types/ICraftman";
import React, {useState} from "react";

export function useAutocompletionForCraftsman(ListCraftsmen: ISuggestCraftman[]) {
	// liste des artisans de base
	const [BaseCraftsmen, setBaseCraftsman] = useState<ISuggestCraftman[]>(ListCraftsmen);
	// liste des artisans suggerer
	const [SuggestedCraftsmen, setSuggestedCraftsmen] = useState<ISuggestCraftman[] | undefined>();
	// control input artisan et gerer suggestions
	const [InputCraftsman, setInputCraftsman] = useState<string | undefined>("");
	const handleChangeCraftsman = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputCraftsman(e.target.value);
		if (e.target.value != "") {
			const filteredCraftman = BaseCraftsmen.filter((craftsman) =>
				craftsman.craftsman_name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
			);
			setSuggestedCraftsmen(filteredCraftman);
		} else {
			setSuggestedCraftsmen(undefined);
		}
	};
	// lorsqu'un artisqn est selected
	const [SelectedCraftsman, setSelectedCraftsman] = useState<ISuggestCraftman | undefined>();
	const handleSelectCraftsman = (craftsman: ISuggestCraftman) => {
		setSelectedCraftsman(craftsman);
		setSuggestedCraftsmen(undefined);
		setInputCraftsman("");
	};
	const handleChangeResetCraftsman = () => {
		setSelectedCraftsman(undefined);
		setInputCraftsman("");
	};
	return {
		SelectedCraftsman,
		handleChangeResetCraftsman,
		InputCraftsman,
		handleChangeCraftsman,
		SuggestedCraftsmen,
		handleSelectCraftsman,
	};
}
