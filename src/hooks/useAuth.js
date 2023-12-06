/** @format */

import { useSelector } from 'react-redux';
import {
	selectUser,
	selectIsLoggedIn,
	selectIsRefreshing,
	selectIsRegistration,
	selectIsRegistering,
	selectIsLogging,
} from 'redux/auth/selectors';

export const useAuth = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const isRefreshing = useSelector(selectIsRefreshing);
	const user = useSelector(selectUser);
	const statusRegistration = useSelector(selectIsRegistration);
	const statusRegistrationProcess = useSelector(selectIsRegistering);
	const isLogging = useSelector(selectIsLogging);

	return {
		isLoggedIn,
		isRefreshing,
		user,
		statusRegistration,
		statusRegistrationProcess,
		isLogging,
	};
};
