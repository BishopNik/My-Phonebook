/** @format */

// import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
// import { toastError } from 'components/Helpers';
// import { logIn } from 'redux/auth/operations';

// import { required, maxLength15, minLength7, email, renderField } from 'styled/loginFieldCheck';
// import { FormBox, ButtonBox, Button } from 'styled/shared.styled';

// const LoginForm = ({ handleSubmit, pristine, reset, submitting }) => {
// 	const dispatch = useDispatch();
// 	const cancelLogin = useRef(null);

// 	const submitForm = values => {
// 		if (!values.email || !values.password) {
//          toastError('Please fill out all fields');
// 			return;
// 		}
// 		cancelLogin.current = dispatch(
// 			logIn({
// 				email: values.email,
// 				password: values.password,
// 			})
// 		);

// 		// reset();
// 	};

// 	return (
// 		<FormBox
// 			onSubmit={e => {
// 				e.preventDefault();
// 				handleSubmit(submitForm)(e);
// 			}}
// 		>
// 			<Field
// 				name='email'
// 				type='email'
// 				component={renderField}
// 				label='Login'
// 				placeholder='Enter email'
// 				validate={[required, email]}
// 			/>
// 			<Field
// 				name='password'
// 				type='password'
// 				component={renderField}
// 				label='Password'
// 				placeholder='Enter password'
// 				validate={[required, maxLength15, minLength7]}
// 			/>
// 			<ButtonBox>
// 				<Button type='submit' disabled={pristine || submitting}>
// 					Log in
// 				</Button>
// 				<Button
// 					type='button'
// 					disabled={pristine || cancelLogin.current === null}
// 					onClick={() => cancelLogin.current?.abort()}
// 				>
// 					❌
// 				</Button>
// 				<Button type='button' disabled={pristine || submitting} onClick={reset}>
// 					🗑️
// 				</Button>
// 			</ButtonBox>
// 		</FormBox>
// 	);
// };

// export default reduxForm({
// 	form: 'login',
// })(LoginForm);

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { logIn } from 'redux/auth/operations';
import { toastError } from 'components/Helpers';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';

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

const LoginForm = () => {
	const dispatch = useDispatch();
	const { isLogging, isLoggedIn } = useAuth();
	const navigation = useNavigate();

	useEffect(() => {
		if (isLoggedIn) navigation('phonebook');
	});

	const submitForm = values => {
		if (!values.email || !values.password) {
			toastError('Please fill out all fields');
			return;
		}
		dispatch(
			logIn({
				email: values.email,
				password: values.password,
			})
		);
	};
	const handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		submitForm({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

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
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
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
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
						<div style={{ display: 'flex', gap: '20px' }}>
							<Button
								disabled={isLogging}
								type='submit'
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
								style={{ width: '100%' }}
							>
								Sign In
							</Button>
							<Button
								href='http://localhost:4000/api/auth/login'
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
								style={{
									display: 'inline-flex',
									gap: '8px',
									width: '100%',
									background: 'darkblue',
								}}
							>
								<p style={{ margin: '0' }}>Login with</p>
								<img
									src='https://static-00.iconduck.com/assets.00/auth0-icon-512x512-3wef3www.png'
									loading='lazy'
									alt='auth0 icon'
									title='auth0 icon'
									data-alternate='https://d1rs1tqcxzgl1z.cloudfront.net/iconduck/image/upload/w_614,h_614,c_fit/f_png/e_colorize:0,co_rgb:000000/w_644,h_644,c_lpad/e_trim:1/w_512,h_512,c_fit/s3.prod/assets.00/assta9ya26no'
									width={25}
									height={25}
								/>
							</Button>
						</div>
						<Grid container>
							<Grid item xs>
								<Link href='register' variant='body2'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
							<Grid item>
								<Link href='resend?reg=true' variant='body2'>
									{'Forgot your password?'}
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

export default LoginForm;
