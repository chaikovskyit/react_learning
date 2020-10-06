import { rerenderEntireTree } from './../render';

let state = {
	contentPage: {
		posts: [
			{ id: 1, message: 'Hi, how are you', like: 1, disLike: 12 },
			{ id: 2, message: 'Learn React', like: 12, disLike: 0 },
		],
		newPostText: 'it-kamasutra',
	},

	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Yoda' },
			{ id: 2, name: 'BatMan' },
			{ id: 3, name: 'SuperMan' },
			{ id: 4, name: 'SpiderMan' },
			{ id: 5, name: 'Hulk' },
			{ id: 6, name: 'IronMan' },
			{ id: 7, name: 'CapitanAmerica' },
		],
		messages: [
			{ id: 1, message: 'Hello' },
			{ id: 2, message: 'How are you' },
			{ id: 3, message: 'I kill you' },
			{ id: 4, message: 'Not today' },
			{ id: 5, message: 'Ahahaha' },
			{ id: 6, message: 'It is not fun' },
			{ id: 7, message: 'I want eat' },
		],
	},
};

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.contentPage.newPostText,
		like: 0,
	};

	state.contentPage.posts.push(newPost);
	state.contentPage.newPostText('');
	rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
	state.contentPage.newPostText = newText;
	rerenderEntireTree(state);
};

export default state;
