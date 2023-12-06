/** @format */

import { useSelector } from 'react-redux';
import {
	selectUser,
	selectIsLoggedIn,
	selectIsRefreshing,
	selectIsRegistration,
	selectIsRegistering,
	selectIsLogging,
	selectStatusResend,
	selectIsResend,
	statusUserError,
} from 'redux/auth/selectors';

export const useAuth = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const isRefreshing = useSelector(selectIsRefreshing);
	const user = useSelector(selectUser);
	const statusRegistration = useSelector(selectIsRegistration);
	const statusRegistrationProcess = useSelector(selectIsRegistering);
	const isLogging = useSelector(selectIsLogging);
	const statusResend = useSelector(selectStatusResend);
	const isResend = useSelector(selectIsResend);
	const errorUser = useSelector(statusUserError);

	return {
		isLoggedIn,
		isRefreshing,
		user,
		statusRegistration,
		statusRegistrationProcess,
		isLogging,
		statusResend,
		isResend,
		errorUser,
	};
};
