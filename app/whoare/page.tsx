import NavBar from "@/components/nav-bar";

export default function page() {
  return (
    <div className="bg-[#FFF]">
      <header className="flex flex-col relative h-[756px]">
        <div className="h-full flex flex-col">
          <NavBar className="text-red-500" />
        </div>
      </header>
    </div>
  );
}
