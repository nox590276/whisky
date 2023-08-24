import React, { useEffect, useState } from 'react'
import style from './css/productDetail.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { getProductDetail } from '../api/firebase';

export default function ProductDetail() {
  const { productId } = useParams()
  const [productItem, setProductItem] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getProductDetail(productId).then((res) => (
      setProductItem(res)
    ))
  }, [productId])

    // 뒤로가기 버튼을 눌렀을 때 브라우저에서 이전 페이지로 이동하면서 useEffect() 함수를 다시 호출해서 데이터를 업데이트하도록 함
    const handleBackButtonClick = () => {
      navigate(-1);
    }
  return (
    <>
      <div id={style.productDetail_wrap}>
        <section id={style.productDetail}>
          <div id={style.productDetail_imgBox}>
            <p id={style.productDetail_img}>
              <img src={productItem.image} alt={productItem.name} />
            </p>
          </div>
          <p id={style.detail_section_bar}></p>
          <p id={style.FaXmark} onClick={handleBackButtonClick} onMouseDown={(e) => {
            e.preventDefault()
          }}><FaXmark /></p>
          <div id={style.productDetail_infoBox_wrap}>
            <div id={style.productDetail_infoBox}>
              <div id={style.product_title}>
                <p id={style.productD_name}>{productItem.name}</p>
                <p id={style.productD_type}>{productItem.type}</p>
              </div>
              <p id={style.alcohol_level}>20cl</p>
              <div id={style.productDetail_pricetitle}>
                <p id={style.price}>${productItem.price}</p>
                <p id={style.score}>
                  {Array.from({ length: productItem.score }).map((_, index) => <FaStar key={index} />)}
                </p>
              </div>
              <p id={style.info_bar}></p>
              <p id={style.detail_text}>
                A 20cl bottle of Famous Grouse's immensely popular blended Scotch Whisky. <br />
                First released in 1860, as of the 2010s, it has been Scotland's most popular <br />
                Scotch for 30 years.
              </p>
              <div id={style.danger_box}>
                <p id={style.danger_text}><FaRegHandPaper />You must be aged 18 or above to buy alcohol in the UK</p>
                <p id={style.num}>1 &nbsp; <FaAngleDown /></p>
                <button id={style.addToCart}>ADD TO CART</button>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}