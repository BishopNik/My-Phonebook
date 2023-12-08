/** @format */

export const getGenderIcon = type => {
	let avatar;
	switch (type) {
		case 'male':
			avatar = '👨🏻';
			break;
		case 'female':
			avatar = '👩🏻';
			break;
		case 'business':
			avatar = '🏢';
			break;
		case 'other':
			avatar = '👤';
			break;

		default:
			avatar = '❔';
	}

	return avatar;
};
