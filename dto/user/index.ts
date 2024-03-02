import { ICurrentUser } from "@/types/user/ICurrentUser";

export type CreateUserDto = Omit<
  ICurrentUser,
  "id" | "images" | "date_joined" | "is_super_admin" | "is_active"
> & {
  password: string;
};
