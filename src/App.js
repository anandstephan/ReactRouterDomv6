import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Featured from './components/Featured'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewProduct from './components/NewProduct'
import NoMatch from './components/NoMatch'
import OrderSummary from './components/OrderSummary'
import Product from './components/Product'

const App = () =>{
return <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='order-summary' element={<OrderSummary/>}/>
  <Route path='products' element={<Product/>}>
    <Route index element={<Featured/>}/>
    <Route path='new' element={<NewProduct/>}/>
    <Route path='featured' element={<Featured/>}/>
  </Route>
  <Route path='*' element={<NoMatch/>}/>
</Routes>
</>
}

export default App