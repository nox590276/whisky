import React from 'react'
import MH_userBox from './MHUserBox'
import MH_mainVIsualCard from './MHMainVIsualCard'
import MH_higihtLights from './MHHigihtLights'
import MH_recommandedContents from './MHRecommandedContents'
import MH_recentlyAdded from './MHRecentlyAdded'

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
