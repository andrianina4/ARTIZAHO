import Title from "@/components/Title";
import NavBar from "@/components/nav-bar";
import { whoare1, whoare2 } from "@/constants/link/images";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[#FFF] w-[1440px] mx-auto">
      <header>
        <NavBar className="text-red-500" />
      </header>

      <div className="bodyContainer flex items-center gap-10">
        <Image src={whoare1} alt="whoare1" />

        <div className="text-brown">
          <Title title="QUI SOMMES NOUS" />

          <p className="font-manrope text-sm font-normal mt-4">
            Artizaho est une structure qui oeuvre pour mettre en lumiere les
            artisans et le savoir-faire malagasy. C’est <br /> une approche du
            voyage qui permet de prendre son temps et de se connecter au monde
            qui nous entoure. <br /> <br />
            Avec nous, vous pousserez les portes de leurs ateliers, decouvrirez
            leur monde et leur passion & vous <br /> mettrez les mains a la pate
            pour fabriquer vous meme un souvenir tangible de votre voyage.{" "}
            <br />
            <br /> Avec Artizaho, vous serez au plus pret de la realité de notre
            communauté et vous gagnerez une meilleure
            <br /> comprehension de notre ile. Un voyage riche de sens, une
            experience Artizaho.
          </p>
        </div>
      </div>

      <div className="bodyContainer flex items-center gap-10">
        <div className="text-brown">
          <Title title="Visions" />

          <p className="font-manrope text-sm font-normal mt-4">
            Devenir le leader dans la promotion de l’artisanat malgache à
            travers des expériences artisanales <br /> authentiques,
            <br /> durables et responsables.
          </p>
        </div>

        <Image src={whoare2} alt="whoare2" />
      </div>
    </div>
  );
}
