import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import style from './css/mobileWhiskySearch.module.css'
import { getFilteredProducts, setFilteredProductsInFirebase } from '../../api/firebase';
import MH_selectedWhisky from './MHSelectedWhisky';
import MobileHome from './MobileHome';
import { Link } from 'react-router-dom';

export default function MobileWhiskySearch() {
  const [m_filteredProducts, m_setFilterProducts] = useState([]);
  const [m_isAnyChechboxChaecked, m_setIsAnyChechboxChaecked] = useState(false)

  useEffect(() => {
    m_setIsAnyChechboxChaecked(m_filteredProducts.length > 0)
  }, [m_filteredProducts])

  useEffect(() => {
    getFilteredProducts().then((m_filteredProductsData) => {
      if (m_filteredProductsData) {
        m_setFilterProducts(m_filteredProductsData)
      }
    })
  }, []);

  useEffect(() => {
    setFilteredProductsInFirebase(m_filteredProducts);
  }, [m_filteredProducts]);

  return (
    <section id={style.mobileWhiskySearch_wrap}>
      <MH_selectedWhisky m_setFilterProducts={m_setFilterProducts} />
      {!m_isAnyChechboxChaecked ? (
        <MobileHome />
      ) : (<ul id={style.MselectedGoods_list}>
        {m_filteredProducts.map((item) => (
          <li key={item.id}>
            <Link>
              <div id={style.MselectedGoods_imgbox}>
                <p id={style.MselectedGoods_img}><img src={item.image} alt='BOWMORE DISTILLERY' /></p>
                <p id={style.MselectedGoods_heart}><FaRegHeart /></p>
              </div>
              <div id={style.MselectedGoods_infoBox}>
                <p id={style.MselectedGoods_name}>{item.name}</p>
                <p id={style.MselectedGoods_type}>{item.type}</p>
                <div id={style.MselectedGoods_scoreBox}>
                  <p id={style.MselectedGoods_score}> {
                    Array.from({ length: item.score }).map((_, index) => <FaStar key={index} />)
                  }</p>
                  <p id={style.MselectedGoods_price}>${item.price}</p>
                </div>
                <div id={style.MselectedGoods_buttonBox}>
                  <p id={style.MselectedGoods_more}>More</p>
                  <p id={style.MselectedGoods_goTocart}>ADD TO CART</p>
                </div>
              </div>
            </Link>
          </li>
        ))}

      </ul>)}
    </section>
  )
}
