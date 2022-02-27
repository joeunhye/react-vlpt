// import logo from './logo.svg';
import React from 'react';
import Hello from './Hello'
import './App.css';

function App() {
  const name = 'React';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <div>
      {/* 요거슨 주석입니다*/}
      <Hello color='blue' />
      <Hello name='React' color='blue' />
      <p style={style}>{name}</p>
      <div className='gray-box' // 요렇게도 가능합니다.
      ></div>
    </div>
  );
}

export default App;
