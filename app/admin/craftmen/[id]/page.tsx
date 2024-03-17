'use client'

import Button from '@/components/button'
import Divider from '@/components/divider'
import { AddImage, ArrowLeft, EditFill, FlowerOne, Heart, Users } from '@/constants/link/icons'
import React, { useState } from 'react'
import AboutCraftman from './component/Content/AboutCraftman';
import Avalaibility from './component/Content/Avalaibility';


type Props = {};

function Page(props: Props) {

	const[content, setContent]=useState(1)
	const switchContent = () => {
		setContent(content === 1 ? 2 : 1);
	};

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
			
			<div className="flex ">
			{content == 1 ? (
					<span className="text-brown bg-white py-2 px-3 rounded-md cursor-default">About</span>
				) : (
					<span className="opacity-50 py-2 px-3 cursor-pointer" onClick={switchContent}>
						About
					</span>
				)}
				{content == 2 ? (
					<span className="text-brown bg-white py-2 px-3 rounded-md cursor-default">Avalaibility</span>
				) : (
					<span className="opacity-50 py-2 px-3 cursor-pointer" onClick={switchContent}>
						Avalaibility
					</span>
				)}
			</div>
			<Divider />
			{content===1 && <AboutCraftman/> }
			{content===2 && <Avalaibility/> }
		</div>
	);
}

export default Page;
