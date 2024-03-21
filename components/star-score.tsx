"use client";
import {Star} from "@/constants/link/icons";
import React, {useState} from "react";

type Props = {};

function StarScore({}: Props) {
	const [rating, setRating] = useState<number>(3.5);

	const handleChangeRating = (newRating: number) => {
		setRating(newRating);
	};

	return (
		<div className="flex items-center gap-6">
			<div className="rating rating-half rating-sm   ">
				{[...Array(10)].map((_, index) => {
					const halfclass = (index % 2) + 1;
					return (
						<input
							key={index}
							type="radio"
							name="rating"
							className={`bg-yellow mask mask-star-2 ${index % 2 === 0 ? "mask-half-1" : "mask-half-2"}`}
							checked={index + 1 === rating * 2}
							readOnly
							// onChange={() => handleChangeRating(4)}
						/>
					);
				})}
			</div>
			<div className="text-gray-60%">{rating}/5</div>
		</div>
	);
}

export default StarScore;
