import * as yup from "yup";

export const AtelierSchema = yup.object().shape({
	atelier_name: yup.string().required(),
	atelier_artisan: yup.string(),
	atelier_tarifs: yup.number(),
	atelier_heure_duree: yup.date(),
	atelier_nb_participant: yup.number(),
	atelier_desc: yup.string(),
});

export type FormAtelierData = yup.InferType<typeof AtelierSchema>;
