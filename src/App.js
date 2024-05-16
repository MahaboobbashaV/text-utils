import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  // const remove = () =>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  // }

  const toggleMode = () => { //put cls as parameter for multi color
    // remove()
    // document.body.classList.add('bg-'+cls)
    
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white'
      showAlert("Dark Mode has been Enabled", 'success')
      // document.title = "Text Utils in Dark mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      showAlert("light Mode has been Enabled", 'success')
      // document.title = "Text Utils in light mode"
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
    <div className="container my-3">
      <Routes>
        <Route exact path='/about' element={<About mode={mode}/>}></Route>
      </Routes>
     <Routes>
      <Route exact path='/' element={<TextForm toggleMode={toggleMode} heading="Try TextUtils - Enter Your Text"/>}></Route>
     </Routes>
      </div>
      </BrowserRouter>
   </>
  );
}

export default App;