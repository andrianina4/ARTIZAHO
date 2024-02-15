import { Check, Date } from "@/constants/link/icons"
import ModalItem from "../component/modalItem"
import { UserAdd } from "@/constants/link/icons"
import Calendar from "../../catalogue/component/Calendar"
import FullCalendar from "@fullcalendar/react"
import CraftmanCalendar from "../component/calendar"
import Input from "@/components/input"
import Button from "@/components/button"
import * as yup from 'yup';
import { useForm } from "react-hook-form"
import { FormDataTest } from "@/app/schema/testSchema"
import { useState } from "react"


type props={
    onPrevious: VoidFunction
}

function Content_two({onPrevious}:props) {
    const [dateClicked, setDateClicked]= useState('')
    const handleClickDate =(info:any)=>{
        console.log('Date cliquée :', info.dateStr);
        setDateClicked(info.dateStr)
    }

    const onSubmit = (data: any) => {
        console.log(data); // Vous pouvez soumettre les données ici
      };

    const{register, handleSubmit} =useForm<FormDataTest>({mode : 'onChange'})
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center text-bronze text-2xl font-semibold gap-4 ">
				<span>
					<UserAdd />
				</span>
				New craftman
			</div>

            <div className="flex w-full gap-2">
                <ModalItem leftIcon={<Date/>} text="Avalaibility date"className="w-1/2"/> 
                <ModalItem leftIcon={<Date/>} text="Hour" className="w-1/2"/> 
            </div>
           <form action="">
           <div className="flex h-full gap-2">
                <CraftmanCalendar handleclickDate={handleClickDate} className="w-3/5 bg-white-40% !px-4 rounded-xl !pb-8" />
                <form onSubmit={handleSubmit} className=" flex w-2/5 gap-2 h-fit items-center">
                    <div className="flex w-full items-center gap-2 bg-white-40% rounded-2xl px-2">
                        <label htmlFor="">De:</label>
                        <input
                            type="time"
                            className="bg-transparent text-sm w-full  h-[70px] rounded-2xl "
                        {...register('start')}
                        />
                        <label htmlFor="">Au:</label>
                        <input
                        type="time"
                        className="bg-transparent text-sm w-full  h-[70px] rounded-2xl"
                        {...register('end')}
                        />
                         {/* <input type="hidden" {...register('dateClicked')} value={dateClicked} /> */}
                    </div>
                    <Button leftIcon={<Check/>} className="!h-10 !w-10 !rounded-2xl"/>
                </form>
            </div>
            <div className="flex gap-4">
                <Button content="Cancel"/>
                <Button content="Previous " onClick={onPrevious}/>
                <Button type="submit" content="Save" />
            </div>
           </form>
        </div>
    )
  }
  
  export default Content_two