import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'

const ItemCount = ({stock, inicial, onAdd}) => {

    const [contador, setContador] = useState(inicial)

    const increment = ()=>{

        if(contador < stock ){  
            setContador(contador+1)
        }
    }

    const decrement = ()=>{
        if (contador > 1) {
            setContador(contador-1)
        }
    }

  return (
    <div className='Container'>

        <Button onClick={()=>decrement()}> - </Button>
        <h4>{contador}</h4>
        <Button onClick={()=>increment()}> + </Button>
        <div>
        <Button onClick={()=>onAdd(contador)} disabled={!stock}>Agregar al carrito</Button>
        </div>
    </div>
  )
}

export {ItemCount}