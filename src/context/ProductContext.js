import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext();

export function useProductContext(){
  return useContext(ProductContext);
}
export default function ProductProvider({children}) {
  const [filteredProducts, setFilteredProuducts] =useState([]);
  const [isAnyChechboxChaecked, setIsAnyCheckboxChecked] = useState(false);
  return (
    <ProductContext.Provider
    value={{
      filteredProducts,
      setFilteredProuducts,
      isAnyChechboxChaecked,
      setIsAnyCheckboxChecked,
    }}
    >
      {children}
    </ProductContext.Provider>
  )
}
