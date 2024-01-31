import * as yup from "yup";

export const FileSchema = yup.object().shape({
	pictures: yup.array(),
});

export type FileData = yup.InferType<typeof FileSchema>;
