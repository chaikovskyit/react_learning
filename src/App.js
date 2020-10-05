import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Nav />
				<div className='app-wrapper-content'>
					<Route path='/content' render={() => <Content />} />
					<Route path='/dialogs' render={() => <Dialogs />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
