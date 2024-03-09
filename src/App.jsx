import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Sidecanva from './Components/Sidecanva';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Sidecanva/>
      <Home/>
      </BrowserRouter>
    </>
    
  );
};

export default App;