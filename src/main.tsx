import { initLocalization } from '@toover/i18n';
import * as ReactDOM from 'react-dom/client';
import App from './app';

function main() {
	const elementById = document.getElementById('root') as HTMLElement;
	const root = ReactDOM.createRoot(elementById);
	root.render(<App />);
}

try {
	await initLocalization();
	await main();
} catch (error) {
	console.error(error);
}
