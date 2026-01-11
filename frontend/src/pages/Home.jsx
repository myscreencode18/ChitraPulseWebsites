import React from 'react'
import HeroScene from '../sections/HeroSection'
import ConflictSection from '../sections/ConflictSection'
import VisionSection from '../sections/VisionSection'
import ShowreelSection from '../sections/ShowreelSection'
import ScriptSection from '../sections/TheScript'
import PipelineSection from '../sections/PipelineSection'
import CastSection from '../sections/CastSection'
import ReviewsSection from '../sections/ReviewsSection'
import CurtainCall from '../sections/CurtainCall'

const Home = () => {
  return (
    <div>
        <HeroScene/>
        <ConflictSection/>
        <VisionSection/>
        <ShowreelSection/>
        <ScriptSection/>
        <PipelineSection/>
        <CastSection/>
        <ReviewsSection/>
        <CurtainCall/>
    </div>
  )
}

export default Home