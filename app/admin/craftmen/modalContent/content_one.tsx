import React from 'react'
import {AddImage, CalendarIcon, UserAdd, UserAddFill} from "@/constants/link/icons";
import Input from '@/components/input';
import Textarea from '@/components/textarea';
import ImageCustom from '@/components/imageCustom';
import { Vase } from '@/constants/link/images';
import Button from '@/components/button';

type props={
    onNext: VoidFunction
}


function Content_one({onNext}: props) {
  return (
    <div className=" flex flex-col  justify-between w-full">
						<div className="flex items-center text-bronze text-2xl font-semibold gap-4 ">
							<span>
								<UserAdd />
							</span>
							New craftman
						</div>

						<form className="flex w-full gap-4" >
							<div className="w-1/2">
								<Input placeholder="Name" />
								<Input placeholder="Know-how" />
								<Textarea placeholder="About the craftman " className="h-48" />
							</div>
							<div className=" flex flex-col w-1/2 items-center ">
								<ImageCustom
									img={Vase}
									icon={<AddImage />}
									styleIcon="bg-bronze text-white"
								/>
								
							</div>
						</form>
						<div className="flex gap-8">
							<Button content="Cancel"/>
							<Button content="Next" onClick={onNext}/>
						</div>
					</div>
  )
}

export default Content_one