/** @format */

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { AppBar } from 'components/AppBar';

const SharedLayout = () => {
	return (
		<>
			<AppBar />

			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</>
	);
};

export default SharedLayout;
