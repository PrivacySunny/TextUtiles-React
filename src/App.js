// import logo from './logo.svg'; 
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether dark is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      ty: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Us"/> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode = {mode}/>} />
            {/* <About/> */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text area" mode={mode} />} />
            {/* <TextForm showAlert={showAlert} heading="Enter the text area" mode={mode} /> */}
          </Routes>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}
export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <>
//     <h1>This is me</h1>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Sunny 
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

// export default App;

