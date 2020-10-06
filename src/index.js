import * as serviceWorker from './serviceWorker';
import state from './Redux/state.js';
import { rerenderEntireTree } from './render';

// let rerenderEntireTree = () => {
// 	ReactDOM.render(
// 		<React.StrictMode>
// 			<App state={state} addPost={addPost} />
// 		</React.StrictMode>,
// 		document.getElementById('root'),
// 	);
// };
rerenderEntireTree(state);

serviceWorker.unregister();
