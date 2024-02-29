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
import { FormDataTest,Schema } from "@/app/schema/testSchema"
import { useState } from "react"
import {yupResolver} from "@hookform/resolvers/yup"
import { DateRange, DateRangeProps } from 'react-date-range';
import { addDays, format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file



type props={
    onPrevious: VoidFunction
}

interface Range {
    startDate: Date ;
    endDate: Date;
    key: string;
  }

function Content_two({onPrevious}:props) {

    const [state, setState] = useState<Range[]>([
        {
          startDate: new Date(),
          endDate: addDays(new Date(),0),
          key: 'selection'
        }
      ]);
      
      const formattedStartDate = format(state[0].startDate, 'dd/MM/yyyy');
      const formattedEndDate = format(state[0].endDate, 'dd/MM/yyyy');
    
      const handleChange = (item: any) => {
        setState([item.selection as Range]);
        console.log('Start Date:', item.selection.startDate);
        console.log('End Date:', item.selection.endDate);
      };
   
    const{register, handleSubmit} =useForm<FormDataTest>({
        mode : 'onChange',
        resolver: yupResolver(Schema)
    })
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
                <DateRange
                    onChange={handleChange}
                    
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={state}
                    direction="horizontal"
                />;
                <form className=" flex w-2/5 gap-2 h-fit items-center">
                    <div className="flex w-full items-center gap-2 bg-white-40% rounded-2xl px-2">
                        <label htmlFor="">De:</label>
                        <input
                        value="10:00"
                            type="time"
                            className="bg-transparent text-sm w-full  h-[70px] rounded-2xl "
                        {...register('start')}
                        />
                        <label htmlFor="">Au:</label>
                        <input
                        type="time"
                        className="bg-transparent text-sm w-full  h-[70px] rounded-2xl"
                        {...register('end')}
                        value={"14:00"}
                        />
                         {/* <input id="blab" type="text" {...register('dateClicked')} value={dateClicked} /> */}
                    </div>
                    <Button   leftIcon={<Check/>} className="!h-10 !w-10 !rounded-2xl"/>
                </form>
            </div>
            <div className="flex gap-4">
                <Button content="Cancel"/>
                <Button content="Previous " onClick={onPrevious}/>
                 <Button   content="Save" /> 
            </div>
           
        </div>
    )
  }
  
  export default Content_two








//   const [dateClicked, setDateClicked]= useState('')
//   const inputRef = useRef<any>(null);
  
//   useEffect(() => {
//       console.log("Nouvelle valeur de dateClicked :", dateClicked);
     
//   }, [dateClicked]);
//   // Se déclenche lorsque dateClicked change
//   const handleClickDate =(info:any)=>{
//      const dateCl= document.querySelector('#blab')
//      if (dateCl) {
//       dateCl.focus();
//   }


//       console.log('Date cliquée :', info.dateStr);    
//       setDateClicked(info.dateStr)
//       console.log("go", dateClicked)

      
//   }
//   let dateok=dateClicked
//   console.log("ok",dateok)
//   const addCraft = (data: FormDataTest) => {
//       console.log("2")
//       console.log(data); // Vous pouvez soumettre les données ici
//     };

//   const postdata=()=>{
//       console.log("1")
//       handleSubmit(addCraft)()
//       console.log("3")
//   }
