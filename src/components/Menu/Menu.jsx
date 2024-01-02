/** @format */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut, deleteUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import ConfirmAction from 'components/ConfirmAction';
import { toastInfo } from 'components/Helpers';

import { NavMenu, NavItem, UserItem, Button, User, Account, AccountID } from './Menu.styled';

const Menu = ({ onClickHandler }) => {
	const dispatch = useDispatch();
	const { user, errorUser } = useAuth();
	const [confirmWindowIsOpen, setConfirmWindowIsOpen] = useState(false);

	const closeModalConfirmWindow = () => {
		setConfirmWindowIsOpen(false);
	};

	const handleOpenConfirmWindow = () => {
		setConfirmWindowIsOpen(true);
	};

	const deleteHandler = async () => {
		onClickHandler();
		if (confirmWindowIsOpen) closeModalConfirmWindow();
		const idUser = user.id;
		await dispatch(logOut());
		await dispatch(deleteUser(idUser));
		if (!errorUser) toastInfo(`User deleted.`);
	};

	const logoutHandler = () => {
		onClickHandler();
		dispatch(logOut());
	};

	return (
		<NavMenu id='menu'>
			<User>
				<Account>User account</Account>
				<AccountID>{user.id}</AccountID>
			</User>
			<UserItem> {user.name}</UserItem>
			<NavItem onClick={onClickHandler} to='/settings' end>
				Change Setting
			</NavItem>
			<Button type='button' onClick={handleOpenConfirmWindow}>
				Delete Account
			</Button>
			<Button type='button' onClick={logoutHandler}>
				Logout
			</Button>
			<ConfirmAction
				modalIsOpen={confirmWindowIsOpen}
				closeModal={closeModalConfirmWindow}
				confirmAction={deleteHandler}
				contact={user.id}
			/>
		</NavMenu>
	);
};

export default Menu;
