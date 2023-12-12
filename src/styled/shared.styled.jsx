/** @format */

import styled from 'styled-components';
import Link from '@mui/material/Link';

export const Container = styled.div`
	padding: 0 30px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (max-width: 767px) {
		width: 400px;
	}

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		width: 768px;
		padding: 0 60px;
	}

	@media screen and (min-width: 1280px) {
		width: 1150px;
		padding: 0 90px;
	}
`;

export const Button = styled.button`
	border-radius: ${p => p.theme.spacing(2)};
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	cursor: pointer;
	box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.5);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	min-width: 30px;
	height: 34px;

	&:hover {
		background-color: antiquewhite;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	@media screen and (min-width: 768px) {
		font-size: 20px;
		min-width: 80px;
		height: 40px;
	}

	@media screen and (min-width: 1280px) {
		font-size: 22px;
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 35px;
	gap: 10px;
`;

export const FormBox = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	padding: 35px 15px;
	border-radius: 12px;
	border: 0.5px solid black;
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
`;

export const TextBox = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 25px;
	padding: 35px 15px;
	border-radius: 12px;
	border: 0.5px solid black;
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
	list-style: none;
`;

export const User = styled.span`
	font-weight: 700;
	color: crimson;
`;

export const Text = styled.li`
	text-align: justify;
`;

export const Redirect = styled.li`
	font-size: 12px;
`;

export const Form = styled.form`
	margin-left: auto;
	margin-right: auto;
	padding: 10px;
	border-radius: ${p => p.theme.spacing(2)};
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.5);
	min-height: 300px;

	@media screen and (min-width: 768px) {
		font-size: 18px;
		padding: 20px;
	}

	@media screen and (min-width: 1280px) {
		padding: 50px;
	}
`;

export const Label = styled.label`
	font-size: 16px;

	@media screen and (min-width: 768px) {
		font-size: 18px;
	}

	@media screen and (min-width: 1280px) {
		font-size: 22px;
	}
`;

export const Input = styled.input`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px;
	border-radius: ${p => p.theme.spacing(1)};
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	cursor: pointer;
	margin-top: 5px;
	width: 100%;

	@media screen and (min-width: 768px) {
		font-size: 18px;
	}

	@media screen and (min-width: 1280px) {
		font-size: 22px;
	}
`;
export const FlexBoxMain = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	gap: 30px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const FlexBoxSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
`;

export const FlexBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 4px;
	border: 1px solid darkslateblue;
	border-radius: ${p => p.theme.spacing(3)};
	padding: ${p => p.theme.spacing(3)};
`;

export const Img = styled.img`
	width: 180px;
	height: 180px;
	object-fit: cover;
	border-radius: 50%;

	@media screen and (min-width: 768px) {
		width: 250px;
		height: 250px;
		margin-top: 0;
	}
`;

export const TextMessage = styled.h1`
	text-align: center;
	margin-top: 70px;
`;

export const LinkHome = styled(Link)`
	display: flex;
	justify-content: center;
`;
