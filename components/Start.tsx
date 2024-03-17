import { Star } from "@/constants/link/icons";

type PropsStart = {
  start: number;
};
export default function StartComponent({ start }: PropsStart) {
  return (
    <div className="flex gap-x-1">
      {[...new Array(5)].map((_, index) => (
        <span
          key={index}
          className={`text-bronze text-lg ${
            index < start ? "" : "text-opacity-25"
          }`}
        >
          <Star />
        </span>
      ))}
    </div>
  );
}
