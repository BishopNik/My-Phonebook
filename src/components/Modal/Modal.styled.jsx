/** @format */

import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormBox = styled(Form)`
	display: flex;
	width: 355px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: ${p => p.theme.spacing(3)};

	@media screen and (min-width: 768px) {
		width: 650px;
		padding-top: 10px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-left: auto;
	margin-right: auto;
	padding-top: 10px;

	@media screen and (min-width: 768px) {
		gap: 24px;
		padding-bottom: 20px;
	}
`;

export const ContactBox = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 10px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 768px) {
		gap: 20px;
		margin-bottom: 30px;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	gap: 6px;
	flex-direction: column;
	cursor: inherit;
`;

export const ContactInput = styled(Field)`
	width: 170px;
	margin: 0;
	margin-right: auto;
	padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(1)};
	font-size: 18px;
	color: darkblue;
	border: none;
	background-color: transparent;
	border-radius: 6px;
	cursor: inherit;

	@media screen and (min-width: 768px) {
		padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(2)};
		font-size: 22px;
		width: 405px;
	}

	&:focus {
		outline: 1px solid red;
	}
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 5px;
	width: 100%;
	font-size: 18px;
	font-weight: 600;
	border-radius: 6px;
	cursor: inherit;

	@media screen and (min-width: 768px) {
		font-size: 22px;
	}
`;

export const LabelName = styled.span`
	width: 68px;
	cursor: inherit;

	@media screen and (min-width: 768px) {
		width: 85px;
	}
`;

export const Avatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100px;
	height: 100px;
	font-size: 70px;
	border-radius: 50%;
	background-color: lightsteelblue;
`;

export const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'whitesmoke',
		borderRadius: '8px',
	},
};
