import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './page/Home'

const router=createBrowserRouter([
  {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"AboutUs",
          element:<h2>About Us</h2>
        },
        {
          path:"services",
          element:<h2>About service</h2>
        },
       
        {
          path:"Contact Us",
          element:<h2>contact Us</h2>
        },
       
      ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
