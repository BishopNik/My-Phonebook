/** @format */

import styled from 'styled-components';

export const ContactsBox = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	row-gap: 20px;
	justify-content: flex-start;
	align-items: center;
	padding: 0;
	padding-bottom: 40px;
`;

export const ContactContainer = styled.li`
	display: flex;
	align-items: center;
	outline: 1px solid lightgray;
	border-radius: 8px;
	box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.5);
	background-color: #fafaf7;

	@media screen and (max-width: 767px) {
		width: 97%;
	}

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		width: calc((100% - 15px) / 2);
	}

	@media screen and (min-width: 1280px) {
		width: calc((100% - 30px) / 3);
	}
`;
