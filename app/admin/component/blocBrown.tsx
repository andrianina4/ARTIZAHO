import React, {ReactNode} from "react";

type BlocBrownProps = {
	icon: ReactNode;
	textTop: string;
	textBottom: string;
};

function BlocBrown(props: BlocBrownProps) {
	const {icon, textTop, textBottom} = props;

	return (
		<div className="flex flex-row bg-gradient-to-t from-brown to-brown-60% w-full h-auto gap-7 rounded-3xl p-5 ">
			<div>
				<p className="text-white-40%">{textTop}</p>
				<p className=" text-white font-bold text-2xl">{textBottom}</p>
			</div>
			<div className=" w-14 h-14 flex justify-center items-center   ">
				{/* <p className="text-6xl ">{icon}</p> */}
			</div>
		</div>
	);
}

export default BlocBrown;
