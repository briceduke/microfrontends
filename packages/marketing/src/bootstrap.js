import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Mount the app
const mount = (el) => {
	ReactDOM.render(<App />, el);
};
// Dev case
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_marketing-dev-root');

	if (devRoot) mount(devRoot);
}

// Prod case
export { mount };
