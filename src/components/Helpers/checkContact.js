/** @format */

export function checkContact(contacts, name, email, phone, id) {
	const checkName = contacts.find(
		contact =>
			contact.name.toLowerCase() === name.toLowerCase() &&
			contact._id !== id &&
			contact.email === email &&
			contact.phone === phone
	);
	return checkName ? true : false;
}
