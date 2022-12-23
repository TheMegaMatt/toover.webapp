import { RouteObject } from 'react-router-dom';
import Home from './pages/home';

export const HomeRoutes: RouteObject[] = [
	{
		path: 'home',
		element: <Home />,
	},
];
