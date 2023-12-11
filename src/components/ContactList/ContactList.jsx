/** @format */

import { useEffect, useState } from 'react';
import { useDebounce } from 'react-use';
import { useSelector, useDispatch } from 'react-redux';
import Contact from 'components/Contact';
import { ContactContainer, ContactsBox } from './ContactList.styled';
import { contactsState } from 'redux/contacts/selectors';
import { filterState } from 'redux/filter/selectors';
import { fetchAllContacts } from 'redux/contacts/fetchApi';

function ContactList() {
	const dispatch = useDispatch();
	const filterValue = useSelector(filterState);
	const contacts = useSelector(contactsState);
	const [filteredContacts, setFilteredContacts] = useState([]);

	useDebounce(
		() => {
			const filtered = contacts
				? contacts
						.filter(contact =>
							contact.name.toLowerCase().includes(filterValue?.toLowerCase())
						)
						.reverse()
				: [];
			setFilteredContacts(filtered);
		},
		250,
		[contacts, filterValue]
	);

	useEffect(() => {
		dispatch(fetchAllContacts());
	}, [dispatch]);

	return (
		<ContactsBox>
			{filteredContacts?.map(contact => (
				<ContactContainer key={contact._id}>
					<Contact contact={contact} />
				</ContactContainer>
			))}
		</ContactsBox>
	);
}

export default ContactList;
