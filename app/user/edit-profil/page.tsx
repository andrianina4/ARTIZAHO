import NavBar from "@/components/nav-bar";
import EditUser from "../components/editUser";

export default function page() {
  return (
    <div className="bg-[#FFF] w-[1440px] mx-auto">
      <header>
        <NavBar isWhite={true} />
      </header>

      <main>
        <EditUser />
      </main>
    </div>
  );
}
