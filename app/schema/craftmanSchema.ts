import * as yup from "yup"

export const CraftmanSchema  = yup.object().shape({
    //image: yup.mixed().required("Image is required"),
    name: yup.string().required("The name of craftman is required"),
    description: yup.string().required("THe description of craftman is required"),
    exprtise: yup.string().required("The expertise of craftman is required"),
    gender:yup.string().required("The gender of craftman is required")
    
   
  });
  
  export type FormCraftmanData = yup.InferType<typeof CraftmanSchema>
