/** @format */

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
	background-color: white;
	color: darkblue;
	text-decoration: none;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	padding: 7px 12px;
	border-radius: 5px;

	&.active {
		color: white;
		background-color: blue;
	}

	&:hover {
		color: red;
		transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	&.active:hover {
		color: #fc662f;
		transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;

export const NavMenu = styled.nav`
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
	padding: 12px 40px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.23);
	font-size: 24px;
	font-weight: 600;
	color: darkblue;
`;
