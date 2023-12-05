/** @format */

import { UserMenu } from '../UserMenu';
import { AuthNavigation } from '../AuthNavigation';
import { useAuth } from 'hooks';
import { Container } from 'styled/shared.styled';

export const AppBar = () => {
	const { isLoggedIn } = useAuth();

	return (
		<header>
			<Container>{isLoggedIn ? <UserMenu /> : <AuthNavigation />}</Container>
		</header>
	);
};
