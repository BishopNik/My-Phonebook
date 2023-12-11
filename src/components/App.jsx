/** @format */

import { Toaster } from 'react-hot-toast';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import SharedLayout from './SharedLayout';
import Loader from 'components/Loader';
import { resetError } from 'redux/auth/authSlice';
import { toastError } from 'components/Helpers';

const Phonebook = lazy(() => import('pages/Phonebook'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Verify = lazy(() => import('pages/Verify'));
const ResendConfirmEmail = lazy(() => import('pages/ResendConfirmEmail'));
const ChangeSettings = lazy(() => import('pages/ChangeSettings'));

function App() {
	const dispatch = useDispatch();
	const { isRefreshing, errorUser } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	useEffect(() => {
		if (errorUser !== null && errorUser !== 'Unable to fetch user') toastError(`${errorUser}`);
		dispatch(resetError());
	}, [dispatch, errorUser]);

	return isRefreshing ? (
		<Loader />
	) : (
		<>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Login />} />
					<Route
						path='/changesettings'
						element={
							<PrivateRoute redirectTo='/login' component={<ChangeSettings />} />
						}
					/>
					<Route
						path='/phonebook'
						element={<PrivateRoute redirectTo='/login' component={<Phonebook />} />}
					/>
					<Route
						path='/register'
						element={
							<RestrictedRoute redirectTo='/phonebook' component={<Register />} />
						}
					/>
					<Route
						path='/login'
						element={<RestrictedRoute redirectTo='/phonebook' component={<Login />} />}
					/>
					<Route
						path='/verify'
						element={<RestrictedRoute redirectTo='/phonebook' component={<Verify />} />}
					/>
					<Route
						path='/resend'
						element={
							<RestrictedRoute
								redirectTo='/phonebook'
								component={<ResendConfirmEmail />}
							/>
						}
					/>
				</Route>
			</Routes>
			<Toaster
				position='top-right'
				reverseOrder={false}
				gutter={8}
				toastOptions={{
					duration: 5000,
					style: {
						background: '#fdfbea',
						color: '#000000',
					},
				}}
			/>
		</>
	);
}

export default App;
