/** @format */

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
	background-color: white;
	color: black;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 14px;

	@media screen and (min-width: 768px) {
		font-size: 18px;
	}
`;

export const Button = styled.button`
	background-color: white;
	color: black;
	border: none;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	padding: 0;

	@media screen and (min-width: 768px) {
		font-size: 18px;
	}
`;

export const User = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
`;

export const Account = styled.p`
	margin: 0;
	padding: 0;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: 500;
	color: black;
	cursor: default;

	@media screen and (min-width: 768px) {
		font-size: 22px;
		font-weight: 600;
	}
`;

export const AccountID = styled.p`
	margin: 0;
	padding: 0;
	text-transform: uppercase;
	font-size: 12px;
	color: black;
	cursor: default;
`;

export const UserItem = styled.p`
	margin: 0 0 15px 0;
	padding: 0;
	font-size: 16px;
	font-weight: 500;
	color: red;
	cursor: default;

	@media screen and (min-width: 768px) {
		font-size: 22px;
		font-weight: 600;
	}
`;

export const NavMenu = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
	margin-bottom: 40px;
	padding: 6px 10px;
	font-size: 20px;
	font-weight: 600;
	color: black;
	background-color: white;
	border: 1px solid lightgray;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;
		padding: 12px 40px;
	}
`;
