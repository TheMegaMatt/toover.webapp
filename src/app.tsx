import { MantineContext } from '@toover/mantine';
import { StrictMode } from 'react';
import AppRouter from './router';
import {Provider} from 'react-redux'
import {store} from "./store";
export default () => {
	return (
		<StrictMode>
			<Provider store={store}>
				<MantineContext>
					<AppRouter />
				</MantineContext>
			</Provider>
		</StrictMode>
	);
};
