/** @format */

import { createSlice } from '@reduxjs/toolkit';
import {
	register,
	logIn,
	logOut,
	refreshUser,
	resendEmail,
	changeAvatar,
	changeName,
	changePassword,
	deleteUser,
	repairPassword,
} from './operations';

const initialState = {
	user: { id: null, name: null, email: null, avatarURL: null },
	token: null,
	isLoggedIn: false,
	isLogging: false,
	isRefreshing: false,
	isRegistering: false,
	isRegistered: false,
	statusResend: false,
	isResend: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetError: state => {
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.error = null;
				state.isRegistering = true;
				state.isRegistered = false;
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.isRegistering = false;
				state.isRegistered = true;
			})
			.addCase(register.rejected, (state, { payload }) => {
				state.isRegistering = false;
				if (payload) state.error = 'Error create user... Please change name or email.';
			})
			.addCase(logIn.pending, state => {
				state.error = null;
				state.isLogging = true;
			})
			.addCase(logIn.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.token = payload.token;
				state.isLoggedIn = true;
				state.isLogging = false;
			})
			.addCase(logIn.rejected, (state, { payload }) => {
				if (payload) state.error = 'Login error, please repeat.';
				state.isLogging = false;
			})
			.addCase(logOut.pending, state => {
				state.error = null;
			})
			.addCase(logOut.fulfilled, state => {
				state.user = { name: null, email: null };
				state.token = null;
				state.isLoggedIn = false;
			})
			.addCase(logOut.rejected, state => {
				state.error = 'Logout error...';
			})
			.addCase(refreshUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(refreshUser.fulfilled, (state, { payload }) => {
				state.user = payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(refreshUser.rejected, (state, { payload }) => {
				state.isRefreshing = false;
				state.error = payload;
			})
			.addCase(resendEmail.pending, state => {
				state.statusResend = true;
			})
			.addCase(resendEmail.fulfilled, state => {
				state.isResend = true;
				state.statusResend = false;
			})
			.addCase(resendEmail.rejected, (state, { payload }) => {
				state.statusResend = false;
				state.error = payload;
			})
			.addCase(changeAvatar.pending, state => {
				state.statusResend = true;
			})
			.addCase(changeAvatar.fulfilled, (state, { payload }) => {
				state.isResend = true;
				state.statusResend = false;
				state.user.avatarURL = payload.avatarURL;
			})
			.addCase(changeAvatar.rejected, (state, { payload }) => {
				state.statusResend = false;
				state.error = payload;
			})
			.addCase(changeName.pending, state => {
				state.error = null;
				state.isLogging = true;
			})
			.addCase(changeName.fulfilled, (state, { payload }) => {
				state.isLoggedIn = true;
				state.isLogging = false;
				state.user.name = payload.user.name;
			})
			.addCase(changeName.rejected, (state, { payload }) => {
				state.isLogging = false;
				state.error = payload;
			})
			.addCase(changePassword.pending, state => {
				state.error = null;
				state.isLogging = true;
			})
			.addCase(changePassword.fulfilled, (state, { payload }) => {
				state.isLoggedIn = true;
				state.isLogging = false;
				state.user = payload.user;
				state.token = payload.token;
			})
			.addCase(changePassword.rejected, (state, { payload }) => {
				state.isLogging = false;
				state.error = payload;
			})
			.addCase(deleteUser.pending, state => {
				state.error = null;
			})
			.addCase(deleteUser.fulfilled, (state, { payload }) => {
				state.user = { name: null, email: null };
				state.token = null;
			})
			.addCase(deleteUser.rejected, (state, { payload }) => {
				state.error = 'Delete user error...';
			})
			.addCase(repairPassword.pending, state => {
				state.error = null;
				state.isRegistering = true;
				state.isRegistered = false;
			})
			.addCase(repairPassword.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.isRegistering = false;
				state.isRegistered = true;
			})
			.addCase(repairPassword.rejected, (state, { payload }) => {
				state.isRegistering = false;
				if (payload) state.error = 'Error change password... Please repead.';
			});
	},
});

export const authReducer = authSlice.reducer;

export const { resetError } = authSlice.actions;
