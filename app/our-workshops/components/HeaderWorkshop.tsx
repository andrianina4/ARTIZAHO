import { Alarm, Place, Shop } from "@/constants/link/icons";
import { IWorkShop } from "@/types/IWorkshop";
import Link from "next/link";

export default function HeaderWorkshop(props: { workshop: IWorkShop }) {
  const { workshop } = props;
  return (
    <div className="flex lg:items-center mt-4 sm:flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <h4 className="font-manrope text-2xl font-bold">{workshop.title}</h4>
      </div>
      <div className="lg:w-1/2">
        <div className="flex gap-5 lg:justify-end items-center">
          <div>
            <h4 className="text-reddishBrown text-[32px] font-[900]">
              {workshop.workshop_info.base_price}€
            </h4>
          </div>
          <div>
            <Link href={`/reservation-date/${workshop.id}`}>
              <button className="btn bg-reddishBrown outline-none border-none hover:bg-reddishBrown font-extrabold text-whiteGray text-sm">
                <Shop className="text-xl" />
                Book the workshop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
