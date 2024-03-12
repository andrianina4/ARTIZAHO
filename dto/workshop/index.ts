import { StringDate } from "@/types";

export type CreateCustomWorkshop = {
  date: StringDate;
  time: string;
  number_of_participants: number;
  location: string;
};
