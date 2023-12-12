/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://nodejs-rest-api-8x2z.onrender.com/';
axios.defaults.baseURL = 'http://localhost:4000';

// Utility to add JWT
const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
	try {
		const res = await axios.post('/api/auth/register', credentials);

		return res.data;
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
	try {
		const res = await axios.post('/api/auth/login', credentials);
		// After successful login, add the token to the HTTP header
		setAuthHeader(res.data.token);
		return res.data;
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		await axios.post('/api/auth/logout');
		// After a successful logout, remove the token from the HTTP header
		clearAuthHeader();
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
	// Reading the token from the state via getState()
	const state = thunkAPI.getState();
	const persistedToken = state.auth.token;

	if (persistedToken === null) {
		// If there is no token, exit without performing any request
		return thunkAPI.rejectWithValue('Unable to fetch user');
	}

	try {
		// If there is a token, add it to the HTTP header and perform the request
		setAuthHeader(persistedToken);
		const res = await axios.get('/api/auth/current');
		return res.data;
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const resendEmail = createAsyncThunk('auth/verify', async (credentials, thunkAPI) => {
	try {
		await axios.post('/api/auth/verify', credentials);
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const changeAvatar = createAsyncThunk('auth/avatar', async (credentials, thunkAPI) => {
	try {
		const res = await axios.patch('/api/auth/avatar', credentials);
		return res.data;
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const deleteUser = createAsyncThunk('auth/delete', async (credentials, thunkAPI) => {
	try {
		await axios.post('/api/auth/delete', credentials);
		clearAuthHeader();
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const changeName = createAsyncThunk('auth/name', async (credentials, thunkAPI) => {
	try {
		const res = await axios.patch('/api/auth/name', credentials);
		return res.data;
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const changePassword = createAsyncThunk('auth/pass', async (credentials, thunkAPI) => {
	try {
		const res = await axios.patch('/api/auth/pass', credentials);
		setAuthHeader(res.data.token);
		return res.data;
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const repairPassword = createAsyncThunk('auth/repair', async (credentials, thunkAPI) => {
	try {
		const res = await axios.patch('/api/auth/repair', credentials);

		return res.data;
	} catch ({ response }) {
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});
