/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'styled/shared.styled';
import { changeAvatar, changeName, changePassword } from 'redux/auth/operations';
import { toastError } from 'components/Helpers';
import { useNavigate } from 'react-router-dom';
import {
	Button,
	ButtonBox,
	Form,
	Input,
	FlexBoxMain,
	FlexBoxSection,
	FlexBox,
	Img,
	Label,
} from 'styled/shared.styled';
import { useAuth } from 'hooks';

const ChangeAvatar = () => {
	const [avatar, setAvatar] = useState(null);
	const [avatarURL, setAvatarURL] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		if (avatar) {
			const avatarObjectURL = URL.createObjectURL(avatar);
			setAvatarURL(avatarObjectURL);

			return () => URL.revokeObjectURL(avatarObjectURL);
		}
	}, [avatar]);

	const newPassword = (oldPas, newPas, confPas) => {
		if (newPas !== confPas) {
			toastError('Passwords do not match. Please change your password.');
			return oldPas;
		}
		return newPas;
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const newName = e.target.name.value;
			const oldPas = e.target.oldpassword.value;
			const newPas = e.target.password.value;
			const confPas = e.target.confirmpassword.value;
			const resultPas = newPassword(oldPas, newPas, confPas);

			if (newName) {
				await dispatch(changeName({ name: newName }));
			}
			if (resultPas !== oldPas) {
				await dispatch(
					changePassword({
						oldPassword: oldPas,
						newPassword: resultPas,
					})
				);
			}
			if (avatar) {
				const formData = new FormData();
				formData.append('avatar', avatar, avatar.name);
				await dispatch(changeAvatar(formData));
			}
			if (resultPas !== oldPas && oldPas !== null) navigate('/phonebook');
		} catch (error) {
			toastError('Error change settings', error);
		}
	};

	const handleFileChange = ({ target }) => {
		if (!target.files) {
			toastError('Please select image');
			return;
		}
		const file = target.files[0];
		if (file && file instanceof File && file.type.startsWith('image/')) {
			setAvatar(file);
		} else {
			toastError('Bad type file');
			target.value = '';
			setAvatarURL(user.avatarURL);
			setAvatar(null);
			target.click();
		}
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<FlexBoxMain>
					<FlexBoxSection>
						<FlexBox>
							<Label>
								Old name
								<Input type='text' name='oldname' value={user.name} disabled />
							</Label>
							<Label>
								New name
								<Input type='text' name='name' />
							</Label>
						</FlexBox>
						<FlexBox>
							<Label>
								Old password
								<Input type='password' name='oldpassword' />
							</Label>
							<Label>
								New password
								<Input type='password' name='password' />
							</Label>
							<Label>
								Confirm password
								<Input type='password' name='confirmpassword' />
							</Label>
						</FlexBox>
					</FlexBoxSection>
					<FlexBoxSection>
						<Img src={avatarURL || user.avatarURL} alt='user avatar' />
						<Input type='file' name='avatar' onChange={handleFileChange} />
						<ButtonBox>
							<Button type='submit'>Change</Button>
							<Button type='button' onClick={() => navigate('/phonebook')}>
								Cancel
							</Button>
						</ButtonBox>
					</FlexBoxSection>
				</FlexBoxMain>
			</Form>
		</Container>
	);
};

export default ChangeAvatar;
