import Navbar from '../components/Navbar'
import Annuouncement from '../components/Annuouncement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <Annuouncement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
