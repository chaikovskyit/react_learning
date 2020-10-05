import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);

	let newMessageElement = React.createRef();
	let addMessage = () => {
		let text = newMessageElement.current.value;
		alert(text);
	};

	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogItems}>{dialogsElements}</div>
				<div className={s.messages}>{messagesElements}</div>
			</div>
			<div>
				<textarea ref={newMessageElement}></textarea>
				<button onClick={addMessage}>Add message</button>
			</div>
		</div>
	);
};

export default Dialogs;
