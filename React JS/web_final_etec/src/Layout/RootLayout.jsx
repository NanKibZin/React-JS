import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/footer';
import Slide from '../component/Slide';
const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <Slide/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
