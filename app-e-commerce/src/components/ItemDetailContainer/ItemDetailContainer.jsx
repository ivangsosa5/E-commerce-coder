import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const {itemId} = useParams()
    
    const [producto, setProducto] = useState([])

    useEffect(()=>{
        getProductById(itemId).then(datos => {
          setProducto(datos);
        })
        .catch(error =>{
          console.log(error)
        })
      }, [])

  return (
    <div>
        <ItemDetail producto ={producto}></ItemDetail>
    </div>
  )
}

export {ItemDetailContainer}