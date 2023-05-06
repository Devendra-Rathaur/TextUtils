
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils-LightMode"
      // setInterval(() => {
      //   document.title = "TextUtils-is Amazing"
      // }, 2000);

      // setInterval(() => {
      //   document.title = "TextUtils-install now"
      // }, 3000);
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#272765';
      showAlert("Dark mode has been enabled", "success")
      // document.title="TextUtils-DarkMode"
    }
}

  return (
    <>
      <Router>
      <Navbar tittle="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode } />
      {/* <Navbar  tittle ="dev" />  */}
      <Alert alert={alert} />
      
      <div className="container my-5"> 
        
          <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} mode={mode} heading = "Try Text-Utils Word counter, Character counter, Remove extra spaces " />} />
            <Route path='/about' element={<About mode={mode} />} />
        </Routes>
  
        </div>
      </Router>



    </>
    
  );
}

export default App;
