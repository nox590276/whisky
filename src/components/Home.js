import React, { useState } from 'react'
import MainVisual from './Home/MainVisual'
import style from './Home/css/Hom.module.css'
import MainSelectedPage from './Home/MainSelectedPage';

export default function Home() {
  const [filteredProducts, setFilteredProuducts] = useState([])
  return (
    <div id={style.home_wrap}>
      <MainVisual/>
      <MainSelectedPage filteredProducts={filteredProducts} />
    </div>
  )
}
