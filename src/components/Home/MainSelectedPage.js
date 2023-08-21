import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import style from './css/MainSelectedPage.module.css'
import SelectedWhisky from './SelectWhisky'
import Main from './Main';
import { getFilteredProducts, setFilteredProductsInFirebase } from '../../api/firebase'; // firebase 관련 함수들을 불러옵니다.

export default function MainSelectedPage({allProducts, setAllProducts, filterType}) {

  const [filteredProducts, setFilteredProuducts] = useState([]);
  const [isAnyChechboxChaecked, setIsAnyCheckboxChecked] = useState(false);

  useEffect(() => {
    setIsAnyCheckboxChecked(filteredProducts.length > 0);
  }, [filteredProducts])

  useEffect(() => {
    // Firebase에서 가져온 필터링된 제품들의 데이터를 가져옵니다.
    getFilteredProducts().then(filteredProductsData => {
      if (filteredProductsData) {
        setFilteredProuducts(filteredProductsData);
      }
    });
  }, []);

  useEffect(() => {
    setFilteredProductsInFirebase(filteredProducts); // Firebase로 필터링된 제품들을 저장하는 새로운 함수(이 함수는 직접 구현해야 함)
  }, [filteredProducts]);

  const navigate=useNavigate()

  return (
    <section id={style.mainSelectedPage_wrap}>
      <SelectedWhisky setFilteredProuducts={setFilteredProuducts} /> {/* props로 전달해주는 부분 */}
      {!isAnyChechboxChaecked ? (
        <Main />
      )
        : (
          <ul id={style.selectedGoods_list}>
            {
              filteredProducts.map((item) => (
                <li key={item.id} onClick={()=>{
                  navigate( `/whisky/${item.id}`)
                }}>
                  <Link>
                    <p className={style.selectedGoods_img}><img src={item.image} alt={item.name} /></p>
                    <div className={style.selectedGoods_infobox}>
                      <p className={style.selectedGoods_name}>{item.name}</p>
                      <p className={style.selectedGoods_type}>{item.type}</p>
                      <div className={style.selectedGoods_scorebox}>
                        <p className={style.selectedGoods_score}>
                          {
                            Array.from({ length: item.score }).map((_, index) => <FaStar key={index} />)
                          }
                        </p>
                        <p className={style.selectedGoods_price}>${item.price}</p>
                      </div>
                      <div className={style.selectedGoods_buttonbox}>
                        <p className={style.selectedGoods_more}>More</p>
                        <p className={style.selectedGoods_goToCart}>ADD TO CART</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            }

          </ul>
        )}
    </section>
  )
}
