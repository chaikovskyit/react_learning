import React from 'react';
import './App.css';
import Car from './Car/Car'

function App() {
  const divStyle = {
    textAlign: 'center'
  }
  return (
    <div style={divStyle}>
        <h1>Hello world!!!</h1>

        <Car name={'Skoda'} year={2007} />
        <Car name={'Ford'} year={2008} />
        <Car name={'Tesla'} year={2013} />
    </div>
  );
}

export default App;
