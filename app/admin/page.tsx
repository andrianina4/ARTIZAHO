import { ChartBar, ChartSales, Date } from "@/constants/link/icons";



export default function Admin() {
  return (
    <div className=" flex flex-col gap-5 h-full">
      <div className=" grid grid-cols-3 gap-10 h-1/5">
        <div className="flex flex-row bg-white flex-1 h-full gap-7 rounded-3xl px-10 py-7 ">
          <div className="bg-white-40% w-14 h-14 rounded-full flex justify-center items-center text-4xl text-brown ">
              <Date/>
          </div>
          <div>
            <p className="text-white-40%">Date</p>
            <p className="text-brown-80% font-bold"> 10 Nov 2023</p>
          </div>
        </div>
         <div className="flex flex-row bg-white flex-1 h-full gap-7 rounded-3xl px-10 py-7 ">
          <div className="bg-white-40% w-14 h-14 rounded-full flex justify-center items-center text-4xl text-brown  ">
            <ChartBar/>
          </div>
          <div>
          <p className="text-white-40% ">Total bookings</p>
            <p className="text-brown-80% font-bold text-2xl"> 250</p>
          </div>
        </div>
        <div className="flex flex-row bg-gradient-to-t from-brown to-brown-60% flex-1 h-full gap-7 rounded-3xl px-10 py-7 ">
          <div>
            <p className="text-white-40%" >Sales figures</p>
            <p className=" text-white font-bold text-2xl">500000$</p>
          </div>
          <div className=" w-14 h-14 flex justify-center items-center   ">
            <p className="text-5xl ">
            <ChartSales/>
            </p>
          </div>
        </div>
        
      </div>

      <div className=" h-4/5 grid grid-cols-3 grid-rows-2 gap-10 ">
         <div className=" flex flex-col gap-2 row-span-full col-start-1 col-end-3 ">
            <div className=" flex flex-col gap-5 bg-white w-full h-36 rounded-3xl p-10  ">
              <div >
                <p className="text-3xl font-semibold ">Craftmen list</p>
                <p>Overview of workshops with location and participants</p>
              </div>
              {/* <div className="grid grid-cols-3">
                <p className="bg-red-500">Craftmen</p>
                <p>City</p>
                <p>Total participants </p>
              </div> */}
            </div>
            <div className="flex flex-row  items-center  bg-white w-full h-36 rounded-3xl p-10   ">
              <div className="flex flex-row  flex-1  items-center gap-3.5 ">
                  <div className="w-[56px] h-[56px] rounded-full bg-slate-500 "></div>
                  <div>
                    <p className="font-semibold">Safidy</p>
                    <p>safidy@gmail.com</p>
                  </div>
              </div>
              <div className="flex flex-1 font-semibold">Antananarivo</div>
              <div className="flex flex-1 font-semibold"> 150</div>
            </div>
           
          
         </div>
         <div className="flex flex-col bg-white rounded-3xl justify-center ">
              <div className="flex flex-row justify-center  gap-10 ">  
                  <div>
                    <p className="font-semibold">Mois</p>
                    <p className="text-brown font-semibold text-xl">Craftmen total</p>
                  </div>
                  <div className="w-[56px] h-[56px] rounded-full bg-slate-500  "></div>
              </div>
              <div className="text-5xl font-semibold text-brown-80% pl-16">70</div>
         </div>
         <div className=" flex flex-col gap-3 items-center bg-white rounded-3xl py-7">
            <p className="text-brown font-semibold">The most reserved craftmen</p>
            <div className="flex flex-row gap-3  ">
              <div className="bg-bronze w-1 rounded-xl"></div>
              <div className="w-[56px] h-[56px] rounded-full bg-slate-500 "></div>
              <div>
                <p>Safidyy</p>
                <p>safidy@gmail.com</p>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
}