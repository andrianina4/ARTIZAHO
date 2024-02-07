import { Date } from "@/constants/link/icons"
import ModalItem from "../component/modalItem"
import { UserAdd } from "@/constants/link/icons"
import Calendar from "../../catalogue/component/Calendar"

function Content_two() {
    return (
        <div className="flex flex-col w-full">
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
            <div className="h-[330px]">
                <Calendar/>
            </div>
        </div>
    )
  }
  
  export default Content_two