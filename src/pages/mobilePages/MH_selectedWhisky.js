import React, { useEffect, useState } from 'react'
import style from './css/MH_selected.module.css'
import useProducts from '../../Hooks/useProducts'

export default function MH_selectedWhisky({m_setFilterProducts}) {
  const [allProducts]= useProducts();
  const[m_selectedType, m_setSelectedType]= useState([]);

  const handleTypeChange = (e)=>{
    const updatedSelectedType= e.target.name;
    m_setSelectedType((prev)=>{
      if(prev.includes(updatedSelectedType)){
        return prev.filter((type)=> type !== updatedSelectedType)
      }else{
        return [...prev, updatedSelectedType]
      }
    })
    // const activateMenu =((e)=>{
    //   if(e==m_selectedType){
    //     m_selectedType.classList.add('selected')
    //   }else{
    //     m_selectedType.classList.remove('selected')
    //   }
    // })
  }

  useEffect(() => {
    const m_filteredProuducts = m_selectedType.length >= 0
      ? allProducts.filter((item) => m_selectedType.includes(item.type))
      : '';
      m_setFilterProducts(m_filteredProuducts);
  }, [m_selectedType])

  return (
    <section id={style.M_selected_wrap}>
      <ul id={style.M_selected_list}>
        <li name='whisky' checked={m_selectedType.includes('whisky')} onClick={handleTypeChange}>Whisky</li>
        <li name='Vodka' checked={m_selectedType.includes('Vodka')} onClick={handleTypeChange}>Vodka</li>
        <li name='Brandy' checked={m_selectedType.includes('Brandy')} onClick={handleTypeChange}>Brandy</li>
        <li name='Tequila' checked={m_selectedType.includes('Tequila')} onClick={handleTypeChange}>Tequila</li>
        <li name='Rum' checked={m_selectedType.includes('Rum')} onClick={handleTypeChange}>Rum</li>
        <li name='Jin' checked={m_selectedType.includes('Jin')} onClick={handleTypeChange}>Jin</li>
        <li name='Liqueur' checked={m_selectedType.includes('Liqueur')} onClick={handleTypeChange}>Liqueur</li>
      </ul>
    </section>
  )
}
