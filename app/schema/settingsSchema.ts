import * as yup from "yup"

export const SettingsSchema  = yup.object().shape({
    admin_name: yup.string().required(),
    admin_email: yup.string(),
   
  });
  
  export type FormSettingsData = yup.InferType<typeof SettingsSchema>
