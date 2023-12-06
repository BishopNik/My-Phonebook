/** @format */

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const statusUserError = state => state.auth.error;

export const selectIsRegistration = state => state.auth.isRegistered;

export const selectIsRegistering = state => state.auth.isRegistering;

export const selectIsLogging = state => state.auth.isLogging;

export const selectStatusResend = state => state.auth.statusResend;

export const selectIsResend = state => state.auth.isResend;
