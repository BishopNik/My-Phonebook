/** @format */

import styled from 'styled-components';

export const CardContact = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	padding-top: ${p => p.theme.spacing(15)};
	padding-bottom: ${p => p.theme.spacing(4)};
	padding-left: ${p => p.theme.spacing(3)};
	padding-right: ${p => p.theme.spacing(3)};
	cursor: pointer;
`;

export const ContactFiels = styled.div`
	display: flex;
	gap: 4px;
	width: 270px;
	font-size: 16px;
	overflow: hidden;
`;

export const ContactName = styled.span`
	display: inline-block;
	width: 72px;
	color: #000000b5;
	white-space: nowrap;
`;

export const ContactNumber = styled.span`
	display: inline-block;
	color: darkblue;
	white-space: nowrap;
`;

export const DelButton = styled.button`
	position: absolute;
	top: 15px;
	right: 20px;
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

export const Gender = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 15px;
	left: 20px;
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
