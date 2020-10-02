import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img
					src='https://funduk.ua/upload/iblock/920/9204ffce5f9431a5362f57a507ffd0c2.png'
					alt=''
				/>
			</div>
			<div className={s.descriptionBlock}>ava + description</div>
		</div>
	);
};

export default ProfileInfo;
