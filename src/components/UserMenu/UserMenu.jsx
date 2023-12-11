/** @format */

import { useAuth } from 'hooks';
import Menu from 'components/Menu';

import { NavItem, NavMenu, UserAvatar } from './UserMenu.styled';
import { useEffect, useState, useCallback } from 'react';

export const UserMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user } = useAuth();

	const onEscHandler = useCallback(
		({ key }) => {
			if (key === 'Escape') {
				setIsOpen(false);
			}
		},
		[setIsOpen]
	);

	const closeMenu = useCallback(
		({ target }) => {
			const menuContainer = document.getElementById('menu');
			const avatarMenu = document.getElementById('avatar_menu');
			if (
				menuContainer &&
				!menuContainer?.contains(target) &&
				!avatarMenu?.contains(target)
			) {
				setIsOpen(false);
			}
		},
		[setIsOpen]
	);

	useEffect(() => {
		document.addEventListener('keydown', onEscHandler);
		document.addEventListener('click', closeMenu);

		return () => {
			document.removeEventListener('keydown', onEscHandler);
			document.removeEventListener('click', closeMenu);
		};
	}, [closeMenu, onEscHandler]);

	const onClickHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<NavMenu>
				<NavItem to='/phonebook' end>
					☎️ PHONEBOOK ☎️
				</NavItem>

				<UserAvatar id='avatar_menu' onClick={onClickHandler} src={user.avatarURL} />
				{isOpen && <Menu onClickHandler={onClickHandler} />}
			</NavMenu>
		</>
	);
};
