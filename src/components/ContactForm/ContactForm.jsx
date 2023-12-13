/** @format */

import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { contactsState, statusLoadingState } from 'redux/contacts/selectors';
import { fetchPostContact } from 'redux/contacts/fetchApi';
import { toastError, animationButton, checkContact, schema } from '../Helpers';
import {
	Label,
	FormikContact,
	InputFormik,
	SelectFormik,
	AddButton,
	CancelButton,
	ButtonDiv,
} from './ContactForm.styled.jsx';

function ContactForm({ onSubmitForm }) {
	const dispatch = useDispatch();
	const contacts = useSelector(contactsState);
	const statusLoading = useSelector(statusLoadingState);
	const cancelAddContact = useRef(null);
	const [gender, setGender] = useState('other');

	const handleGenderChange = ({ target }) => {
		setGender(target.value);
	};

	const handleAddContact = ({ name, email, phone }) => {
		const status = checkContact(contacts, name, email, phone);
		if (!status) {
			cancelAddContact.current = dispatch(fetchPostContact({ name, gender, email, phone }));
		} else toastError(`${name} is already in contacts.`);
		return status;
	};

	const handleSubmit = async (contact, actions) => {
		try {
			const newContact = { ...contact, gender };
			await schema.validate(newContact);
			const status = handleAddContact(newContact);
			if (!status) {
				actions.resetForm();
				setGender('other');
			}
		} catch (validationErrors) {
			toastError(`Error: ${validationErrors.errors}`);
		}
	};

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					phone: '',
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
						Email
						<InputFormik
							type='text'
							name='email'
							title='Please enter a valid email address.'
							autoComplete='off'
							placeholder='aneta@gmail.com'
						/>
					</Label>

					<Label>
						Phone
						<InputFormik
							type='tel'
							name='phone'
							pattern='\+?\d{1,4}[\-.\s]?\(?\d{1,3}\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}'
							title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
							required
							autoComplete='off'
							placeholder='48-787-453-876'
						/>
					</Label>
					<ButtonDiv>
						<Label>
							Gender
							<SelectFormik value={gender} onChange={handleGenderChange}>
								<option value='other'>Other</option>
								<option value='male'>Male</option>
								<option value='female'>Female</option>
								<option value='business'>Вusiness</option>
							</SelectFormik>
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
					</ButtonDiv>
				</FormikContact>
			</Formik>
		</>
	);
}

export default ContactForm;
