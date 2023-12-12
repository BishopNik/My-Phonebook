/** @format */

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { resendEmail } from 'redux/auth/operations';
import { toastError } from 'components/Helpers';
import Loader from 'components/Loader';
import { useAuth } from 'hooks';

function Copyright(props) {
	return (
		<Typography variant='body2' color='text.secondary' align='center' {...props}>
			{'Copyright © '}
			<Link color='inherit' href='/my-phonebook/'>
				My Phonebook
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const defaultTheme = createTheme();

const ResendConfirmEmailForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { statusResend, isResend } = useAuth();

	useEffect(() => {
		if (isResend) navigate('/login');
	}, [isResend, navigate]);

	const paramsURL = new URLSearchParams(location.search);
	const reg = paramsURL.get('reg');

	const submitForm = async values => {
		if (!values.email) {
			toastError('You must fill in the email field');
			return;
		}
		await dispatch(
			resendEmail({
				email: values.email,
				reg,
			})
		);
	};

	const handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		submitForm({
			email: data.get('email'),
		});
	};

	const textPage = reg === 'true' ? 'Send recovery message' : 'Resend confirmation email';
	const textButton = reg === 'true' ? 'Send' : 'Resend';

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LocalPostOfficeIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						{textPage}
					</Typography>
					<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
						/>

						<Button
							disabled={statusResend}
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							{textButton}
						</Button>

						{statusResend ? <Loader /> : null}

						<Grid container>
							<Grid item>
								<Link href='login' variant='body2'>
									{'Do have you an account? Sign In'}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>

				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
};

export default ResendConfirmEmailForm;
