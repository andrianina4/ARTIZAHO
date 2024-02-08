import Button from '@/components/button'
import Divider from '@/components/divider'
import { AddImage, ArrowLeft, EditFill, FlowerOne, Heart, Users } from '@/constants/link/icons'
import React from 'react'
import AboutCraftman from './component/Content/AboutCraftman';
import Avalaibility from './component/Content/Avalaibility';


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
			
			<div className="text-brown text-lg font-bold ml-12">
				<span>About the craftman</span>
			</div>
			<Divider />
			{/* <AboutCraftman/> */}
			<Avalaibility/>
		</div>
	);
}

export default Page;
