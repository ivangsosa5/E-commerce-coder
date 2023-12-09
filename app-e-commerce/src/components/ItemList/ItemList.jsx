import React from 'react'
import { Item } from '../item/Item'

const ItemList = ({productos}) => {

  console.log({productos})
 
  return (
    <div>
        <ul>
            {productos.map(producto=><Item key={producto.id} producto={producto}/>
            )}
        </ul>

    </div>
  )
}

export {ItemList} 