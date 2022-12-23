import { Outlet, RouteObject } from 'react-router-dom';
import LocationList from './pages/locations-list';

export const LocationsRoutes: RouteObject[] = [
	{
		path: 'locations',
		element: <Outlet />,
		children: [{ path: '', element: <LocationList /> }],
	},
];
