import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import ProductShowcase from '../components/home/ProductShowcase'
import RecipeSection from '../components/home/RecipeSection'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
      <RecipeSection />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default Home