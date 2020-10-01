import React from 'react';
import './App.css';
// import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Nav />
			<div className='app-wrapper-content'>
				{/* <Content /> */}
				<Dialogs />
			</div>
		</div>
	);
};

export default App;
