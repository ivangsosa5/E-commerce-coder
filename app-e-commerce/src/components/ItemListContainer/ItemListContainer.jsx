import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// import { cargarProductos } from '../../asyncMock';
// import { getProductByCategory } from '../../asyncMock';
import './ItemListContainer.css';
import { ItemList } from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import {firebaseApp} from '../../fireBase/config';



const ItemListContainer = () => {

  const {categoryId} = useParams()

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    const db = getFirestore(firebaseApp);
    const collectionRef = collection(db, 'items');
    const q = categoryId? query(collectionRef, where('category', '==', categoryId)): collectionRef

    getDocs(q).then((snapshot)=>{
      if(snapshot.size !== 0){
        const productsList = snapshot.docs.map((item)=>({
          id: item.id,
          ...item.data()
        }));
        setProductos(productsList)
      }else{
        alert('PRODUCTOS NO ENCONTRADO')
      }

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