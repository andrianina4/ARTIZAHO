import { Check, Date } from "@/constants/link/icons";
import ModalItem from "../component/modalItem";
import { UserAdd } from "@/constants/link/icons";
import Calendar from "../../catalogue/component/Calendar";
import FullCalendar from "@fullcalendar/react";
import CraftmanCalendar from "../component/calendar";
import Input from "@/components/input";
import Button from "@/components/button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormDataTest, Schema } from "@/app/schema/testSchema";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { DateRange, DateRangeProps } from "react-date-range";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import CalendarRange from "./calendarRange";

type props = {
  onPrevious: VoidFunction;
};



function Content_two({ onPrevious }: any) {
//   const [state, setState] = useState<Range[]>([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 0),
//       key: "selection",
//     },
//   ]);

//   const formattedStartDate = format(DateVal[0].startDate, "yyyy-MM-dd");
//   const formattedEndDate = format(DateVal[0].endDate, "yyyy-MM-dd");

// useEffect(() => {
//     if (DateVal) {
//         setDateVal([
//             {
//               startDate: new Date(),
//               endDate: addDays(new Date(), 0),
//               key: "selection",
//             },
//           ])
//     }
// }, [])

  

  const { register, handleSubmit } = useForm<FormDataTest>({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center text-bronze text-2xl font-semibold gap-4 ">
        <span>
          <UserAdd />
        </span>
        New craftman
      </div>

      <div className="flex w-full gap-2">
        <ModalItem
          leftIcon={<Date />}
          text="Avalaibility date"
          className="w-1/2"
        />
        <ModalItem leftIcon={<Date />} text="Hour" className="w-1/2" />
      </div>

      <div className="flex h-full gap-2">
        <CalendarRange/>
        ;
        <form className=" flex w-2/5 gap-2 h-fit items-center">
          <div className="flex w-full items-center gap-2 bg-white-40% rounded-2xl px-2">
            <label htmlFor="">De:</label>
            <input
              type="time"
              className="bg-transparent text-sm w-full  h-[70px] rounded-2xl "
              {...register("start")}
            />
            <label htmlFor="">Au:</label>
            <input
              type="time"
              className="bg-transparent text-sm w-full  h-[70px] rounded-2xl"
              {...register("end")}
            />
            {/* <input id="blab" type="text" {...register('dateClicked')} value={dateClicked} /> */}
          </div>
          <Button leftIcon={<Check />} className="!h-10 !w-10 !rounded-2xl" />
        </form>
      </div>
      <div className="flex gap-4">
        <Button content="Cancel" />
        <Button content="Previous " onClick={onPrevious} />
        <Button content="Save" />
      </div>
    </div>
  );
}

export default Content_two;

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
