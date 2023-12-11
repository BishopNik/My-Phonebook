/** @format */

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
	background-color: white;
	color: darkblue;
	text-decoration: none;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: 5px;
	/* cursor: default; */
	/* pointer-events: none; */
	font-size: 16px;

	@media screen and (min-width: 768px) {
		font-size: 24px;
	}
`;

export const NavUserItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
	background-color: white;
	color: darkblue;
	padding: 7px 12px;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;
		gap: 20px;
		flex-direction: row;
	}
`;

export const NavMenu = styled.nav`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 40px;
	padding: 6px 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.23);
	font-size: 20px;
	font-weight: 600;
	color: darkblue;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;
		padding: 12px 40px;
	}
`;

export const UserItem = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-weight: 500;
	color: darkblue;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;
	}
`;

export const UserName = styled.span`
	color: red;
`;

export const ButtonLogout = styled.button`
	font-size: 16px;
	font-weight: 500;
	padding: 3px 6px;
	border-radius: 6px;
	cursor: pointer;
	border: 0.5px solid black;
	box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.5);
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background-color: antiquewhite;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	@media screen and (min-width: 768px) {
		font-size: 24px;
		font-weight: 600;
		padding: 5px 10px;
	}
`;

export const UserAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	cursor: pointer;
`;
