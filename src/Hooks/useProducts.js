import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/firebase'

export default function useProducts() {
  const [allProducts, setAllProducts]=useState([])
  useEffect(()=>{
    // axios.get('/data/Product.json').then((res)=>(
    //   setAllProducts(res.data)
    // ))
        getProducts().then((res)=>(
      setAllProducts(res)//firebase DB연동
    ))
  },[])
  return (
    [allProducts]
  )
}
