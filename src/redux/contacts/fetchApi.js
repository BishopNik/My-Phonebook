/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/api/contacts');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const fetchPostContact = createAsyncThunk('tasks/fetchPost', async (contact, thunkAPI) => {
	try {
		const response = await axios.post('/api/contacts', contact);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const fetchPutContact = createAsyncThunk(
	'tasks/fetchPut',
	async ({ _id, name, gender, email, phone }, thunkAPI) => {
		try {
			const response = await axios.put(`/api/contacts/${_id}`, {
				name,
				gender,
				email,
				phone,
			});
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchDelContact = createAsyncThunk('tasks/fetchDel', async (id, thunkAPI) => {
	try {
		const response = await axios.delete(`/api/contacts/${id}`);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
