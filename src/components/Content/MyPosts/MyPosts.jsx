import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' like='15' disLike='5'/>
                <Post message='Learn React' like='24' disLike='1'/>
            </div>
        </div>
    );
}

export default MyPosts;