import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/nav/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { GridComponent } from './components/grid/GridComponent.jsx'
import { HeroComponent } from './components/hero/HeroComponent.jsx';
import { FooterComponent } from './components/footer/FooterComponent.jsx';

function App({titulo = 'Mi app'}) {

  const [numero, setNumber] = useState(0)

  useEffect(() => {
    console.log(numero)
  }, [numero])
  

  return (
    <>
      <Navbar />
      <HeroComponent />
      <GridComponent />
      <FooterComponent />
    </>
  )
}

export default App
