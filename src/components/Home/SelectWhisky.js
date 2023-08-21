import React, { useEffect, useState } from 'react'
import style from './css/SelectedWhisky.module.css'
import useProducts from '../../Hooks/useProducts'
import { getSelectedType , setSelectedTypeInFirebase} from '../../api/firebase';

export default function SelectWhisky({ setFilteredProuducts }) {
  const [allProducts] = useProducts()
  const [selectedType, setSelectedType] = useState([])

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedType((prev) => {
      if (prev.includes(selectedType)) {
        return prev.filter((type) => type !== selectedType)
      } else {
        return [...prev, selectedType]
      }
    })
  }

  useEffect(() => {
    const filteredProuducts = selectedType.length >= 0
      ? allProducts.filter((item) => selectedType.includes(item.type))
      : '';
    setFilteredProuducts(filteredProuducts);
  }, [selectedType])

  useEffect(() => {
    // Firebase에서 가져온 선택된 유형에 대한 데이터를 가져옵니다.
    getSelectedType().then(selectedTypeData => {
      if (selectedTypeData) {
        setSelectedType(selectedTypeData);
      }
    });
  }, [allProducts, setFilteredProuducts]);

  useEffect(() => {
    // Firebase에서 가져온 선택된 유형에 대한 데이터를 가져옵니다.
    getSelectedType().then(selectedTypeData => {
      if (selectedTypeData) {
        setSelectedType(selectedTypeData);
      }
    });
  }, []);


  // 체크박스 선택 상태가 변경될 때마다 Firebase에 저장
  useEffect(() => {
    setSelectedTypeInFirebase(selectedType); // Firebase로 선택된 유형을 저장하는 새로운 함수(이 함수는 직접 구현해야 함)
  }, [selectedType]);

  return (
    <section id={style.selectWhisky_wrap}>
      <div id={style.selectWhisky_checkbox_wrap}>
        <ul id={style.selectWhisky_checkbox}>
          <li>Whisky <input type='checkbox' value='Whisky' checked={selectedType.includes('Whisky')} onChange={handleTypeChange} /></li>
          <li>Vodka <input type='checkbox' value='Vodka' checked={selectedType.includes('Vodka')} onChange={handleTypeChange} /></li>
          <li>Brandy <input type='checkbox' value='Brandy' checked={selectedType.includes('Brandy')} onChange={handleTypeChange} /></li>
          <li>Tequila <input type='checkbox' value='Tequila' checked={selectedType.includes('Tequila')} onChange={handleTypeChange} /></li>
          <li>Rum <input type='checkbox' value='Rum' checked={selectedType.includes('Rum')} onChange={handleTypeChange} /></li>
          <li>Jin <input type='checkbox' value='Jin' checked={selectedType.includes('Jin')} onChange={handleTypeChange} /></li>
          <li>Liqueur <input type='checkbox' value='Liqueur' checked={selectedType.includes('Liqueur')} onChange={handleTypeChange} /></li>
        </ul>
        <ul id={style.scroll_box}>
          <li className={style.price_scroll}><span className={style.scroll_title}>price</span>< span className={style.block}></span></li>
          <li className={style.price_scroll}><span className={style.scroll_title}>Year Old</span> <br></br><span className={style.block}></span></li>
        </ul>
      </div>
    </section>
  )
}
