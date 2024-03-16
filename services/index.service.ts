const backendUrl = "http://localhost:9237";
import { IImage } from "@/types/IImage";

export const getImgUrl = (images: IImage[]) => {
  return `/image/api/v1${images[images.length - 1].base_url}`;
};

export const getByImgUrl = (image: IImage) => {
  return `/image/api/v1${image.base_url}`;
};
