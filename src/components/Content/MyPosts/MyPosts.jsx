import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	let posts = [
		{ id: 1, message: 'Hi, how are you', like: 1, disLike: 12 },
		{ id: 2, message: 'Learn React', like: 12, disLike: 0 },
	];
	let postsElement = posts.map((p) => {
		return <Post message={p.message} like={p.like} disLike={p.disLike} />;
	});
	
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>{postsElement}</div>
		</div>
	);
};

export default MyPosts;
