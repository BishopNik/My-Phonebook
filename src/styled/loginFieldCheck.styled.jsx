/** @format */

import styled from 'styled-components';

export const LabelItem = styled.label`
	margin: 0;
	padding: 0 50px;
	font-size: 16px;
	font-weight: 500;
	color: black;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;
	}
`;

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 500px;
	height: 105px;
	margin: 0;
	padding: 15px 30px;
	font-size: 16px;
	font-weight: 500;
	color: black;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;
	}
`;

export const InputItem = styled.input`
	padding: 8px 20px;
	border: 0.5px solid black;
	border-radius: 6px;
	outline: none;
`;

export const ErrorMsg = styled.span`
	padding: 0 20px;
	font-size: 18px;
	font-weight: 400;
	color: red;
`;
