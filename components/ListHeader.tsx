import React from "react";

type Tprop = {id: number; name: string; label: string};

export default function ListHeader({
	headerList,
	gridStyle,
}: {
	headerList: Tprop[];
	gridStyle: string;
}) {
	return (
		<>
			<div className={`grid ${gridStyle}`}>
				{headerList.map((item) => {
					return (
						<span className="text-gray-60% font-bold text-sm" key={item.id}>
							{item.label}
						</span>
					);
				})}
			</div>
		</>
	);
}
