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

        <Car name={'Skoda'} year={2007}>
          <p style={{color: 'red'}}>COLOR</p>
        </Car>
        <Car name={'Ford'} year={2008}>
          <p style={{color: 'yealow'}}>COLOR</p>
        </Car>
        <Car name={'Tesla'} year={2013}>
          <p style={{color: 'green'}}>COLOR</p>
        </Car>

    </div>
  );
}

export default App;
