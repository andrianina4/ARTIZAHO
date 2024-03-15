import {ICraftman} from "@/types/ICraftman";
import React, {useState} from "react";

export function useAutocompletionForCraftsman(ListCraftsmen: ICraftman[]) {
	// liste des artisans de base
	const [BaseCraftsmen, setBaseCraftsman] = useState<ICraftman[]>(ListCraftsmen);
	// liste des artisans suggerer
	const [SuggestedCraftsmen, setSuggestedCraftsmen] = useState<ICraftman[] | undefined>();
	// control input artisan et gerer suggestions
	const [InputCraftsman, setInputCraftsman] = useState<string | undefined>("");
	const handleChangeCraftsman = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputCraftsman(e.target.value);
		if (e.target.value != "") {
			console.log(BaseCraftsmen[0]);
			const filteredCraftman = BaseCraftsmen.filter((craftsman) =>
				craftsman?.name?.toLowerCase().includes(e.target.value.toLocaleLowerCase())
			);
			setSuggestedCraftsmen(filteredCraftman);
		} else {
			setSuggestedCraftsmen(undefined);
		}
	};
	// lorsqu'un artisqn est selected
	const [SelectedCraftsman, setSelectedCraftsman] = useState<ICraftman | undefined>();
	const handleSelectCraftsman = (craftsman: ICraftman) => {
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
