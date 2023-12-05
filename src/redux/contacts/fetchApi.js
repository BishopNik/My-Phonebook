/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/contacts');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const fetchPostContact = createAsyncThunk(
	'tasks/fetchPost',
	async ({ name, number }, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', { name, number });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchPutContact = createAsyncThunk(
	'tasks/fetchPut',
	async ({ id, name, number }, thunkAPI) => {
		try {
			const response = await axios.patch(`/contacts/${id}`, { name, number });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchDelContact = createAsyncThunk('tasks/fetchDel', async (id, thunkAPI) => {
	try {
		const response = await axios.delete(`/contacts/${id}`);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
