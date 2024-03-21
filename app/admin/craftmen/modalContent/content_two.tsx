"use client";

import {Check, DateToday, TimeFill, UserAddFill} from "@/constants/link/icons";
import ModalItem from "../[id]/availability/components/modalItem";
import Button from "@/components/button";
import {useForm} from "react-hook-form";
import {FormDataTest, Schema} from "@/app/schema/testSchema";
import {useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import PopupHeader from "@/components/PopupHeader";
import {useSetAvailability} from "@/hook/AdminArtisan/useSetAvailability";
import {DateRange} from "react-date-range";

export default function Content_two({id, closePopup}: {id: number; closePopup: VoidFunction}) {
	const [show, setShow] = useState<Boolean>(false);
	const handleClick = () => setShow(!show);

	const {register, handleSubmit, onSubmit, handleReset, state, handleChange} = useSetAvailability(Number(id));

	return (
		<div className="flex flex-col w-full">
			<PopupHeader icon={<UserAddFill className="w-6 h-6" />} title="Set availability" />
			<div className="h-full flex flex-col justify-between">
				<div className="w-full flex flex-col gap-4">
					<div className="flex w-full gap-2">
						<ModalItem leftIcon={<DateToday className="w-5 h-5" />} text="Avalaibility date" className="w-1/2" />
						<ModalItem leftIcon={<TimeFill className="w-5 h-5" />} text="Hour" className="w-1/2" />
					</div>

					<div className="">
						{show ? (
							<div className="flex flex-row w-full gap-2">
								<DateRange
									className="w-full"
									onChange={handleChange}
									color="#ECA853"
									moveRangeOnFirstSelection={false}
									months={1}
									ranges={state}
									direction="horizontal"
								/>
								<div className="w-full flex flex-col">
									<form className="flex gap-2 justify-end items-center" onSubmit={handleSubmit(onSubmit)}>
										<div className="px-6 py-4 w-full h-fit flex justify-around items-center gap-2 bg-white-40% rounded-2xl">
											<label htmlFor="">From :</label>
											<input type="time" className=" bg-transparent text-sm outline-none" {...register("start")} />
											<label htmlFor="">To :</label>
											<input type="time" className="bg-transparent outline-none" {...register("end")} />
										</div>
										<Button leftIcon={<Check />} className="!h-10 !w-10 !rounded-2xl" type="submit" />
									</form>
								</div>
							</div>
						) : (
							<Button
								onClick={handleClick}
								content="Add date"
								className="bg-transparent hover:bg-white-40% !text-brown-80% font-bold"
							/>
						)}
					</div>
				</div>

				<div className="flex gap-4">
					<Button type="submit" content="Save" onClick={closePopup} />
					<button
						// ! onClick={handleReset}
						type="button"
						className="w-full py-3.5 px-4 text-sm rounded-2xl flex justify-center items-center bg-bronze bg-transparent text-black  hover:bg-bronze hover:bg-opacity-50 transition-all ease-linear duration-100">
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}
