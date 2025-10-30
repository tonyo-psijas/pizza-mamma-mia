import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/nav/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { FooterComponent } from './components/footer/FooterComponent.jsx';
import { Home } from './components/home/home.jsx';
import { Register } from './components/register/Register.jsx';
import { Login } from './components/login/Login.jsx';

function App() {

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Register />
      {/* <Login /> */}
      <FooterComponent />
    </>
  )
}

export default App
