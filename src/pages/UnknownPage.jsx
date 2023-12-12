/** @format */

import { Container } from 'styled/shared.styled';
import { TextMessage, LinkHome } from '../styled/shared.styled';

const UnknownPage = () => {
	return (
		<Container>
			<TextMessage>Ups... Page not found.</TextMessage>
			<LinkHome href='phonebook' variant='body2'>
				{'Home page'}
			</LinkHome>
		</Container>
	);
};

export default UnknownPage;
