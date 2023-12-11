/** @format */

// import { toast } from 'react-toastify';
import toast from 'react-hot-toast';

export function toastError(mes) {
	toast.error(mes, {
		icon: '❌',
	});
}

export function toastInfo(mes) {
	toast.success(mes, {
		icon: '✅',
	});
}
