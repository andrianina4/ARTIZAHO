import { Alarm, Place, Shop } from "@/constants/link/icons";

export default function HeaderWorkshop() {
  return (
    <div className="flex items-center mt-4">
      <div className="w-1/2">
        <h4 className="font-manrope text-2xl">Vase bouquet</h4>

        <div className="flex gap-4">
          <div className="flex text-brown text-[10px] items-center font-bold gap-2">
            <Alarm /> Duration 1:30
          </div>
          <div>
            <div className="flex text-brown text-[10px] items-center font-bold gap-2">
              <Place />
              Antananarivo
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex gap-5 justify-end items-center">
          <div>
            <h4 className="text-reddishBrown text-[32px] font-[900]">35.00€</h4>

            <p className="text-brown text-xs font-normal">
              including <span className="font-bold">18.00€</span> for Mahefa
            </p>
          </div>
          <div>
            <button className="btn bg-reddishBrown outline-none border-none hover:bg-reddishBrown font-extrabold text-whiteGray text-sm">
              <Shop className="text-xl" />
              Book the workshop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}