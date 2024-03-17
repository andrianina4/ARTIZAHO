import { StringDate } from "@/types";

export type CreateCustomWorkshop = {
  date: StringDate;
  time: string;
  number_of_participants: number;
  location: string;
};

export type CreateBookWorkShop = {
  number_of_participants: number;
  reservation_name: string;
  phone_number: string;
};
