/** @format */

import styled from 'styled-components';

export const CardContact = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	padding-top: ${p => p.theme.spacing(8)};
	padding-bottom: ${p => p.theme.spacing(6)};
	padding-left: ${p => p.theme.spacing(5)};
	padding-right: ${p => p.theme.spacing(5)};
	cursor: pointer;
`;

export const ContactFiels = styled.div`
	display: flex;
	gap: 4px;
	padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(2)};
	width: 305px;
	font-size: 20px;
`;

export const ContactName = styled.span`
	display: inline-block;
	width: 115px;
	color: #000000b5;
`;

export const ContactNumber = styled.span`
	display: inline-block;
	color: darkblue;
`;

export const DelButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	border-radius: ${p => p.theme.spacing(2)};
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	cursor: pointer;
	box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.5);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	min-width: 30px;
	height: 30px;

	&:hover {
		background-color: antiquewhite;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;
