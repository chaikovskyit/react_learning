import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
	return <div className={s.message}>{props.message}</div>;
};

export default Message;
