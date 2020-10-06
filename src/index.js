import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state.js';
import { addPost } from './Redux/state';
import { BrowserRouter } from 'react-router-dom';
import { updateNewPostText } from './Redux/state';
import { subscribe } from './Redux/state';

let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
		</BrowserRouter>,
		document.getElementById('root'),
	);
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
