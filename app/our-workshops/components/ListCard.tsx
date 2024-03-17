"use client";
import ErrorComponent from "@/app/_global/error";
import LoadingComponent from "@/app/_global/loading";
import CardComponent from "@/components/CardComponent";
import { getWorkShop } from "@/services/workshop.service";
import { IWorkShop } from "@/types/IWorkshop";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function ListCard() {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getWorkShop(),
    queryKey: ["workshop"],
    retryOnMount: false,
  });

  const handleClick = (workshop: IWorkShop) => {
    router.push(`/our-workshops/details/${workshop.id}`);
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent />;
  }
  return (
    <>
      {data?.map((workshop, index) => {
        return (
          <CardComponent
            key={index}
            workshop={workshop}
            onClick={() => {
              handleClick(workshop);
            }}
          />
        );
      })}
    </>
  );
}
