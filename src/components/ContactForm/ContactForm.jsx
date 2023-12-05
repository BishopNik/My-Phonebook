/** @format */

import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { contactsState, statusLoadingState } from 'redux/contacts/selectors';
import { fetchPostContact } from 'redux/contacts/fetchApi';
import { toastWindow, animationButton, checkContact, schema } from '../Helpers';
import {
	Label,
	FormikContact,
	InputFormik,
	SelectFormik,
	AddButton,
	CancelButton,
} from './ContactForm.styled.jsx';

function ContactForm({ onSubmitForm }) {
	const dispatch = useDispatch();
	const contacts = useSelector(contactsState);
	const statusLoading = useSelector(statusLoadingState);
	const cancelAddContact = useRef(null);
	const [selectedGender, setSelectedGender] = useState('');

	const handleGenderChange = ({ target }) => {
		const newGender = target.value;
		setSelectedGender(newGender);
	};

	const handleAddContact = ({ name, number }) => {
		const nameValue = `${name}&${selectedGender}`;
		const status = checkContact(contacts, nameValue);
		if (!status) {
			cancelAddContact.current = dispatch(fetchPostContact({ name: nameValue, number }));
		} else toastWindow(`${name} is already in contacts.`);
		return status;
	};

	const handleSubmit = async (contact, actions) => {
		try {
			await schema.validate(contact);
			const status = handleAddContact(contact);
			if (!status) {
				actions.resetForm();
				setSelectedGender('other');
			}
		} catch (validationErrors) {
			toastWindow(`Error: ${validationErrors.errors}`);
		}
	};

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					number: '',
				}}
				onSubmit={handleSubmit}
			>
				<FormikContact>
					<Label>
						Name
						<InputFormik
							type='text'
							name='name'
							pattern="^[a-zA-Zа-яА-Я]+([' \-]?[a-zA-Zа-яА-Я ])*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							required
							autoComplete='off'
							placeholder='Aneta'
						/>
					</Label>

					<Label>
						Gender
						<SelectFormik value={selectedGender} onChange={handleGenderChange}>
							<option value='other'>Other</option>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
							<option value='bussines'>Вussines</option>
						</SelectFormik>
					</Label>

					<Label>
						Number
						<InputFormik
							type='tel'
							name='number'
							pattern='\+?\d{1,4}[\-.\s]?\(?\d{1,3}\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}'
							title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
							required
							autoComplete='off'
							placeholder='48-787-453-876'
						/>
					</Label>

					<AddButton type='submit' onClick={animationButton} disabled={statusLoading}>
						Add contact
					</AddButton>
					<CancelButton
						type='button'
						disabled={!statusLoading}
						onClick={e => {
							animationButton(e);
							cancelAddContact.current?.abort();
						}}
					>
						❌
					</CancelButton>
				</FormikContact>
			</Formik>
		</>
	);
}

export default ContactForm;
