import { RouteObject } from 'react-router-dom';
import AccountsLayout from './layout';
import Login from './pages/login';
import Logout from './pages/logout';

export const AccountsRoutes: RouteObject[] = [
	{
		path: 'accounts',
		element: <AccountsLayout />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'logout',
				element: <Logout />,
			},
		],
	},
];

export default AccountsRoutes;
