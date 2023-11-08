
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navBar/NavBar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Routing } from './components/routing/Routing';


function App() {

  return (
    <>
        <Routing></Routing>
    </>
  )
}

export default App