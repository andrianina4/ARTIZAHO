import { StringDate } from "..";
import { IImage } from "../IImage";

export interface ICurrentUser {
  id: number;
  images: IImage[];
  first_name: string;
  last_name: string;
  is_active: boolean;
  date_joined: StringDate;
  username: string | null;
  email: string;
  account_type: string;
  gender: string;
  dob: string | null;
  nif: string | null;
  phone_number: string | null;
  is_super_admin: boolean;
}
