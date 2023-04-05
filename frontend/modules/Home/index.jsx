import HeroSection from "./HeroSection"
import InteractSection from "./InteractSection"
import FeatureSection from "./FeatureSection"
import Carousel from "./Carousel"
const Home = ({ homepage }) => {
  console.log(homepage)
  return (
    <>
      <HeroSection heroData={homepage.hero} />
      <InteractSection />
      <FeatureSection />
      <Carousel slideData={homepage.carouselArticles} />
    </>
  )
}

export default Home
