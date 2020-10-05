import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state.js';
import { addPost } from './Redux/state';

ReactDOM.render(
	<React.StrictMode>
		<App state={state} addPost={addPost} />
	</React.StrictMode>,
	document.getElementById('root'),
);

serviceWorker.unregister();
