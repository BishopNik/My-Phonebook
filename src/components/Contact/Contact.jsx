/** @format */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	ContactFiels,
	ContactName,
	ContactNumber,
	CardContact,
	DelButton,
	Gender,
} from './Contact.styled';
import ModalWindow from 'components/Modal';
import { animationButton, toastWindow, getGenderIcon } from '../Helpers';
import { fetchDelContact } from 'redux/contacts/fetchApi';

function Contact({ contact }) {
	const dispatch = useDispatch();
	const [modalIsOpen, setIsOpen] = useState(false);

	const { _id, name, email, gender, phone } = contact;

	const openModal = ({ target }) => {
		if (target.nodeName === 'BUTTON') {
			return;
		}
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const handleDeleteContact = e => {
		animationButton(e);
		dispatch(fetchDelContact(_id));
		toastWindow(`Contact deleted.`);
		if (modalIsOpen) closeModal();
	};

	return (
		<>
			<CardContact onClick={openModal}>
				<Gender>{getGenderIcon(gender)}</Gender>
				<ContactFiels>
					<ContactName>🖌️ Name:</ContactName>
					<ContactNumber>{name}</ContactNumber>
				</ContactFiels>
				<ContactFiels>
					<ContactName>✉️ Email:</ContactName>
					<ContactNumber>{email}</ContactNumber>
				</ContactFiels>
				<ContactFiels>
					<ContactName>📞 Phone:</ContactName>
					<ContactNumber>{phone}</ContactNumber>
				</ContactFiels>
				<DelButton type='button' onClick={handleDeleteContact}>
					🗑️
				</DelButton>
			</CardContact>
			<ModalWindow
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				deleteContact={handleDeleteContact}
				contact={{ _id, name, phone, email, gender }}
			/>
		</>
	);
}

export default Contact;
