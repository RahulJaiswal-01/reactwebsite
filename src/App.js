import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
  

// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");//whether dark mode is enabled or not 

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(()=>{
    setAlert(null);
  },2000)

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled", "success");
    }
  }
  return (
  
    <>
    {/* <Router> */}
      <Navbar title="TEXT-CONVERTOR" mode={Mode} toggleMode={toggleMode} />

 <Alert alert={alert}/>
   <div className="container my-3">
      {/* <Switch> */}
          {/* <Route exact path="/about"> <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text below " mode={Mode}/>
          {/* </Route> */}
        {/* </Switch> */}
        </div>
        {/* </Router> */}
      
    </>
  );
}

export default App;
