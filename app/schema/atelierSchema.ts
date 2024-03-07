import * as yup from "yup";

export const AtelierSchema = yup.object().shape({
	workshop_name: yup.string().required(),
	workshop_artisan: yup.string(),
	workshop_tarifs: yup.number(),
	workshop_heure_duree: yup.date(),
	workshop_nb_participant: yup.number(),
	workshop_desc: yup.string(),
});

export type FormAtelierData = yup.InferType<typeof AtelierSchema>;
