import React from "react"
import { Home } from "./pages/home/Home"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Nav } from "./layout/Header/Nav"
import { Footer } from "./layout/Footer/Footer"
import { Shop } from "./pages/shop/Shop"
import { Cart } from "./pages/cart/Cart"
import { Contact } from "./pages/contact/Contact"

function App() {

  return (
    <>
    <BrowserRouter basename="/E-Commerce">
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
