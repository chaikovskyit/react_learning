import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
	{ id: 1, message: 'Hi, how are you', like: 1, disLike: 12 },
	{ id: 2, message: 'Learn React', like: 12, disLike: 0 },
];

let dialogs = [
	{ id: 1, name: 'Yoda' },
	{ id: 2, name: 'BatMan' },
	{ id: 3, name: 'SuperMan' },
	{ id: 4, name: 'SpiderMan' },
	{ id: 5, name: 'Hulk' },
	{ id: 6, name: 'IronMan' },
	{ id: 7, name: 'CapitanAmerica' },
];
let messages = [
	{ id: 1, message: 'Hello' },
	{ id: 2, message: 'How are you' },
	{ id: 3, message: 'I kill you' },
	{ id: 4, message: 'Not today' },
	{ id: 5, message: 'Ahahaha' },
	{ id: 6, message: 'It is not fun' },
	{ id: 7, message: 'I want eat' },
];

ReactDOM.render(
	<React.StrictMode>
		<App posts={posts} dialogs={dialogs} messages={messages} />
	</React.StrictMode>,
	document.getElementById('root'),
);

serviceWorker.unregister();
