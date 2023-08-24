import { useEffect, useState } from 'react'
import { getProducts } from '../api/firebase'

export default function useProducts() {
  const [allProducts, setAllProducts] = useState([])
  useEffect(() => {
    getProducts().then((res) => (
      setAllProducts(res)//firebase DB연동
    ))
  }, [])
  return (
    [allProducts]
  )
}
