import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import './App.css';
import ResponsiveAppBar from './components/navbar/navbar';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar/>
        <React.Fragment>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/projects' element={<Projects/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
