import React from 'react'
import MH_userBox from './MH_userBox'
import MH_mainVIsualCard from './MH_mainVIsualCard'
import MH_higihtLights from './MH_higihtLights'
import MH_recommandedContents from './MH_recommandedContents'
import MH_recentlyAdded from './MH_recentlyAdded'
import MH_selectedWhisky from './MH_selectedWhisky'

export default function MobileHome() {
  return (
    <section id='mobileHome_wrap'>
      <MH_userBox/>
      <MH_mainVIsualCard/>
      <MH_higihtLights/>
      <MH_recommandedContents/>
      <MH_recentlyAdded/>
      <MH_selectedWhisky/>
    </section>
  )
}
