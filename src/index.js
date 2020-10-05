import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
	{ id: 1, message: 'Hi, how are you', like: 1, disLike: 12 },
	{ id: 2, message: 'Learn React', like: 12, disLike: 0 },
];

ReactDOM.render(
	<React.StrictMode>
		<App posts={posts} />
	</React.StrictMode>,
	document.getElementById('root'),
);

serviceWorker.unregister();
