import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from '../navBar/NavBar'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../itemListContainer/ItemListContainer'
import CheckOut from '../CheckOut/CheckOut'

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route parh='/home' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          <Route path='/checkOut' element={<CheckOut/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export {Routing}