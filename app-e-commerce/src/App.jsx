
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routing } from './components/routing/Routing';
import { CartProvider } from './context/cartContext';


function App() {

  return (
    <>  
      <CartProvider>
    
        <Routing></Routing>
      
      </CartProvider>
    </>
  )
}

export default App