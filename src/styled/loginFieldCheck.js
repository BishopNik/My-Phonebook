/** @format */

import { LabelItem, InputBox, InputItem, ErrorMsg } from './loginFieldCheck.styled';

export const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const maxLength = max => value =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
const minLength = min => value =>
	value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const minLength7 = minLength(7);
export const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined;

export const renderField = ({
	input,
	label,
	placeholder,
	type,
	meta: { touched, error, warning },
}) => (
	<div>
		<LabelItem>{label}</LabelItem>
		<InputBox>
			<InputItem {...input} placeholder={placeholder} type={type} />
			{touched &&
				((error && <ErrorMsg>🚨 {error}</ErrorMsg>) ||
					(warning && <ErrorMsg>🚨 {warning}</ErrorMsg>))}
		</InputBox>
	</div>
);
