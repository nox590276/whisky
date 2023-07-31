import React from 'react'
import MainVisual from './Home/MainVisual'
import style from './Home/css/Hom.module.css'
import SelectWhisky from './Home/SelectWhisky'
import HighLights from './Home/HighLights'
import TheCollection from './Home/TheCollection'
import RecommendedContents from './Home/RecommendedContents'
import RecentlyAdded from './Home/RecentlyAdded'
import SearchBest from './Home/SearchBest'
import GiftCard from './Home/GiftCard'

export default function Home() {
  return (
    <div id={style.home_wrap}>
      <MainVisual/>
      <SelectWhisky/>
      <HighLights/>
      <TheCollection/>
      <RecommendedContents/>
      <RecentlyAdded/>
      <SearchBest/>
      <GiftCard/>
    </div>
  )
}
