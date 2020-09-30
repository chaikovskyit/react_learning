import React from  'react';

import classes from './Content.module.css';

const Content = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://funduk.ua/upload/iblock/920/9204ffce5f9431a5362f57a507ffd0c2.png" alt=""/>
            </div>
            <div>
                desc
            </div>
            <div>
                my post
                <div>
                new post
                </div>
            <div className={classes.post}>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Content;