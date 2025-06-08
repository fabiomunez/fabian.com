import './index.css';
import './assets/grid-pattern.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using the new React 18 API
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

// Render your app using the new API
root.render(<App />);