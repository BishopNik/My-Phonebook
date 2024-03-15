/** @format */

import Loader from 'components/Loader';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToken } from 'redux/auth/authSlice';
import { refreshUser } from 'redux/auth/operations';

function GoogleAuth() {
	const dispatch = useDispatch();
	const nav = useNavigate();

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const token = params.get('token');

		if (token) {
			dispatch(addToken(token));
			dispatch(refreshUser());
		} else nav('/login');
	}, [dispatch, nav]);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Loader />
		</div>
	);
}

export default GoogleAuth;
