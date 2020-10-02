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
	let dialogs = [
		{ id: 1, name: 'Yoda' },
		{ id: 2, name: 'BatMan' },
		{ id: 3, name: 'SuperMan' },
		{ id: 4, name: 'SpiderMan' },
		{ id: 5, name: 'Hulk' },
		{ id: 6, name: 'IronMan' },
		{ id: 7, name: 'CapitanAmerica' },
	];
	let messages = [
		{ id: 1, message: 'Hello' },
		{ id: 2, message: 'How are you' },
		{ id: 3, message: 'I kill you' },
		{ id: 4, message: 'Not today' },
		{ id: 5, message: 'Ahahaha' },
		{ id: 6, message: 'It is not fun' },
		{ id: 7, message: 'I want eat' },
	];

	let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = messages.map((m) => <Message message={m.message} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>{dialogsElements}</div>
			<div className={s.messages}>{messagesElements}</div>
		</div>
	);
};

export default Dialogs;
