import React, {Children, ReactNode} from "react";
import Image, {StaticImageData} from "next/image";
import ImageCustom from "@/components/imageCustom";

type CCProps = {
	children?: ReactNode;
	className?: string;
	icon?: ReactNode;
	styleIcon?: string;
	styleImage?: string;
	img: string | StaticImageData;
	name: string;
	id?: number;
};

export default function CompanyCard(props: CCProps) {
	const {children, className, icon, styleIcon, styleImage, img, name, id} = props;

	return (
		<div
			className={` flex flex-col w-80 bg-white-40% items-center gap-4 rounded-3xl pt-5 pb-14 ${className}`}>
			<div className="flex flex-col items-center">
				<ImageCustom icon={icon} styleIcon={styleIcon} className={styleImage} img={img} />
				<span className="text-lg font-bold">{name}</span>
				{id && <span className="text-lg font-bold opacity-50">#safeId{id.toString()}</span>}
			</div>
			<div className="flex flex-col items-center gap-2">{children}</div>
		</div>
	);
}
