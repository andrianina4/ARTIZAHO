import { Check, Date } from "@/constants/link/icons"
import ModalItem from "../component/modalItem"
import { UserAdd } from "@/constants/link/icons"
import Calendar from "../../catalogue/component/Calendar"
import FullCalendar from "@fullcalendar/react"
import CraftmanCalendar from "../component/calendar"
import Input from "@/components/input"
import Button from "@/components/button"

type props={
    onPrevious: VoidFunction
}

function Content_two({onPrevious}:props) {
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
            <div className="flex h-full gap-2">
                <CraftmanCalendar className="w-3/5 bg-white-40% !px-4 rounded-xl !pb-8" />
                <div className=" flex w-2/5 gap-2 h-fit items-center">
                    <div className="flex w-full items-center gap-2 bg-white-40% rounded-2xl px-2">
                        <label htmlFor="">De:</label>
                        <input
                            type="time"
                            className="bg-transparent text-sm w-full  h-[70px] rounded-2xl "
                        />
                        <label htmlFor="">Au:</label>
                        <input
                        type="time"
                        className="bg-transparent text-sm w-full  h-[70px] rounded-2xl"
                        />
                    </div>
                    <Button leftIcon={<Check/>} className="!h-10 !w-10 !rounded-2xl"/>
                </div>
            </div>
            <div className="flex gap-4">
                <Button content="Annuler"/>
                <Button content="Retour " onClick={onPrevious}/>
                <Button content="Enregistrer"/>
            </div>
        </div>
    )
  }
  
  export default Content_two