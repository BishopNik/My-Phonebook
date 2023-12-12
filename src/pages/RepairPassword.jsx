/** @format */

import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockResetIcon from '@mui/icons-material/LockReset';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { repairPassword } from 'redux/auth/operations';
import { toastError } from 'components/Helpers';
import Loader from 'components/Loader';
import { useAuth } from 'hooks';

const defaultTheme = createTheme();

const RepairPassword = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { statusRegistration, statusRegistrationProcess } = useAuth();

	useEffect(() => {
		if (statusRegistration) navigate('/login');
	}, [navigate, statusRegistration]);

	const paramsURL = new URLSearchParams(location.search);
	const verificationToken = paramsURL.get('vt');
	const { id } = useParams();

	const submitForm = async ({ password, сonfirm_password }) => {
		if (password !== сonfirm_password) {
			toastError("Passwords don't match");
			return;
		}
		await dispatch(
			repairPassword({
				verificationToken,
				id,
				password,
			})
		);
	};

	const handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		submitForm({
			password: data.get('password'),
			сonfirm_password: data.get('сonfirm_password'),
		});
	};

	return (
		<>
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
							<LockResetIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Repair password
						</Typography>
						<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
							<TextField
								margin='normal'
								required
								fullWidth
								name='сonfirm_password'
								label='Сonfirm Password'
								type='password'
								id='сonfirm_password'
								autoComplete='current-password'
							/>

							<Button
								disabled={statusRegistrationProcess}
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
							>
								Repair password
							</Button>

							{statusRegistrationProcess ? <Loader /> : null}
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</>
	);
};

export default RepairPassword;
