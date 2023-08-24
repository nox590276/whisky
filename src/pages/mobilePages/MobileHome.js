import React from 'react'
import MHUserBox from './MHUserBox'
import MHMainVIsualCard from './MHMainVIsualCard'
import MHHigihtLights from './MHHigihtLights'
import MHRecommandedContents from './MHRecommandedContents'
import MHRecentlyAdded from './MHRecentlyAdded'

export default function MobileHome() {
  return (
    <section style={{overflow:'hidden'}}>
      <MHUserBox/>
      <MHMainVIsualCard/>
      <MHHigihtLights/>
      <MHRecommandedContents/>
      <MHRecentlyAdded/>
    </section>
  )
}
