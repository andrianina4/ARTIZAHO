type PropsTitle = {
  title: string;
};
export default function Title({ title }: PropsTitle) {
  return (
    <div className="flex flex-col gap-[12px]">
      <h4 className="uppercase font-moonGet text-xl ">{title}</h4>
      <svg
        width="32"
        height="2"
        viewBox="0 0 32 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H32" stroke="#C26143" stroke-width="2" />
      </svg>
    </div>
  );
}
