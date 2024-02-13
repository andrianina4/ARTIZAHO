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
								<Input placeholder="Savoir-faire" />
								<Textarea placeholder="About the craftman " className="h-48" />
							</div>
							<div className=" flex flex-col w-1/2 items-center ">
								<ImageCustom
									img={Vase}
									icon={<AddImage />}
									styleIcon="bg-bronze text-white"
								/>
								<Input placeholder="Atelier" />
								<button className="text-sm hover:bg-white-40% hover:bg-opacity-60 py-4 px-10 rounded-2xl">
									+ Ajouter plus d'atelier
								</button>
							</div>
						</form>
						<div className="flex gap-8">
							<Button content="Annuler"/>
							<Button content="Suivant" onClick={onNext}/>
						</div>
					</div>
  )
}

export default Content_one