import Input from "@/components/input";
import ShoppingCart from "@/components/shopping-cart-item";
import { Location, People, Phone } from "@/constants/link/icons";
import { ReservationButton } from "../../../contents/modal";

export default function Form() {
  return (
    <div>
      <div className="h-10"></div>

      <div className="my-5">
        <Input
          label="Your telephone number"
          id="phone"
          leftIcon={<Phone />}
          placeholder="Tel"
        />
      </div>
      <div className=" my-5">
        <Input
          label="Réservation name"
          id="reservationName"
          leftIcon={<People />}
          placeholder="Réservation name"
        />
      </div>

      <div className=" my-5">
        Workshop location
        <div className="flex gap-2 items-center text-grey-60% mt-3">
          <Location /> Antananarivo Madagascar
        </div>
      </div>
      <ReservationButton />
    </div>
  );
}
