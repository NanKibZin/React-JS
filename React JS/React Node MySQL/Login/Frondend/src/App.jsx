import Login from './Login'
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './Signup'
import Home from './Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
const App = () => {
  return (
   <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
       </Routes>
   </BrowserRouter>
  )
}

export default App
