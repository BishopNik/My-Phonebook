/** @format */

export function checkContact(contacts, name, id) {
	const checkName = contacts.find(
		contact => contact.name.toLowerCase() === name.toLowerCase() && contact._id !== id
	);
	return checkName ? true : false;
}
