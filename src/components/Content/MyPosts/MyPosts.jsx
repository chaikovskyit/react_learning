import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	let postsData = [
		{ id: 1, message: 'Hi, how are you', like: 1, disLike: 12 },
		{ id: 2, message: 'Learn React', like: 12, disLike: 0 },
	];

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
			<div className={s.posts}>
				<Post
					message={postsData[0].message}
					like={postsData[0].like}
					disLike={postsData[0].disLike}
				/>
				<Post
					message={postsData[1].message}
					like={postsData[1].like}
					disLike={postsData[1].disLike}
				/>
			</div>
		</div>
	);
};

export default MyPosts;
