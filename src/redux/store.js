/** @format */

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import filterSlice from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';
import { reducer as reduxFormReducer } from 'redux-form';

const persistConfig = {
	key: 'token',
	storage,
	whitelist: ['token'],
};

const tokenPersistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		contacts: contactsReducer,
		auth: tokenPersistedReducer,
		form: reduxFormReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
