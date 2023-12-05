/** @format */

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactFiels, ContactName, ContactNumber, CardContact, DelButton } from './Contact.styled';
import ModalWindow from 'components/Modal';
import { animationButton, toastWindow } from '../Helpers';
import { fetchDelContact } from 'redux/contacts/fetchApi';

function Contact(contact) {
	const dispatch = useDispatch();
	const [modalIsOpen, setIsOpen] = useState(false);
	const [sexContact, setSexContact] = useState('');
	const [nameContact, setNameContact] = useState('');

	useEffect(() => {
		const index = contact.name.indexOf('&');
		if (index === -1) {
			setNameContact(contact.name);
			return;
		}

		const leng = contact.name.length;
		const sex = contact.name.slice(index + 1, leng) ?? '';
		const name = contact.name.slice(0, index);
		setSexContact(sex);
		setNameContact(name);
	}, [contact.name]);

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
		dispatch(fetchDelContact(contact.id));
		toastWindow(`Contact deleted.`);
		closeModal();
	};

	return (
		<>
			<CardContact onClick={openModal}>
				<ContactFiels>
					<ContactName>🖌️ Name:</ContactName>
					<ContactNumber>{nameContact}</ContactNumber>
				</ContactFiels>
				<ContactFiels>
					<ContactName>📱 Number:</ContactName>
					<ContactNumber>{contact.number}</ContactNumber>
				</ContactFiels>
				<DelButton type='button' onClick={handleDeleteContact}>
					🗑️
				</DelButton>
			</CardContact>
			<ModalWindow
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				deleteContact={handleDeleteContact}
				contact={{ id: contact.id, name: nameContact, number: contact.number }}
				sex={sexContact}
			/>
		</>
	);
}

export default Contact;
