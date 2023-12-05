/** @format */

import { NavItem, NavMenu } from './AuthNavigation.styled';

export const AuthNavigation = () => {
	return (
		<>
			<NavMenu>
				<NavItem to='/register' end>
					Register
				</NavItem>
				<NavItem to='/login' end>
					Login
				</NavItem>
			</NavMenu>
		</>
	);
};
