import { useEffect, useState } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { Navbar } from './components/nav/Navbar.jsx'
import { FooterComponent } from './components/footer/FooterComponent.jsx';
import { Register } from './views/register/Register';
import { Route, Routes } from 'react-router-dom'
import { Login } from './views/login/Login.jsx';
import { Home } from './views/home/Home.jsx';
import PizzaApi from './components/pizza-api/PizzaApi.jsx';
import PizzaCart from './views/cart/PizzaCart.jsx';
import NotFound from './views/notfound/NotFound.jsx';
import ProfilePage from './views/profile-page/ProfilePage.jsx';
import CartProvider from './context/CartContext.jsx';
import PizzaProvider from './context/PizzaContext.jsx';

function App() {

  return (
    <>
      <PizzaProvider>
        <CartProvider>
          <Navbar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login'  element={<Login />}/>
              <Route path='/cart'  element={<PizzaCart />}/>
              <Route path='/pizza/p001'  element={<PizzaApi />}/>     
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='*'  element={<NotFound />}/>

            </Routes>

          <FooterComponent />
        </CartProvider>
      </PizzaProvider>
    </>
  )
}

export default App
