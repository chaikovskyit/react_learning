import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	return (
		<div className={`${s.dialog} ${s.active}`}>
			<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				<DialogItem name='Yoda' id='1' />
				<DialogItem name='BatMan' id='2' />
				<DialogItem name='SuperMan' id='3' />
				<DialogItem name='SpiderMan' id='4' />
				<DialogItem name='Hulk' id='5' />
				<DialogItem name='IronMan' id='6' />
				<DialogItem name='CapitanAmerica' id='7' />
			</div>
			<div className={s.messages}>
				<Message message='Hello' />
				<Message message='How are you' />
				<Message message='I kill you' />
				<Message message='Not today' />
				<Message message='Ahahaha' />
				<Message message='It is not fun' />
				<Message message='I want eat' />
			</div>
		</div>
	);
};

export default Dialogs;
