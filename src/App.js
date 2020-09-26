import React from 'react';
import './App.css';
import Car from './Car/Car'

function App() {
  state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Skoda', year: '2012'},
      {name: 'Tesla', year: '2010'}
    ]
  }
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
