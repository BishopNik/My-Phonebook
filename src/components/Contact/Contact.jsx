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
import ConfirmAction from 'components/ConfirmAction';
import { animationButton, toastInfo, getGenderIcon } from 'components/Helpers';
import { fetchDelContact } from 'redux/contacts/fetchApi';

function Contact({ contact }) {
	const dispatch = useDispatch();
	const [modalIsOpen, setIsOpen] = useState(false);
	const [confirmWindowIsOpen, setConfirmWindowIsOpen] = useState(false);

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

	const closeModalConfirmwindow = () => {
		setConfirmWindowIsOpen(false);
	};

	const handleDeleteContact = e => {
		animationButton(e);
		dispatch(fetchDelContact(_id));
		toastInfo(`Contact deleted.`);
		if (modalIsOpen) closeModalConfirmwindow();
	};

	const openConfirmWindow = () => {
		setConfirmWindowIsOpen(true);
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
				<DelButton type='button' onClick={openConfirmWindow}>
					🗑️
				</DelButton>
			</CardContact>
			<ModalWindow
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				deleteContact={openConfirmWindow}
				contact={{ _id, name, phone, email, gender }}
			/>
			<ConfirmAction
				modalIsOpen={confirmWindowIsOpen}
				closeModal={closeModalConfirmwindow}
				confirmAction={handleDeleteContact}
				contact={{ _id }}
			/>
		</>
	);
}

export default Contact;
