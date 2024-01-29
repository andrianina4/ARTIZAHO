import Input from "@/components/input";
import {SearchIcon} from "@/constants/link/icons";
import React from "react";

type HeaderProps = {
	BigTitle: string;
	LittleTitle: string;
};

function Header(props: HeaderProps) {
	const {BigTitle, LittleTitle} = props;

	return (
		<div className="flex flex-row justify-between items-center">
			<div>
				<p className="text-brown text-2xl font-bold ">{BigTitle}</p>
				<p className="text-sm opacity-60">{LittleTitle}</p>
			</div>
			<div className="w-1/3">
				<Input leftIcon={<SearchIcon />} type="text" placeholder="Search" />
			</div>
		</div>
	);
}

export default Header;
