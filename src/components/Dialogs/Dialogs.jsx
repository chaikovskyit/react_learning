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
	let dialogsData = [
		{ id: 1, name: 'Yoda' },
		{ id: 2, name: 'BatMan' },
		{ id: 3, name: 'SuperMan' },
		{ id: 4, name: 'SpiderMan' },
		{ id: 5, name: 'Hulk' },
		{ id: 6, name: 'IronMan' },
		{ id: 7, name: 'CapitanAmerica' },
	];

	let messagesData = [
		{ id: 1, message: 'Hello' },
		{ id: 2, message: 'How are you' },
		{ id: 3, message: 'I kill you' },
		{ id: 4, message: 'Not today' },
		{ id: 5, message: 'Ahahaha' },
		{ id: 6, message: 'It is not fun' },
		{ id: 7, message: 'I want eat' },
	];

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[2].id} />
			</div>
			<div className={s.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
			</div>
		</div>
	);
};

export default Dialogs;
