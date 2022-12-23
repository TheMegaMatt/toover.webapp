import { AccountsRoutes } from '@toover/accounts';
import { DashboardRoutes } from '@toover/dashboard';
import { useRoutes } from 'react-router-dom';
import RootRoute from './root';

export default () => {
	return useRoutes([{ path: '', element: <RootRoute /> }, ...AccountsRoutes, ...DashboardRoutes]);
};
