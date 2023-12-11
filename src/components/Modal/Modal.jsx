/** @format */

import Modal from 'react-modal';

import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, useFormik } from 'formik';
import { statusLoadingState, contactsState, statusError } from 'redux/contacts/selectors';
import {
	FormBox,
	ContactInput,
	ButtonsContainer,
	InputContainer,
	Label,
	LabelName,
	Avatar,
	ContactBox,
	customStyles,
} from './Modal.styled';
import { Button } from 'styled/shared.styled';
import { fetchPutContact } from 'redux/contacts/fetchApi';
import { checkContact, toastError, schema, getGenderIcon } from 'components/Helpers';

Modal.setAppElement('#modal-root');

const ModalWindow = ({ modalIsOpen, closeModal, deleteContact, contact }) => {
	const dispatch = useDispatch();
	const contacts = useSelector(contactsState);
	const error = useSelector(statusError);
	const [editContact, setEditContact] = useState({
		_id: '',
		name: '',
		phone: '',
		email: '',
		gender: '',
	});
	const [editEnable, setEditEnable] = useState(false);
	const [cancelEditContact, setCancelEditContact] = useState(false);
	const nameInput = useRef(null);
	const emailInput = useRef(null);
	const phoneInput = useRef(null);
	const cancelPutContact = useRef(null);
	const statusLoading = useSelector(statusLoadingState);

	const { _id, name, phone, email, gender } = contact;
	const avatarComponent = <Avatar>{getGenderIcon(gender)}</Avatar>;

	const idle = !editEnable && !cancelEditContact;
	const edit = editEnable && !cancelEditContact;

	const formik = useFormik({
		initialValues: {
			_id,
			name,
			phone,
			email,
			gender,
		},
		onSubmit: contact => {
			handlePutContact(contact);
		},
	});

	useEffect(() => {
		if (!statusLoading) {
			setCancelEditContact(false);
		}
		if (error) {
			formik.setFieldValue('name', editContact.name);
			formik.setFieldValue('phone', editContact.phone);
			formik.setFieldValue('email', editContact.email);
			formik.setFieldValue('gender', editContact.gender);
		}
	}, [
		editContact.email,
		editContact.gender,
		editContact.name,
		editContact.phone,
		error,
		formik,
		statusLoading,
	]);

	useEffect(() => {
		if (!nameInput.current) {
			return;
		}

		if (editEnable) {
			setEditContact(contact);
			nameInput.current.style = 'background-color: #fcfcfc;';
			emailInput.current.style = 'background-color: #fcfcfc;';
			phoneInput.current.style = 'background-color: #fcfcfc;';
			nameInput.current.focus();
		} else {
			nameInput.current.style = 'background-color: transparent;';
			emailInput.current.style = 'background-color: transparent;';
			phoneInput.current.style = 'background-color: transparent;';
		}
	}, [contact, editEnable]);

	const handleEditContact = e => {
		setEditEnable(true);
	};

	const handlePutContact = contact => {
		setEditContact(contact);
		schema
			.validate(contact)
			.then(() => {
				const { _id, name } = contact;
				const status = checkContact(contacts, name, email, phone, _id);
				if (!status) {
					setEditEnable(false);
					cancelPutContact.current = dispatch(fetchPutContact(contact));
					setCancelEditContact(true);
				} else toastError(`Please change contacts.`);
			})
			.catch(validationErrors => {
				toastError(`Error: ${validationErrors.errors}`);
			});
	};

	const handleCancelEditContact = () => {
		setEditEnable(false);
		formik.setFieldValue('name', name);
		formik.setFieldValue('phone', phone);
		formik.setFieldValue('email', email);
	};

	const afterOpenModal = () => {
		formik.setFieldValue('name', name);
		formik.setFieldValue('phone', phone);
		formik.setFieldValue('email', email);
	};

	const handleModalClose = () => {
		formik.resetForm();
		closeModal();
	};

	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				style={customStyles}
				onAfterOpen={afterOpenModal}
				onRequestClose={handleModalClose}
				contentLabel='Contact info'
			>
				<Formik
					initialValues={{
						_id: formik.values._id,
						name: formik.values.name,
						phone: formik.values.phone,
						email: formik.values.email,
						gender: formik.values.gender,
					}}
					onSubmit={formik.handleSubmit}
				>
					<FormBox>
						<ContactBox>
							<InputContainer>
								<Label ref={nameInput}>
									<LabelName>Name:</LabelName>
									<ContactInput
										name='name'
										type='text'
										{...formik.getFieldProps('name')}
										disabled={!editEnable}
									/>
								</Label>
								<Label ref={emailInput}>
									<LabelName>Email:</LabelName>
									<ContactInput
										name='email'
										type='email'
										{...formik.getFieldProps('email')}
										disabled={!editEnable}
									/>
								</Label>
								<Label ref={phoneInput}>
									<LabelName>Phone:</LabelName>
									<ContactInput
										name='phone'
										type='tel'
										{...formik.getFieldProps('phone')}
										disabled={!editEnable}
									/>
								</Label>
							</InputContainer>
							<>{avatarComponent}</>
						</ContactBox>

						<ButtonsContainer>
							{edit && (
								<Button type='submit' disabled={statusLoading}>
									✅
								</Button>
							)}
							{idle && (
								<Button
									type='button'
									disabled={statusLoading}
									onClick={handleEditContact}
								>
									Edit
								</Button>
							)}
							{cancelEditContact && (
								<Button
									type='button'
									disabled={!statusLoading}
									onClick={e => {
										cancelPutContact.current?.abort();
									}}
								>
									❌
								</Button>
							)}

							<Button
								type='button'
								disabled={!editEnable}
								onClick={handleCancelEditContact}
							>
								↪️
							</Button>

							<Button
								id={_id}
								type='button'
								disabled={statusLoading}
								onClick={deleteContact}
							>
								Delete
							</Button>
							<Button type='button' onClick={handleModalClose}>
								Close
							</Button>
						</ButtonsContainer>
					</FormBox>
				</Formik>
			</Modal>
		</>
	);
};

export default ModalWindow;
