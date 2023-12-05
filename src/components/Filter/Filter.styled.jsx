/** @format */

import styled from 'styled-components';

export const FilterField = styled.label`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 700px;
	margin-left: auto;
	margin-right: auto;
	font-size: 26px;
	width: 375px;

	@media screen and (min-width: 768px) {
		width: 700px;
	}
`;

export const InputFilter = styled.input`
	padding: 10px 25px;
	border-radius: ${p => p.theme.spacing(1)};
	border: none;
	outline: 2px solid lightgray;
	font-size: 24px;
	color: blue;
	margin-bottom: 30px;
	width: 90%;
	box-shadow: 1px 1px 4px 2px rgba(128, 128, 128, 0.5);
`;
