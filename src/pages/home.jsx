// Import Components
import Hero from '../components/hero.jsx'
import DisplyaProduct from '../components/displayProducts'
import Stats from '../components/stat.jsx'
import Pricing from '../components/pricing.jsx'
import  Testimonial  from '../components/testimonial.jsx'
import Footer from '../components/footer.jsx'
import Navbar from '../components/navbar.jsx'


function home() {
  
  return (
    <>
        <Navbar />
        <Hero />
        <DisplyaProduct />
        <Stats />
        <Pricing />
        <Testimonial />
        <Footer />
    </>
  )
}

export default home