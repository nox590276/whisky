import React from 'react'
import MH_userBox from './MH_userBox'
import MH_mainVIsualCard from './MH_mainVIsualCard'
import MH_higihtLights from './MH_higihtLights'
import MH_recommandedContents from './MH_recommandedContents'
import MH_recentlyAdded from './MH_recentlyAdded'

export default function MobileHome() {
  return (
    <section style={{overflow:'hidden'}}>
      <MH_userBox/>
      <MH_mainVIsualCard/>
      <MH_higihtLights/>
      <MH_recommandedContents/>
      <MH_recentlyAdded/>
    </section>
  )
}
