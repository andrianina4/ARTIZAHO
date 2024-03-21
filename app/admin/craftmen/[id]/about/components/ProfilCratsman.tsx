import StarScore from "@/components/star-score";
import {AddImage, People, Person} from "@/constants/link/icons";
import {getImgUrl} from "@/services/index.service";
import {ICraftman} from "@/types/ICraftman";
import Image from "next/image";
import React from "react";

export default function ProfilCratsman({data}: {data: ICraftman}) {
	return (
		<div className="flex flex-col w-80 bg-white-40% items-center gap-4 rounded-3xl pt-5 pb-14">
			<div className="flex flex-col items-center gap-4">
				<div className="flex justify-center pt-5 w-96">
					<input type="file" id="input-file-company" hidden />
					<div className="flex items-center justify-center p-5 w-40 h-40 rounded-full relative bg-[#D9D9D9]">
						{data?.images.length > 0 ? (
							<Image src={getImgUrl(data.images)} alt="image" fill className="rounded-full" />
						) : (
							<>
								<Person className="w-full h-full text-gray-400" />
							</>
						)}
						<div
							className="flex items-center justify-center p-2 bg-bronze text-white rounded-full absolute bottom-0 right-0 cursor-pointer"
							// ! onClick={handleInputFile}
						>
							<AddImage className="w-6 h-6" />
						</div>
					</div>
				</div>
				{/* NOM ET KNOW-HOW */}
				<span className="text-lg font-bold">{data.name}</span>
				<span className="text-lg font-bold opacity-60">{data.expertise}</span>
				{/* STAR */}
				<div className="flex justify-center bg-white  rounded-3xl w-48 h-10 ">
					<StarScore />
				</div>
				<div className="flex justify-center items-center gap-2 bg-white  rounded-3xl w-48 h-10  ">
					<span>
						<People className="w-5 h-5 opacity-80" />
					</span>
					<span>Total Client</span>
					<span className="font-bold">20</span>
				</div>
			</div>
		</div>
	);
}
