import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [myMode, setMode] = useState('light');

  const toggleSwitch = () => {
    if (myMode ==='light'){
      setMode('black');
      document.body.style.backgroundColor='#292929';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
      <Navbar title1="Tuddy" title2="About" title3="Contact" mode={myMode} toggle={toggleSwitch}/>
      <TextForm header="Tuddy: Text Buddy" mode={myMode}/>
      <About/>
    </>
  );
}

export default App;
