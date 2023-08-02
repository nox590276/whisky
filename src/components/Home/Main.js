import React from 'react'
import style from './css/Hom.module.css'
import HighLights from './HighLights'
import TheCollection from './TheCollection'
import RecommendedContents from './RecommendedContents'
import RecentlyAdded from './RecentlyAdded'
import SearchBest from './SearchBest'
import GiftCard from './GiftCard'
import Popular from './Popular'
import WiseSaying from './WiseSaying'
export default function Main() {

  return (
    <section id={style.home_wrap}>
      <HighLights />
      <TheCollection />
      <RecommendedContents />
      <RecentlyAdded />
      <SearchBest />
      <GiftCard />
      <Popular />
      <WiseSaying />
    </section>
  )
}
