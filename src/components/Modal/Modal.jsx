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
import { checkContact, toastWindow, schema } from '../Helpers';

Modal.setAppElement('#modal-root');

const ModalWindow = ({ modalIsOpen, closeModal, deleteContact, contact, sex }) => {
	const dispatch = useDispatch();
	const contacts = useSelector(contactsState);
	const error = useSelector(statusError);
	const [editContact, setEditContact] = useState({ id: '', name: '', number: '' });
	const [editEnable, setEditEnable] = useState(false);
	const [cancelEditContact, setCancelEditContact] = useState(false);
	const nameInput = useRef(null);
	const numberInput = useRef(null);
	const cancelPutContact = useRef(null);
	const statusLoading = useSelector(statusLoadingState);
	let avatarComponent;
	const formik = useFormik({
		initialValues: {
			id: contact.id,
			name: contact.name,
			number: contact.number,
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
			formik.setFieldValue('number', editContact.number);
		}
	}, [editContact.name, editContact.number, error, formik, statusLoading]);

	useEffect(() => {
		if (!nameInput.current) {
			return;
		}

		if (editEnable) {
			setEditContact(contact);
			nameInput.current.style = 'background-color: #f7f0fe;';
			numberInput.current.style = 'background-color: #f7f0fe;';
			nameInput.current.focus();
		} else {
			nameInput.current.style = 'background-color: transparent;';
			numberInput.current.style = 'background-color: transparent;';
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
				const name = `${contact.name}&${sex}`;
				const status = checkContact(contacts, contact.name, contact.id);
				if (!status) {
					setEditEnable(false);
					cancelPutContact.current = dispatch(
						fetchPutContact({ id: contact.id, name, number: contact.number })
					);
					setCancelEditContact(true);
				} else toastWindow(`Please change contacts.`);
			})
			.catch(validationErrors => {
				toastWindow(`Error: ${validationErrors.errors}`);
			});
	};

	const handleCancelEditContact = () => {
		setEditEnable(false);
		formik.setFieldValue('name', editContact.name);
		formik.setFieldValue('number', editContact.number);
	};

	const idle = !editEnable && !cancelEditContact;
	const edit = editEnable && !cancelEditContact;

	switch (sex) {
		case 'male':
			avatarComponent = <Avatar>👨🏻</Avatar>;
			break;
		case 'female':
			avatarComponent = <Avatar>👩🏻</Avatar>;
			break;
		case 'bussines':
			avatarComponent = <Avatar>🏢</Avatar>;
			break;
		case 'other':
			avatarComponent = <Avatar>👤</Avatar>;
			break;

		default:
			avatarComponent = <Avatar>❔</Avatar>;
	}

	const afterOpenModal = () => {
		formik.setFieldValue('name', contact.name);
		formik.setFieldValue('number', contact.number);
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
						id: formik.values.id,
						name: formik.values.name,
						number: formik.values.number,
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
								<Label ref={numberInput}>
									<LabelName>Number:</LabelName>
									<ContactInput
										name='number'
										type='tel'
										{...formik.getFieldProps('number')}
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
								id={contact.id}
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
