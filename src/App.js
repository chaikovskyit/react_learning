import React from 'react';
import './App.css';
import Content from './components/Content/Content.jsx';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
