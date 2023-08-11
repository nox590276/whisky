import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useProducts() {
  const [allProducts, setAllProducts]=useState([])
  useEffect(()=>{
    axios.get('/data/Product.json').then((res)=>(
      setAllProducts(res.data)
    ))
  },[])
  return (
    [allProducts]
  )
}
