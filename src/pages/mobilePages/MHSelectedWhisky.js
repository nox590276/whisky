import React, { useEffect, useState } from 'react';
import style from './css/MH_selected.module.css';
import useProducts from '../../Hooks/useProducts';
import { getSelectedType } from '../../api/firebase';

export default function MHSelectedWhisky({m_setFilterProducts}) {
  const [allProducts]= useProducts();
  const[m_selectedType, m_setSelectedType]= useState([]);
  const M_Whisky = [
    {index:'abc',type:'Whisky'},
    {index:'bcd',type:'Vodka'},
    {index:'cde',type:'Brandy'},
    {index:'def',type:'Tequila'},
    {index:'efg',type:'Rum'},
    {index:'fgh',type:'Jin'},
    {index:'ghi',type:'Liqueur'}
  ]

  const handleTypeChange = (selectedtype)=>{
    if(m_selectedType.includes(selectedtype)){
      m_setSelectedType(m_selectedType.filter(item => item !== selectedtype));
    }else{
      m_setSelectedType([...m_selectedType,selectedtype])
    }
  }
  
  useEffect(() => {
    const m_filteredProuducts = m_selectedType.length > 0
      ? allProducts.filter((item) => m_selectedType.includes(item.type))
      : '';
      m_setFilterProducts(m_filteredProuducts);
  }, [allProducts, m_setFilterProducts,m_selectedType])

  useEffect(() => {
    // Firebase에서 가져온 선택된 유형에 대한 데이터를 가져옵니다.
    getSelectedType().then(selectedTypeData => {
      if (selectedTypeData) {
        m_setFilterProducts(selectedTypeData);
      }
    });
  }, [allProducts, m_setFilterProducts]);
  return (
    <section id={style.M_selected_wrap}>
      <ul id={style.M_selected_list}>
        {
          M_Whisky.map(({index, type})=>(
            <li key={index} style={{backgroundColor:m_selectedType.includes(type)?'#ccc':'#fff'}} onClick={()=>handleTypeChange(type)}>
              {type}
            </li>
          ))
        }
      </ul>
    </section>
  )
}
