import React from 'react';
import './App.css';
import {BetterNavMenu} from './components/navbar/BetterNavMenu';
import Header from './components/header/Header';
import { motion, useCycle } from "framer-motion";
import Typical from 'react-typical';

const App = () => {
  return (
    <div id="content">
      <Header/>
      <BetterNavMenu/>
    </div>
      
  );
}

export default App;
