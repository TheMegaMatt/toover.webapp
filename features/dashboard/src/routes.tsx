import { HomeRoutes } from '@toover/home';
import { LocationsRoutes } from '@toover/locations';
import { AppLayout } from './layout';

export const DashboardRoutes = [
	{
		path: 'app',
		element: <AppLayout />,
		children: [...HomeRoutes, ...LocationsRoutes],
	},
];
