import { Danger } from "@/constants/link/icons";
import { UseFormRegisterReturn } from "react-hook-form";

type PropsSelectCustom = {
  className?: string;
  register?: UseFormRegisterReturn;
  readonly?: boolean;
  errorMessage?: any;
  options: { label: string; value: number | string }[];
};

export default function SelectCustom({
  className,
  errorMessage,
  readonly = false,
  register,
  options,
}: PropsSelectCustom) {
  return (
    <div>
      <select
        className={`select  bg-white-40%  text-black-60%  w-full ${className}`}
        {...register}
        disabled={readonly}
      >
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {errorMessage?.message && (
        <div className="pl-2 flex items-center gap-1 text-xs text-red-600 opacity-80 font-bold mt-2">
          <Danger className="w-3 h-3" /> <div>{errorMessage?.message}</div>
        </div>
      )}
    </div>
  );
}
