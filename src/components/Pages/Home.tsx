import AboutSection from "../AboutSection"
import Carousel from "../Carousel"
import Partners from "../Partners"
import ProductSection from "../ProductSection"
import Testimonial from "../Testimonial"

const Home = () => {
  return (
    <div>
        <Carousel />
        <ProductSection/>
        <Testimonial />
        <Partners />
        <AboutSection />
    </div>
  )
}

export default Home