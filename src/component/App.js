import React from 'react';
import Navbar from './Navbar';
import Front from './Front';
import CustomComponent from './CustomComponent';
import Mid from './Mid'
import Appdev from './Appdev';
import Project from './Project';
import Footer from './Footer';
import '../assets/App.css';
import MyComponent from './MyComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
   <React.Fragment>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Front/>} />
      <Route path="/concept" element={<Mid/>} style ={{margin:'80px'}} />
      <Route path="/investment" element={<CustomComponent/>} style ={{margin:'80px'}} />
      <Route path="/about" element={<Appdev/>} style ={{margin:'80px'}} />
      <Route path="/projects" element={<Project/>} style ={{margin:'80px'}} />
      <Route path="/career" element={<MyComponent/>} style ={{margin:'80px'}} />
      </Routes>
      <Footer/>
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
