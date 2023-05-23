import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextConverter from './Components/TextConverter';
import Alert from './Components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
  }, 2000)
  }

  let toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0a3966';
      showAlert("Dark Mode is Enable!", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enable!", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <TextConverter heading="Enter Text here to Analyze " mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
