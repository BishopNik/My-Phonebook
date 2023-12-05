/** @format */

import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormikContact = styled(Form)`
	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;
	padding: 20px 25px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	border-radius: ${p => p.theme.spacing(4)};
	box-shadow: 0px 0px 8px 4px rgba(128, 128, 128, 0.5);

	@media screen and (min-width: 768px) {
		padding: 40px 55px;
	}
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-right: auto;
	margin-bottom: ${p => p.theme.spacing(9)};
	font-size: 24px;
	font-weight: 600;
`;

export const InputFormik = styled(Field)`
	padding: 10px 25px;
	border-radius: ${p => p.theme.spacing(1)};
	border: none;
	outline: 2px solid lightgray;
	font-size: 24px;
	color: blue;
`;

export const SelectFormik = styled.select`
	padding: 10px 40px 10px 25px;
	border-radius: ${p => p.theme.spacing(1)};
	border: none;
	outline: 2px solid lightgray;
	font-size: 24px;
	color: blue;

	appearance: none;
	background: url('https://cdn-icons-png.flaticon.com/512/60/60995.png') no-repeat right center;
	background-size: 20px 20px;
	background-position-x: calc(100% - 20px);
`;

export const AddButton = styled.button`
	border-radius: 6px;
	font-size: 22px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	cursor: pointer;
	box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.5);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	min-width: 200px;
	height: 48px;

	&:hover {
		background-color: antiquewhite;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;

export const CancelButton = styled.button`
	border-radius: 6px;
	font-size: 22px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	cursor: pointer;
	box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.5);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	min-width: 50px;
	height: 48px;
	margin-left: 10px;
	width: fit-content;

	@media screen and (min-width: 768px) {
		margin-left: 25px;
	}

	&:hover {
		background-color: antiquewhite;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;
