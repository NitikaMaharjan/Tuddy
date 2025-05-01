import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [myMode, setMode] = useState('light');
  const [myAlert, setMyAlert] = useState(null);

  const showAlert = (status, msg) => {
    setMyAlert({
      status : status,
      msg : msg
    });
    setTimeout(() => {
      setMyAlert(null);
    }, 2000);
  }

  const toggleSwitch = () => {
    if (myMode ==='light'){
      setMode('black');
      document.body.style.backgroundColor='#292929';
      showAlert("success", "You have enabled dark mode!");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("success", "You have enabled light mode!");
    }
  }
  // var name = "Nitika";

  return (
    <>
      <Navbar title1="Tuddy" title2="About" title3="Contact" mode={myMode} toggle={toggleSwitch}/>
      <Alert alert={myAlert}/>
      <TextForm header="Tuddy: Text Buddy" mode={myMode} showAlert={showAlert}/>
      <About/>

      {/* {<h1>Hello {name}</h1>
      <h1>{"Hello " + name}</h1>
      <h1>{`Hello ${name}`}</h1>using template literal */}
    </>
  );
}

export default App;
