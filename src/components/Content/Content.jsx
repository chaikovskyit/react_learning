import React from 'react';
// import s from './Content.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Content = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				posts={props.contentPage.posts}
				newPostText={props.contentPage.newPostText}
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	);
};

export default Content;
