// import logo from './logo.svg';
import React from 'react';
import Hello from './Hello'
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';

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
      <Wrapper>
        <Hello color='blue'><strong>123</strong></Hello>
        <Hello name='React' color='blue' isSpecial />
        <Hello name='React' color='pink' />
        <p style={style}>{name}</p>
        <div className='gray-box' // 요렇게도 가능합니다.
        ></div>
      </Wrapper>

      <Counter />
    </div>
  );
}

export default App;
