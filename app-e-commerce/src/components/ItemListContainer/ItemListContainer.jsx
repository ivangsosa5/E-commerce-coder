import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { cargarProductos } from '../../asyncMock';
import { getProductByCategory } from '../../asyncMock';
import './ItemListContainer.css';
import { ItemList } from '../itemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

  const {categoryId} = useParams()

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    const renderDinamico = categoryId ? getProductByCategory : cargarProductos

    renderDinamico(categoryId).then(datos => {
      setProductos(datos);
    })
    .catch(error=>{
      console.log(error)
    })
  }, [categoryId])

  return (
    <div>
        
        <ItemList productos= {productos}></ItemList>       
       
        
    </div>
    
  )
}

export {ItemListContainer} 