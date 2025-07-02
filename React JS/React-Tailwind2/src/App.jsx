import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Cart from './pages/Cart'
import Product from './pages/Product'
import FilterData from './pages/FilterData'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/product/:id' element={<Product/>}></Route>
          <Route path='/filter-data' element={<FilterData/>}></Route>
          <Route></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
