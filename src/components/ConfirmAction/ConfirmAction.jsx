/** @format */

import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { statusLoadingState } from 'redux/contacts/selectors';
import { ButtonsContainer, customStyles } from './ConfirmAction.styled';
import { Button } from 'styled/shared.styled';

Modal.setAppElement('#modal-root');

const ConfirmAction = ({ modalIsOpen, closeModal, confirmAction, contact }) => {
	const statusLoading = useSelector(statusLoadingState);

	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				style={customStyles}
				onRequestClose={closeModal}
				contentLabel='Confirm Action'
			>
				<ButtonsContainer>
					<Button
						id={contact._id}
						type='button'
						disabled={statusLoading}
						onClick={confirmAction}
					>
						Delete
					</Button>
					<Button type='button' onClick={closeModal}>
						Cancel
					</Button>
				</ButtonsContainer>
			</Modal>
		</>
	);
};

export default ConfirmAction;
