import * as yup from "yup";
 
 export const Schema = yup.object().shape({
    start: yup.string().required('Le nom est requis'),
    end: yup.string().email('L\'email est invalide').required('L\'email est requis'),
    // dateClicked: yup.date()
  });
  
  export type FormDataTest = yup.InferType<typeof Schema>