import { ICraftman } from "@/types/ICraftman";
import { IImage } from "@/types/IImage";

export type CreateImageArtisanDto = Omit<
  IImage,
  "id" | "folder_name" | "base_url" | "blurhash_code" | "user" | "workshop"
>;
export type CreateArtisanDto = Omit<ICraftman,"id"| "image" >