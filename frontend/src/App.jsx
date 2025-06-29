import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Product from './pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product/:prouctId' element={<Product />} />
        <Route path='/order' element={<Order />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/login' element={<Login />} />
      </Routes>
     
    </div>
  )
}

export default App
