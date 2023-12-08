/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 30px;
	margin-left: auto;
	margin-right: auto;

	&:last-child {
		margin-bottom: 40px;
	}

	@media screen and (max-width: 767px) {
		width: 400px;
	}

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		width: 768px;
	}

	@media screen and (min-width: 1280px) {
		width: 1280px;
	}
`;

export const TitleName = styled.h2`
	margin: 24px 0;
	padding: 0 30px;
	font-size: 36px;
`;

export const FormBox = styled.div`
	width: 330px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 768px) {
		width: 550px;
	}

	@media screen and (min-width: 1279px) {
		width: 650px;
	}
`;

export const MenuLog = styled.div`
	width: 340px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 768px) {
		width: 730px;
	}
`;
