import Button from "@/components/button";
import Divider from "@/components/divider";
import {AddImage, ArrowLeft, EditFill, Heart, Users} from "@/constants/link/icons";
import React from "react";
import InputContainer from "./component/InputContainer";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import ProgressBar from "@/components/progress-bar";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import StarScore from "@/components/star-score";

type Props = {};

function Page(props: Props) {
	return (
		<div className="bg-white h-full rounded-3xl px-9 py-6">
			<div className="flex items-center gap-4">
				<Button
					content=""
					isBackButton
					leftIcon={<ArrowLeft />}
					className="!w-6 !h-6 !bg-transparent !text-brown font-bold "
				/>
				<span className="text-2xl font-semibold text-brown-80%">List of craftman</span>
			</div>
			<Divider />
			<div className="text-brown text-lg font-bold ml-12">
				<span>About the craftman</span>
			</div>
			<div className=" flex mx-12 my-6 gap-2">
				<div className="flex flex-col w-3/5">
					<div>
						<InputContainer title="Name">
							<Input placeholder="Name..." className="w-4/5 " />
							<button className="ml-6 text-gray-60% hover:bg-white-40% py-2 px-2 rounded-full text-2xl ">
								<EditFill />
							</button>
						</InputContainer>
						<InputContainer title="Know-how">
							<Input placeholder="Know-how..." className="w-4/5 " />
						</InputContainer>
						<InputContainer title="Description">
							<Textarea placeholder="Description..." className="!w-4/5 " />
						</InputContainer>
					</div>
					<div>
						<div className="text-brown text-lg font-bold ">
							<span>Workshop performance</span>
						</div>
						<div>
							<ProgressBar color="blue" leftIcon={<Heart />} text="Bouquet en vase" number={12} />
							<ProgressBar color="green" leftIcon={<Heart />} text="Bouquet en vase" number={12} />
							<ProgressBar color="bronze" leftIcon={<Heart />} text="Bouquet en vase" number={12} />
						</div>
					</div>
				</div>

				<div className="relative  rounded-3xl  w-2/5">
					<ProfileCard
						className="absolute left-1/2 transform -translate-x-1/2"
						icon={<AddImage />}
						classNameImage="bg-bronze text-white">
						<div className="flex justify-center bg-white  rounded-3xl w-48 h-10 ">
							<StarScore />
						</div>
						<div className="flex justify-center items-center gap-2 bg-white  rounded-3xl w-48 h-10  ">
							<span>
								<Users />
							</span>
							<span>Total Client</span>
							<span>15</span>
						</div>
					</ProfileCard>
				</div>
			</div>
		</div>
	);
}

export default Page;
