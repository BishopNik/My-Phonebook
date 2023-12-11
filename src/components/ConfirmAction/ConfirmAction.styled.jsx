/** @format */

import styled from 'styled-components';

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-left: auto;
	margin-right: auto;
	padding-top: 10px;
	padding-bottom: 10px;

	@media screen and (min-width: 768px) {
		gap: 24px;
	}
`;

export const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'whitesmoke',
		borderRadius: '8px',
	},
};
