import Sidebar from "@/components/sidebar";
import Header from "./component/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className=" flex flex-row h-screen bg-white-40% p-5 gap-7  ">
         <div className=" w-[280px]">
           <Sidebar/>
         </div>
         <div className="w-full h-full flex flex-col gap-7">
            <div className="h-[10%]">
              <Header BigTitle="Bienvenue sur notre dashboard" LittleTitle="Hello Artizaho"/>
            </div>
            <div className=" h-[90%]">{children}</div>  
         </div>
      </div>
      
    );
  }

  // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
  //       <div className="w-full flex-none md:w-64">
  //         <Sidebar/>
  //       </div>
  //       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
  //     </div>