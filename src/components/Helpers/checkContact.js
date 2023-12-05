/** @format */

export function checkContact(contacts, name, id) {
	const checkName = contacts.find(
		contact => contact.name.toLowerCase() === name.toLowerCase() && contact.id !== id
	);
	return checkName ? true : false;
}
