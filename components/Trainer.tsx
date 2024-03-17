import { ICraftman } from "@/types/ICraftman";
import StartComponent from "./Start";

type PropsTrainer = {
  artisan: ICraftman;
};
export default function Trainer({ artisan }: PropsTrainer) {
  return (
    <div className="w-[334px] p-[14px] flex gap-4 bg-[#FBFBFB]">
      <div>
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-[45px]">
            <span className="text-lg uppercase">{artisan.name[0]}</span>
          </div>
        </div>
      </div>
      <div className="text-brown">
        <h4 className="font-extrabold font-manrope ">{artisan.name}</h4>
        <p className="font-normal text-xs">
          {artisan.description}...{" "}
          <span className="font-bold text-reddishBrown">Voir plus</span>
        </p>

        <div className="mt-4">
          <StartComponent start={1.5} />
        </div>
      </div>
    </div>
  );
}
