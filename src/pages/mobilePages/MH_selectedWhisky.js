import React, { useEffect, useState } from 'react'
import style from './css/MH_selected.module.css'
import useProducts from '../../Hooks/useProducts'
import { gsap } from 'gsap';

export default function MH_selectedWhisky({setFilteredProducts}) {
  const [allProducts]= useProducts();
  const[selectedType, setSelectedType]= useState([]);
  const handleTypeChange = (e)=>{
    const updatedSelectedType= e.target.name;
    setSelectedType((prev)=>{
      if(prev.includes(updatedSelectedType)){
        return prev.filter((type)=> type !== updatedSelectedType)
      }else{
        return [...prev, updatedSelectedType]
      }
    })
  }
  useEffect(() => {
    const filteredProuducts = selectedType.length >= 0
      ? allProducts.filter((item) => selectedType.includes(item.type))
      : '';
    setFilteredProducts(filteredProuducts);
  }, [selectedType])
  return (
    <section id={style.M_selected_wrap}>
      <ul id={style.M_selected_list}>
        <li name='whisky' checked={selectedType.includes('whisky')} onClick={handleTypeChange}>Whisky</li>
        <li name='Vodka' checked={selectedType.includes('Vodka')} onClick={handleTypeChange}>Vodka</li>
        <li name='Brandy' checked={selectedType.includes('Brandy')} onClick={handleTypeChange}>Brandy</li>
        <li name='Tequila' checked={selectedType.includes('Tequila')} onClick={handleTypeChange}>Tequila</li>
        <li name='Rum' checked={selectedType.includes('Rum')} onClick={handleTypeChange}>Rum</li>
        <li name='Jin' checked={selectedType.includes('Jin')} onClick={handleTypeChange}>Jin</li>
        <li name='Liqueur' checked={selectedType.includes('Liqueur')} onClick={handleTypeChange}>Liqueur</li>
      </ul>
    </section>
  )
}
