import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElement = props.posts.map((p) => {
		return <Post message={p.message} like={p.like} disLike={p.disLike} />;
	});

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>{postsElement}</div>
		</div>
	);
};

export default MyPosts;
