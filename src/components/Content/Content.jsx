import React from  'react';
import s from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://funduk.ua/upload/iblock/920/9204ffce5f9431a5362f57a507ffd0c2.png" alt=""/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts />
            
        </div>
    );
}

export default Content;