import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

export default () => {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
};
