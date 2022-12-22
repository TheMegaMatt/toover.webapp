import * as ReactDOM from 'react-dom/client';
import App from './app';

function main() {
  const elementById = document.getElementById('root') as HTMLElement;
  const root = ReactDOM.createRoot(elementById);
  root.render(<App />);
}

try {
    await main();
} catch (error) {
    console.error(error);
}
