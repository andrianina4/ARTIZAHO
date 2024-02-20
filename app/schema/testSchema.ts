import * as yup from "yup";
 
 export const Schema = yup.object().shape({
    start: yup.string(),
    end: yup.string(),
     dateClicked: yup.string()
  });
  
  export type FormDataTest = yup.InferType<typeof Schema>