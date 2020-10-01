import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://robohash.org/5" alt="" />
            {props.message}
            <div>
                <img src="https://e7.pngegg.com/pngimages/1021/749/png-clipart-facebook-like-icon-social-media-marketing-like-button-facebook-social-network-advertising-like-text-hand.png" alt=""/>
                <span>Like: {props.like}</span>  
            </div>
            <div>
                <span>Dislike:</span>
            </div>
        </div>
    );
}

export default Post;