import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavMenu from './components/navbar/NavMenu';
import JumboHeader from './components/header/JumboHeader';

const App = () => {
  return (
    <div className="App">
      <JumboHeader></JumboHeader>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <span role="img" aria-label="heart">💖</span> Mandy
        </p>
      </header>
      <NavMenu></NavMenu>
    </div>
  );
}

export default App;
