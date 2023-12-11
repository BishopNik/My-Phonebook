/** @format */

import { Container } from 'styled/shared.styled';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { TextBox, Text, User, Redirect } from 'styled/shared.styled';

const Verify = () => {
	const [countdown, setCountdown] = useState(10);
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCountdown(prevCountdown => prevCountdown - 1);

			if (countdown === 1) {
				clearInterval(intervalId);
				navigate('/login');
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [countdown, navigate]);

	return (
		<Container>
			<TextBox>
				<Text>
					Dear <User>{user.name}</User>,
				</Text>
				<Text>
					Thank you for registering with our service! We're thrilled to have you on board.
				</Text>
				<Text>
					To complete the registration process, please check your email inbox. We've sent
					you a confirmation email to verify your email address{' '}
					<a href={user.email}>{user.email}</a>.
				</Text>
				<Text>
					If you encounter any issues or have questions, feel free to reach out to our
					support team at <a href='mailto:a.nikanorov@gmail.com'>a.nikanorov@gmail.com</a>
					.
				</Text>
				<Text>Welcome to our community!</Text>
				<Redirect>
					Redirecting to the login page after <span>{countdown}</span>s
				</Redirect>
			</TextBox>
		</Container>
	);
};

export default Verify;
