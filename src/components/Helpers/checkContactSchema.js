/** @format */

import * as yup from 'yup';

export const schema = yup.object({
	name: yup.string().min(2).required('Name is required'),
	selectedGender: yup.string(),
	phone: yup
		.string()
		.matches(/^[\d+-]+$/, 'Invalid phone number')
		.min(6, 'Number must be at least 6 digits')
		.max(15, 'Number must not exceed 15 digits')
		.required('Number is required'),
});
